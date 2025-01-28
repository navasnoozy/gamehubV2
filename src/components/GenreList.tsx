// GenreList.tsx file

import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import CropImageUrl from "@/services/URLImageCrop";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <List.Root>
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
