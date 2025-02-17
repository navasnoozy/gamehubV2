import useGameDetails from "@/components/hooks/useGameDetails";
import { SkeletonText } from "@/components/ui/skeleton";
import {
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Stack
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import GameScreenshots from "@/components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading)
    return (
      <Stack gap="6" width='100%' >
        <Skeleton height="30vh"  />
        <HStack maxWidth='40%'>
          <SkeletonText noOfLines={3} />
        </HStack>
      </Stack>
    );

  if (error || !game) throw error;

  return (
    <>
    <SimpleGrid
      padding="5"
      columns={{ base: 1, lg: 2 }}
      border="solid"
      borderColor={{ base: "gray.200", _dark: "gray.600" }}
      borderWidth="1px"
      borderRadius="md"
     
   
    >
      <GridItem paddingY={6} spaceY={4}  >
        <Heading paddingBottom='30px' lineClamp="2" whiteSpace='normal' textStyle="4xl">{game.name}</Heading>
        <ExpandableText >{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem display='flex' paddingX='3'  flexDirection='column'  gap='2'   >
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
