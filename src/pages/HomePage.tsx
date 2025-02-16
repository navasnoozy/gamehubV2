import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformFilter from "@/components/PlatformFilter";
import SortGames from "@/components/SortGames";
import { Grid, GridItem, Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
    {/* A Grid with two item - GenreList and GameList */}
      <Grid
      paddingY='10'
        border="solid"
        borderWidth="1px"
        borderRadius="md"
        borderColor={{ base: "gray.200", _dark: "gray.600" }}
        templateAreas={{
          base: `"main"`,
          lg: `"sidebar main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >

        {/* 1-Genrelist */}
        <GridItem
        paddingX='4'
          borderLeft="solid"
          borderLeftWidth="1px"
          borderColor={{ base: "gray.200", _dark: "gray.600" }}
          hideBelow={"lg"}
          area={"sidebar"}
        >
          <GenreList />
        </GridItem>



        {/* 2: GameList container */}
        <GridItem area={"main"}>
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
