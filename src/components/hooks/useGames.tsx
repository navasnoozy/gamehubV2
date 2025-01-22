// useGames.tsx file
import apiClient from "@/services/api-Client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Games {
  id: number;
  name: string;
}

interface GamesListType {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GamesListType>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
      return ()=> controller.abort()
  }, []);

  return { games, error };
};

export default useGames;
