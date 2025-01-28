// useGames.tsx file
import useData from "./useData";
import { GenreType } from "./useGenre";

export interface platformType {
  id: number;
  name: string;
  slug: string;
}

export interface GameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platformType }[];
  metacritic: number;
}

const useGames = (selectedGenre: GenreType | null) =>
  useData<GameType>("/games", { params: { genres: selectedGenre?.id } },[selectedGenre?.id]);

export default useGames;
