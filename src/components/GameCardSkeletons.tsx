import { Card, Skeleton, Box } from "@chakra-ui/react";
import { SkeletonText } from "@/components/ui/skeleton";

const GameCardSkeletons = () => {
  return (
    <Card.Root justifyContent="center" overflow="hidden">
      <Skeleton width="650px" height="300px"></Skeleton>
      <Box padding={2}>
        <SkeletonText />
      </Box>
    </Card.Root>
  );
};

export default GameCardSkeletons;
