// useGames.tsx file
import apiClient from "../../services/api-Client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

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

interface GamesListType {
  count: number;
  results: GameType[];
}

const useGames = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<GamesListType>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false)
      });
    return () => controller.abort();
  }, []);

  return { games, error , isLoading };
};

export default useGames;
