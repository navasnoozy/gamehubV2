// useGenre.tsx file 

export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}

import useData from "./useData";

const useGenre = () => useData<GenreType>("/genres");

export default useGenre;
