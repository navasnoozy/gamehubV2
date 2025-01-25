// useGames.tsx file
import useData from "./useData";

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


const useGames = ()=> useData<GameType>('/games');

export default useGames;
