// App.tsx file

import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformFilter from "./components/PlatformFilter";
import SortGames from "./components/SortGames";
import GameHeading from "./components/GameHeading";

const App = () => {
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
        borderColor={{ base: "gray.200", _dark: "gray.600" }}
        area={"nav"}
      >
        <NavBar />
      </GridItem>

      <GridItem
        borderLeft="solid"
        borderLeftWidth="1px"
        borderColor={{ base: "gray.200", _dark: "gray.600" }}
        paddingTop={8}
        paddingLeft={4}
        paddingRight={15}
        margin={2}
        hideBelow={"lg"}
        area={"sidebar"}
      >
        <GenreList />
      </GridItem>

      <GridItem
        border="solid"
        borderWidth="1px"
        borderRadius="md"
        borderColor={{ base: "gray.200", _dark: "gray.600" }}
        marginX={2}
        paddingY={2}
        area={"main"}
      >
        <Box spaceX={1} paddingX={8}>
          <GameHeading />
          <PlatformFilter />
          <SortGames />
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
