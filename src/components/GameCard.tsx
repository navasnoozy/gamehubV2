// GameCard.tsx file

import { Card, HStack, Image } from "@chakra-ui/react";
import { GameType } from "./hooks/useGames";
import PlatformIconsList from "./PlatformIcons";
import MetaCriticScore from "./MetaCriticScore";
import CropImageUrl from "@/services/URLImageCrop";

interface Props {
  game: GameType;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"} >
      <Image  src={CropImageUrl(game.background_image)} />
      <Card.Body>
        <Card.Title >{game.name}</Card.Title>

          <HStack justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetaCriticScore metacritic={game.metacritic} />
          </HStack>

      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
