// useGenre.tsx file


import genre from "../data/genre";
import { useQuery } from "@tanstack/react-query";

export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}

import apiClient from "@/services/api-Client";
import { FetchedResType } from "@/services/api-Client";

const useGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: ()=> apiClient
    .get<FetchedResType<GenreType>>('/genres')
    .then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000,//24h
    initialData:{count: genre.length, results: genre},
  });

export default useGenre;
