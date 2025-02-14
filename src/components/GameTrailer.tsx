import useGameTrailer from "./hooks/useGameTrailer";
import { Skeleton } from "@chakra-ui/react";

interface PropsType {
  gameId: number;
}

const GameTrailer = ({ gameId }: PropsType) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Skeleton height="100em" width="200px" />;

  if (error) throw error;

  const videoLink = data?.results[0];

  return videoLink ? (
    <video src={videoLink.data[480]} poster={videoLink.preview} controls />
  ) : null;
};

export default GameTrailer;
