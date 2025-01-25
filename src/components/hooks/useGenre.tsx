
import useData from "./useData";

export interface GenreType {
  id: number;
  name: string;
}


const useGenre = ()=> useData<GenreType>('/genres')

export default useGenre;
