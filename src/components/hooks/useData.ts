//  useData.tsx file
 
 import apiClient from "@/services/api-Client";
import { CanceledError } from "axios";
 import { useEffect, useState } from "react";
 

 
 interface FetchedResType<T> {
   count: number;
   results: T[];
 }
 
 const useData = <T> (endpoint: string) => {
   const [data, setData] = useState<T[]>([]);
   const [error, setError] = useState("");
   const [isLoading, setLoading] = useState(false);
 
   useEffect(() => {
     const controller = new AbortController();
     setLoading(true);
     apiClient
       .get<FetchedResType<T>>(endpoint,{signal: controller.signal})
       .then((res) => {
         setData(res.data.results);
         setLoading(false);
       })
       .catch((error) => {
        if (error instanceof CanceledError) return
         setError(error.message);
         setLoading(false);
       });
       return ()=> controller.abort()
   },[endpoint]);
   return { data, error, isLoading };
 };


 
 export default useData;
 