// useGenre.tsx file

import { useQuery } from "@tanstack/react-query";

import APIClient from "@/services/api-Client";
import genre from "../data/genre";
import ms from "ms";
import { GenreType } from "../../entities/GenreType";

const apiClient = new APIClient<GenreType>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genre,
  });

export default useGenre;
