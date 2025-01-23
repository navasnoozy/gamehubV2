// GameCard.tsx file

import { Card, Image } from "@chakra-ui/react";
import { GameType } from "./hooks/useGames";
import PlatformIconsList from "./PlatformIcons";
// import PlatformIconsList from "./PlatformIcons";

interface Props {
    game : GameType
}

const GameCard = ({game}:Props)=>{
    return (
       <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <Card.Body>
            <Card.Title >
                {game.name}
            </Card.Title>
            <Card.Description>
              <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)} />
            </Card.Description>
        </Card.Body>
       </Card.Root>
    )
};

export default GameCard;