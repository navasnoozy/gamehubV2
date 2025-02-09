// useGames.tsx file
export interface GameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platformType }[];
  metacritic: number;
  rating_top : number;
}

import { GameQueryType } from "@/App";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchedResType } from "@/services/api-Client";
import { platformType } from "./usePlatforms";

const apiClient = new APIClient<GameType>('games')

const useGames = (gameQuery:GameQueryType)=> useQuery<FetchedResType<GameType>, Error>({
  queryKey : ['games',gameQuery],
  queryFn: ()=> apiClient.getAll({params:{
    genres: gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchInput
  }}),
  
})

export default useGames;
