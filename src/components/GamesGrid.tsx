import apiClient from "@/services/api-Client";
import { Text, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Games {
    id: number;
    name : string;
}

interface GamesListType {
    count : number;
    results : Games []
}

const GamesGrid = ()=>{
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState ('');

useEffect (()=>{
    apiClient.get <GamesListType> ('/games')
    .then(res=>setGames(res.data.results))
    .catch (error=> setError (error.message))
});


    return (
        <>
        {error && <Heading as={'h1'}>{error}</Heading>}
        <ul>
            {games.map(game=> <li>{game.id} {game.name}</li>)}
        </ul>
        </>
    )
}  ;

export default GamesGrid;