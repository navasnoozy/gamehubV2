// useGames.tsx file
import apiClient from "../../services/api-Client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface platformType {
  id : number;
  name : string;
  slug : string;
}

export interface GameType {
  id: number;
  name: string;
  background_image : string;
  parent_platforms : {platform : platformType}[];
  metacritic: number;
}

interface GamesListType {
  count: number;
  results: GameType[];
}

const useGames = () => {
  const [games, setGames] = useState<GameType[]>([]);
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
