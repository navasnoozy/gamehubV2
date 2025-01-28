
import useData from "./useData";

export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}


const useGenre = ()=> useData<GenreType>('/genres')

export default useGenre;
