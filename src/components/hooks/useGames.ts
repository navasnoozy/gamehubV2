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
import apiClient from "@/services/api-Client";
import { FetchedResType } from "@/services/api-Client";
import { platformType } from "./usePlatforms";

const useGames = (gameQuery:GameQueryType)=> useQuery<FetchedResType<GameType>, Error>({
  queryKey : ['games',gameQuery],
  queryFn: ()=>apiClient
  .get<FetchedResType<GameType> >('/games',{params:{
    genres: gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchInput
  }})
  .then(res=>res.data),
  
})

export default useGames;
