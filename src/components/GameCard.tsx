// GameCard.tsx file

import { Card, HStack, Image } from "@chakra-ui/react";
import { GameType } from "./hooks/useGames";
import PlatformIconsList from "./PlatformIcons";
import MetaCriticScore from "./MetaCriticScore";
import CropImageUrl from "@/services/URLImageCrop";
import StarRating from "./StartRating";
import { Link } from "react-router-dom";

interface Props {
  game: GameType;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={'/game/'+game.slug}>
    <Card.Root
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={CropImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconsList 
            platforms={game?.parent_platforms?.map((p) => p.platform)}
          />
          <MetaCriticScore metacritic={game.metacritic} />
        </HStack>
        <Card.Title transition='all 0.6s ease-in-out' _hover={{color:'red.600'}} fontSize="3xl">{game.name}</Card.Title>
        <StarRating rating_top={game.rating_top} />
      </Card.Body>
    </Card.Root>
    </Link>
  );
};

export default GameCard;
