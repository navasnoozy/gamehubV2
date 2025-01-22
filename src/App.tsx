import { Grid, GridItem, Text } from "@chakra-ui/react";
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

      <GridItem hideBelow={"lg"} area={"sidebar"} bg={"blue.200"}>
        sidebar
      </GridItem>

      <GridItem area={"main"} bg={"red"}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
