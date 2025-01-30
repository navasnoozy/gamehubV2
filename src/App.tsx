// App.tsx file
export interface GameQueryType {
  genre : GenreType | null;
  platform : platformType | null;
  sortOrder : string ;
}

import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { GenreType } from "./components/hooks/useGenre";
import { useState } from "react";
import PlatformFilter from "./components/PlatformFilter";
import { platformType } from "./components/hooks/useGames";
import SortGames from "./components/SortGames";

const App = () => {
 const [gameQuery, setGameQuery] = useState<GameQueryType>({} as GameQueryType)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: ` "nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem paddingX={8} hideBelow={"lg"} area={"sidebar"}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
        />
      </GridItem>

      <GridItem area={"main"}>
       <HStack spaceX={1} paddingX={8}>
       <PlatformFilter
          selectedPlatform={gameQuery.platform}
          onFilterByPlatform={(platform) => setGameQuery({...gameQuery,platform})}
        />
        <SortGames selectedSortOrder={gameQuery.sortOrder} onSelectGameSort={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})} />
       </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
