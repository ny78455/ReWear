import { supabase, Item, Category } from '../lib/supabase';

export interface CreateItemData {
  title: string;
  description: string;
  category_id: string;
  size: string;
  condition: string;
  brand?: string;
  color?: string;
  material?: string;
  points: number;
  images: string[];
  tags: string[];
}

export const itemService = {
  // Get all active items with pagination
  async getItems(page = 1, limit = 12, filters?: {
    category?: string;
    search?: string;
    sortBy?: string;
  }) {
    let query = supabase
      .from('items')
      .select(`
        *,
        category:categories(name, slug),
        owner:profiles(name, avatar_url, location)
      `)
      .eq('status', 'active')
      .range((page - 1) * limit, page * limit - 1);

    // Apply filters
    if (filters?.category && filters.category !== 'all') {
      query = query.eq('category.slug', filters.category);
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,brand.ilike.%${filters.search}%`);
    }

    // Apply sorting
    switch (filters?.sortBy) {
      case 'points-low':
        query = query.order('points', { ascending: true });
        break;
      case 'points-high':
        query = query.order('points', { ascending: false });
        break;
      case 'newest':
      default:
        query = query.order('created_at', { ascending: false });
        break;
    }

    const { data, error, count } = await query;
    if (error) throw error;

    return { items: data || [], total: count || 0 };
  },

  // Get single item by ID
  async getItem(id: string) {
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(name, slug),
        owner:profiles(name, avatar_url, location, created_at)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new item
  async createItem(itemData: CreateItemData) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('items')
      .insert({
        ...itemData,
        owner_id: user.id
      })
      .select()
      .single();

    if (error) throw error;

    // Award points for listing
    await supabase
      .from('point_transactions')
      .insert({
        user_id: user.id,
        amount: 10,
        type: 'earned',
        description: 'Item listed',
        reference_id: data.id
      });

    // Update user points
    await supabase.rpc('increment_user_points', {
      user_id: user.id,
      points: 10
    });

    return data;
  },

  // Update item
  async updateItem(id: string, updates: Partial<CreateItemData>) {
    const { data, error } = await supabase
      .from('items')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete item
  async deleteItem(id: string) {
    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Get categories
  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) throw error;
    return data || [];
  },

  // Increment item views
  async incrementViews(id: string) {
    const { error } = await supabase.rpc('increment_item_views', {
      item_id: id
    });

    if (error) console.error('Error incrementing views:', error);
  },

  // Get user's items
  async getUserItems(userId: string) {
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(name, slug)
      `)
      .eq('owner_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};