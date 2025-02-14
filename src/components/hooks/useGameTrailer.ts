import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-Client";
import { GameTrailerType } from "@/entities/GameTrailerType";

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<GameTrailerType>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
