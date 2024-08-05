export interface IStreamingItem {
  id?: number;
  genres?: {
    id: number;
    name: string;
  }[];
  genre_ids?: number[];
  overview?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
  name?: string;
}
