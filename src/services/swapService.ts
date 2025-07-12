import { supabase, Swap } from '../lib/supabase';

export interface CreateSwapData {
  item_id: string;
  offered_item_id?: string;
  points_offered?: number;
  message?: string;
}

export const swapService = {
  // Create swap request
  async createSwap(swapData: CreateSwapData) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    // Get item owner
    const { data: item, error: itemError } = await supabase
      .from('items')
      .select('owner_id')
      .eq('id', swapData.item_id)
      .single();

    if (itemError) throw itemError;

    const { data, error } = await supabase
      .from('swaps')
      .insert({
        ...swapData,
        requester_id: user.id,
        owner_id: item.owner_id
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Get user's swaps
  async getUserSwaps(userId: string) {
    const { data, error } = await supabase
      .from('swaps')
      .select(`
        *,
        item:items(title, images, points),
        offered_item:items(title, images, points),
        requester:profiles(name, avatar_url),
        owner:profiles(name, avatar_url)
      `)
      .or(`requester_id.eq.${userId},owner_id.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Update swap status
  async updateSwapStatus(swapId: string, status: string) {
    const { data, error } = await supabase
      .from('swaps')
      .update({ status })
      .eq('id', swapId)
      .select()
      .single();

    if (error) throw error;

    // If swap is accepted, handle point transactions and item status updates
    if (status === 'accepted') {
      await this.processSwapAcceptance(data);
    }

    return data;
  },

  // Process swap acceptance
  async processSwapAcceptance(swap: Swap) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    // If it's a point-based swap
    if (swap.points_offered) {
      // Transfer points from requester to owner
      await supabase.rpc('transfer_points', {
        from_user: swap.requester_id,
        to_user: swap.owner_id,
        points: swap.points_offered,
        swap_id: swap.id
      });
    }

    // Update item status
    await supabase
      .from('items')
      .update({ status: 'swapped' })
      .eq('id', swap.item_id);

    if (swap.offered_item_id) {
      await supabase
        .from('items')
        .update({ status: 'swapped' })
        .eq('id', swap.offered_item_id);
    }
  },

  // Get pending swaps for admin
  async getPendingSwaps() {
    const { data, error } = await supabase
      .from('swaps')
      .select(`
        *,
        item:items(title, images),
        offered_item:items(title, images),
        requester:profiles(name, avatar_url),
        owner:profiles(name, avatar_url)
      `)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};