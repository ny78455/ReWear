/*
  # Database Functions for ReWear Platform

  1. Functions
    - increment_user_points: Add points to user's balance
    - transfer_points: Transfer points between users
    - increment_item_views: Increment item view count
*/

-- Function to increment user points
CREATE OR REPLACE FUNCTION increment_user_points(user_id uuid, points integer)
RETURNS void AS $$
BEGIN
  UPDATE profiles 
  SET points = points + increment_user_points.points
  WHERE id = increment_user_points.user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to transfer points between users
CREATE OR REPLACE FUNCTION transfer_points(
  from_user uuid, 
  to_user uuid, 
  points integer,
  swap_id uuid DEFAULT NULL
)
RETURNS void AS $$
BEGIN
  -- Check if from_user has enough points
  IF (SELECT profiles.points FROM profiles WHERE id = from_user) < points THEN
    RAISE EXCEPTION 'Insufficient points';
  END IF;

  -- Deduct points from sender
  UPDATE profiles 
  SET points = points - transfer_points.points
  WHERE id = from_user;

  -- Add points to receiver
  UPDATE profiles 
  SET points = points + transfer_points.points
  WHERE id = to_user;

  -- Record transactions
  INSERT INTO point_transactions (user_id, amount, type, description, reference_id)
  VALUES 
    (from_user, -points, 'spent', 'Points spent on swap', swap_id),
    (to_user, points, 'earned', 'Points earned from swap', swap_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment item views
CREATE OR REPLACE FUNCTION increment_item_views(item_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE items 
  SET views = views + 1
  WHERE id = increment_item_views.item_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;