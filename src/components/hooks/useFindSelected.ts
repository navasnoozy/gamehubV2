import useGenre from "./useGenre";
import usePlatform from "./usePlatforms";

export const useFindPlatform = (id?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === id);
};

export const useFindGenre = (id?: number) => {
  const { data: genre } = useGenre();
  return genre?.results.find((g) => g.id === id);
};


