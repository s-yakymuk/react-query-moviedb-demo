export interface MovieModel {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}
