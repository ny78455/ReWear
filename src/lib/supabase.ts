import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Profile {
  id: string;
  name: string;
  avatar_url?: string;
  points: number;
  is_admin: boolean;
  location?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  category_id: string;
  size: string;
  condition: string;
  brand?: string;
  color?: string;
  material?: string;
  points: number;
  status: 'active' | 'swapped' | 'pending' | 'removed';
  owner_id: string;
  images: string[];
  tags: string[];
  views: number;
  created_at: string;
  updated_at: string;
  // Relations
  category?: Category;
  owner?: Profile;
}

export interface Swap {
  id: string;
  requester_id: string;
  owner_id: string;
  item_id: string;
  offered_item_id?: string;
  points_offered?: number;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  message?: string;
  created_at: string;
  updated_at: string;
  // Relations
  requester?: Profile;
  owner?: Profile;
  item?: Item;
  offered_item?: Item;
}

export interface Favorite {
  id: string;
  user_id: string;
  item_id: string;
  created_at: string;
  // Relations
  item?: Item;
}

export interface PointTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: 'earned' | 'spent' | 'bonus';
  description: string;
  reference_id?: string;
  created_at: string;
}