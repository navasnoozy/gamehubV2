interface PropsType {
    rating_top : number;
};

import { FaStar } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";

const StarRating = ({rating_top}:PropsType)=>{

    const totalStar = [1,2,3,4,5]


    return (
        <HStack marginTop={4}>
           {totalStar.map((item)=> <Icon key={item} as={FaStar} color={item<rating_top?'yellow.500':''}></Icon>)}
        </HStack>

    )
};

export default StarRating;