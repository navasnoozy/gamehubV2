// GamesGrid.tsx file

import { Heading, SimpleGrid } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const SkeletonCount = [1,2,3,4,5,6,7,8,9];

  return (
    <>
      {error && <Heading color='red' as={"h1"}>{error}</Heading>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} padding={8} gap={6}>
        { isLoading && SkeletonCount.map((times)=> <GameCardSkeletons key={times} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  ); 
};

export default GameGrid;
