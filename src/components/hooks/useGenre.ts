// useGenre.tsx file

import { useQuery } from "@tanstack/react-query";

export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}

import APIClient from "@/services/api-Client";
import genre from "../data/genre";

const apiClient = new APIClient<GenreType>('/genres')

const useGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,//24h
    initialData:genre
  });

export default useGenre;
