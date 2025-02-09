interface PropsType {
  gameQuery: GameQueryType;
}

import { GameQueryType } from "@/App";
import { Heading } from "@chakra-ui/react";
import { useFindPlatform } from "./hooks/useFindSelected";

const GameHeading = ({ gameQuery }: PropsType) => {
  
  const selectedPlatform = useFindPlatform(gameQuery.platformId)

  const heading = `${selectedPlatform?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;

  return (
    <Heading marginY={8} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
