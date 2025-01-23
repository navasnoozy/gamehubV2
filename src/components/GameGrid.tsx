// GamesGrid.tsx file

import { Heading, SimpleGrid } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  console.log("her", games);

  return (
    <>
      {error && <Heading>{error}</Heading>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} padding={8} gap={6}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
