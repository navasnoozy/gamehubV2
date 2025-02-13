import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformFilter from "@/components/PlatformFilter";
import SortGames from "@/components/SortGames";
import { Grid, GridItem, Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Grid
        padding={4}
        templateAreas={{
          base: `"main"`,
          lg: `"sidebar main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
       

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
    </>
  );
};

export default HomePage;
