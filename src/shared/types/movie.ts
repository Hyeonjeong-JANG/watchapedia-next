export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  rank_change: number;
  vote_average: number;
  release_date: string;
}