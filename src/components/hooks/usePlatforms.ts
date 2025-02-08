// useplatform.tsx file
interface platformType {
    id: number;
    name: string;
    slug: string;
  }


import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-Client";
import { FetchedResType } from "@/services/api-Client";

const usePlatform = () => useQuery({
    queryKey : ['platformlist'],
    queryFn : ()=> apiClient
    .get<FetchedResType<platformType>>('/platforms/lists/parents')
    .then(res=>res.data),
    staleTime: 24*60*60*1000 //24h
})

export default usePlatform;
