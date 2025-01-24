import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "@/components/ui/skeleton";

const GameCardSkeletons = () => {
  return (
    <Card.Root justifyContent="center" overflow="hidden">
      <Skeleton width="650px" height="300px"></Skeleton>
      <Card.Description padding={2}>
        <SkeletonText />
      </Card.Description>
    </Card.Root>
  );
};

export default GameCardSkeletons;
