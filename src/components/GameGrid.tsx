// GamesGrid.tsx file
interface PropsType {
  gameQuery: GameQueryType;
}

import { Heading, SimpleGrid } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkeletons } from "./Skeletons";
import { GameQueryType } from "@/App";

const GameGrid = ({ gameQuery }: PropsType) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const SkeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Heading color="red" as={"h1"}>{error}</Heading>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={8} gap={12}>
      {isLoading &&
        SkeletonCount.map((times) => <GameCardSkeletons key={times} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
