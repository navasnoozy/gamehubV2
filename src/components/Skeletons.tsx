import { Card, Skeleton, Box, List, HStack } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "@/components/ui/skeleton";

 export const GameCardSkeletons = () => {
  return (
    <Card.Root justifyContent="center" overflow="hidden">
      <Skeleton width="650px" height="300px"></Skeleton>
      <Box padding={2}>
        <SkeletonText />
      </Box>
    </Card.Root>
  );
};

export const GenreSkeleton = () => {
  return (
    <List.Item  as='ul'>
      <HStack my={2} gap="5">
        <SkeletonCircle size="12" />
       <SkeletonText noOfLines={1} /> 
      </HStack>
    </List.Item>
  );
};


