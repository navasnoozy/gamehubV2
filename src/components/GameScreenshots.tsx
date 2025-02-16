interface PropsType {
  gameId: number;
}

import {  Spinner, Image, Flex } from "@chakra-ui/react";
import useScreenshots from "./hooks/useScreenshots";

const GameScreenshots = ({ gameId }: PropsType) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <Flex
    wrap="wrap" justify="center" justifyContent='space-between' gap={4}
  >
     {data?.results.map((file) => (
       <Image key={file.id} rounded="md"    w={["100%", "48%",]} src={file.image} />
     ))}
  </Flex>
  
  );
};

export default GameScreenshots;
