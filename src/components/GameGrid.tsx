// GamesGrid.tsx file

import { Heading, SimpleGrid } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  console.log("her", games);
  const SkeletonCount = [1,2,3,4,5,6,7,8,9];

  return (
    <>
      {error && <Heading>{error}</Heading>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} padding={8} gap={6}>
        { isLoading && SkeletonCount.map((count, index)=> index < count &&  <GameCardSkeletons />)}
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  ); 
};

export default GameGrid;
