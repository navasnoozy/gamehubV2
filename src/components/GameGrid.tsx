// GamesGrid.tsx file
interface PropsType {
  gameQuery: GameQueryType;
}

import { GameQueryType } from "@/App";
import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./hooks/useGames";
import { GameCardSkeletons } from "./Skeletons";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";

const GameGrid = ({ gameQuery }: PropsType) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage, isFetching } =
    useGames(gameQuery);
  const SkeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error)
    return (
      <Heading color="red" as={"h1"}>
        {error.message}
      </Heading>
    );

  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      dataLength={fetchedGameCount}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding={8}
        gap={12}
      >
        {isLoading &&
          SkeletonCount.map((times) => <GameCardSkeletons key={times} />)}

        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
