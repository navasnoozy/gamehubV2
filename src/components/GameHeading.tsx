
import { Heading } from "@chakra-ui/react";
import { useFindGenre, useFindPlatform } from "./hooks/useFindSelected";
import useGameQueryStore from "@/store";

const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId)
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId)

  //finding selected Platform and Genre details
  const selectedGenre = useFindGenre(selectedGenreId)
  const selectedPlatform = useFindPlatform(selectedPlatformId)

  const heading = `${selectedGenre?.name || ""} ${ 
    selectedPlatform?.name || ""
  } Games`;

  return (
    <Heading marginBottom='10' fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
