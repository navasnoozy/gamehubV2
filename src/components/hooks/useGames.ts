// useGames.tsx file
export interface GameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platformType }[];
  metacritic: number;
  rating_top: number;
}

import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchedResType } from "@/services/api-Client";
import { platformType } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "@/store";

const apiClient = new APIClient<GameType>("games");

const useGames = () =>{
  const gameQuery = useGameQueryStore(s=>s.gameQuery)

  return  useInfiniteQuery<FetchedResType<GameType>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchInput,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    staleTime: ms('24h')
  });
}
 

export default useGames;
