// GenreList.tsx file
interface PropsType {
  selectedGenreId?: number;
  onSelectGenre: (genre: GenreType) => void;
}

import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import useGenre, { GenreType } from "./hooks/useGenre";
import CropImageUrl from "@/services/URLImageCrop";
import { GenreSkeleton } from "./Skeletons";

const GenreList = ({ selectedGenreId, onSelectGenre }: PropsType) => {
  const { data, isLoading, error } = useGenre();

  // if(!data) return;
  if (error) return null;

  const loadingCount = [1, 2, 3, 4, 5, 6, 7, 8];

  // if (isLoading) return <Spinner />

  return (
    <List.Root>
      <Heading marginBottom='30px' whiteSpace="nowrap" fontSize="5xl">Genres</Heading>
      {isLoading &&
        loadingCount.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      {data?.results.map((genre) => (
        <List.Item key={genre.id} as="ul">
          <HStack
            my={2}
            borderBottomWidth={selectedGenreId === genre.id ? "1px" : ""}
          >
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
              onClick={() => onSelectGenre(genre)}
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
