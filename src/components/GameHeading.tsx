interface PropsType {
  gameQuery: GameQueryType;
}

import { GameQueryType } from "@/App";
import { Heading } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import usePlatform from "./hooks/usePlatforms";

const GameHeading = ({ gameQuery }: PropsType) => {
  const { data: genres } = useGenre();
  const {data:platforms} = usePlatform()
  //finding selected genre and platform
  const selectedGenre = genres.results.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms?.results.find(p=> p.id ===gameQuery.platformId)

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading marginY={8} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
