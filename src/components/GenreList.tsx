// GenreList.tsx file

import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import CropImageUrl from "@/services/URLImageCrop";
import { GenreSkeleton } from "./Skeletons";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (error) return;

  const loadingCount = [1, 2, 3, 4,5,6,7,8];

  // if (isLoading) return <Spinner />

  return (
    <List.Root>
      {isLoading && loadingCount.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <List.Item key={genre.id} as="ul">
          <HStack my={2}>
            <Image
              boxSize="42px"
              borderRadius="22px"
              src={CropImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg" mx={1}>
              {genre.name}
            </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
