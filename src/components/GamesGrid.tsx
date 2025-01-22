// GamesGrid.tsx file

import { Heading } from "@chakra-ui/react";
import useGames from "./hooks/useGames";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Heading>{error}</Heading>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.id} {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
