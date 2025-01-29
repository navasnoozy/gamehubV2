// useGames.tsx file

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
};

interface PropsType {
  selectedGenre : GenreType | null;
  selectedPlatform : platformType | null;
}

import useData from "./useData";
import { GenreType } from "./useGenre";

const useGames = ({selectedGenre, selectedPlatform}: PropsType) =>
  useData<GameType>("/games", { params: { genres: selectedGenre?.id , platforms: selectedPlatform?.id } }, [
    selectedGenre?.id, selectedPlatform?.id
  ]);

export default useGames;
