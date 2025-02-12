export interface GameQueryType {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchInput?: string;
  }
interface useGameStoreType {
    gameQuery: GameQueryType;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchInput: (searchInput: string ) => void;
};

import { create } from 'zustand'


const useGameQueryStore = create<useGameStoreType>((set)=>({
    gameQuery:{},
    setSearchInput:(searchInput)=> set(()=>({gameQuery:{searchInput}})),
    setGenre: (genreId)=> set((store)=>({gameQuery:{...store.gameQuery,genreId}})),
    setPlatform:(platformId)=> set((store)=> ({gameQuery:{...store.gameQuery,platformId}})),
    setSortOrder:(sortOrder)=> set((store)=> ({gameQuery:{...store.gameQuery,sortOrder}}))
}));

export default useGameQueryStore 