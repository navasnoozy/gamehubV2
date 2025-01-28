// GenreList.tsx file

import { Button, HStack, Image, List } from "@chakra-ui/react";
import useGenre, { GenreType } from "./hooks/useGenre";
import CropImageUrl from "@/services/URLImageCrop";
import { GenreSkeleton } from "./Skeletons";

interface PropsType {
  onSelectGenre : (genre: GenreType)=>void;
}


const GenreList = ({onSelectGenre}:PropsType) => {
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
            <Button onClick={()=>onSelectGenre(genre)} variant="ghost" fontSize="lg" mx={1}>
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
