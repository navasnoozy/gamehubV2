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
  rating_top : number;
}

import { GameQueryType } from "@/App";
import useData from "./useData";

const useGames = (gameQuery: GameQueryType) =>
  useData<GameType>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search : gameQuery.searchInput,
      },
    },
    [gameQuery]
  );

export default useGames;
