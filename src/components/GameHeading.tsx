interface PropsType {
    gameQuery: GameQueryType;
}

import { GameQueryType } from "@/App";
import { Heading } from "@chakra-ui/react";




const GameHeading = ({gameQuery}:PropsType) =>{

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading marginY={8} fontSize="5xl">{heading}</Heading>
    )
};

export default GameHeading;