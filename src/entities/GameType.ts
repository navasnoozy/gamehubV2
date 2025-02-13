import { GenreType } from "./GenreType";
import { platformType } from "./platformType";
import { PublisherType } from "./PublisherType";

export interface GameType {
  id: number;
  name: string;
  slug: string;
  genres: GenreType[];
  publishers: PublisherType[]
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: platformType }[];
  metacritic: number;
  rating_top: number;
}
