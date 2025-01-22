// App.tsx file

import { Grid, GridItem, Separator, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: ` "nav nav" "sidebar main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem hideBelow={"lg"} area={"sidebar"} bg={"black"}>
        sidebar
      </GridItem>

      <GridItem area={"main"} bg={"black"} color={"white"}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
