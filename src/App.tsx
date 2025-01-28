// App.tsx file

import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: ` "nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base : '1fr',
        lg : "200px 1fr"
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem paddingX={8} hideBelow={"lg"} area={"sidebar"} >
    <GenreList />
      </GridItem>

      <GridItem area={"main"}  >
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
