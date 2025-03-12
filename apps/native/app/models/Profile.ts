export interface Profile {
  id: string,
  username?: string,
  full_name?: string,
  avatar?: string,
  created_at?: number,
  updated_at?: number,
  x_score: number,
  plays: number
}