import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-Client";
import { GameType } from "./useGames";

const apiClient = new APIClient<GameType>("/games");

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: () => apiClient.getGame(slug),
  });

export default useGameDetails;
