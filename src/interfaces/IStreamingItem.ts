export interface IStreamingItem {
  id: number;
  genre_ids: number[];
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  name?: string;
}
