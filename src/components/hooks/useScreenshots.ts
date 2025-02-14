import { ScreenshotType } from "@/entities/ScreenshotType";
import APIClient from "@/services/api-Client"
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId:number) => {
    const apiClient  = new APIClient<ScreenshotType> (`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey:['screenshot',gameId],
        queryFn: apiClient.getAll,
    })
};

export default useScreenshots;