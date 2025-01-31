// App.tsx file
export interface GameQueryType {
  genre: GenreType | null;
  platform: platformType | null;
  sortOrder: string;
  searchInput: string;
}

import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { GenreType } from "./components/hooks/useGenre";
import { useState } from "react";
import PlatformFilter from "./components/PlatformFilter";
import { platformType } from "./components/hooks/useGames";
import SortGames from "./components/SortGames";
import GameHeading from "./components/GameHeading";

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQueryType>(
    {} as GameQueryType
  );

  return (
    <Grid
      padding={4}
      templateAreas={{
        base: `"nav" "main"`,
        lg: ` "nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        paddingX={4}
        paddingY={4}
        marginY={3}
        marginX={2}
        border="solid"
        borderWidth="1px"
        borderRadius="md"
        borderColor="gray.100"
        area={"nav"}
      >
        <NavBar
          onSearch={(searchInput) =>
            setGameQuery({ ...gameQuery, searchInput })
          }
        />
      </GridItem>

      <GridItem
        paddingTop={8}
        paddingLeft={4}
        paddingRight={15}
        margin={2}
        hideBelow={"lg"}
        area={"sidebar"}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem
        border="solid"
        borderWidth="1px"
        borderRadius="md"
        borderColor="gray.100"
        marginX={2}
        paddingY={2}
        area={"main"}
      >
        <Box spaceX={1} paddingX={8}>
          <GameHeading gameQuery={gameQuery} />
          <PlatformFilter
            selectedPlatform={gameQuery.platform}
            onFilterByPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortGames
            selectedSortOrder={gameQuery.sortOrder}
            onSelectGameSort={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
