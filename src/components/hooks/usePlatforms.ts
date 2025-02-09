// useplatform.tsx file
export interface platformType {
    id: number;
    name: string;
    slug: string;
  }

import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-Client";

const apiClient = new APIClient<platformType>('/platforms/lists/parents')

const usePlatform = () => useQuery({
    queryKey : ['platformlist'],
    queryFn : apiClient.getAll ,
    staleTime: 24*60*60*1000 //24h
})

export default usePlatform;
