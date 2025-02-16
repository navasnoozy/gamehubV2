import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import CropImageUrl from "@/services/URLImageCrop";
import { GenreSkeleton } from "./Skeletons";
import useGameQueryStore from "@/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenre);

  // if(!data) return;
  if (error) return null;

  const loadingCount = [1, 2, 3, 4, 5, 6, 7, 8];

  // if (isLoading) return <Spinner />

  return (
    <List.Root>
      <Heading marginBottom="30px" whiteSpace="nowrap" fontSize="5xl">
        Genres
      </Heading>
      {isLoading &&
        loadingCount.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      {data?.results.map((genre) => (
        <List.Item
          key={genre.id}
          as="ul"
          transition='all .3s ease-in' 
          my={selectedGenreId === genre.id ? "15px" : "10px"}
          scale={selectedGenreId === genre.id ? '1.2': ''}
          padding={selectedGenreId === genre.id ? '4': ''}
        >
          <HStack>
            <Image
              boxSize="42px"
              borderRadius="22px"
              objectFit="cover"
              src={CropImageUrl(genre.image_background)}
            ></Image>
            <Button
              display="block"
              textAlign="left"
              whiteSpace="normal"
              padding="2"
              width="full"
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              onClick={() => setGenreId(genre.id)}
              variant="plain"
              fontSize="lg"
              mx={1}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
