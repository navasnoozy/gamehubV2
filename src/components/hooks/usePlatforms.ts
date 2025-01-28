// useplatform.tsx file

import useData from "./useData";
import { platformType } from "./useGames";

const usePlatform = () => useData<platformType>("/platforms/lists/parents");

export default usePlatform;
