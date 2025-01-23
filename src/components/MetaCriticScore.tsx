import { Badge } from "@chakra-ui/react";

interface PropsType {
    metacritic : number ;
}

const MetaCriticScore = ({metacritic}: PropsType)=>{
    const badgeColor = metacritic >= 75 ? 'green' : metacritic >= 50 ? 'yellow' : metacritic > 30 ? '' : 'red'; 
    return (
        <Badge colorPalette={badgeColor} paddingX={3} size='lg' fontWeight="bold">{metacritic}</Badge>
    )
};

export default MetaCriticScore;