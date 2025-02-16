import { GridItem, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Theme from "./theme";
import SearchInput from "./SearchGames";
import { Link } from "react-router-dom";
import useGameQueryStore from "@/store";

const NavBar = () => {
  const resetFilters =  useGameQueryStore(s=>s.resetFilters);
  return (
    <GridItem 
      padding='4'
      border="solid"
      borderWidth="1px"
      borderRadius="md"
      borderColor={{ base: "gray.200", _dark: "gray.600" }}
      area={"nav"}
    >
      <HStack justifyContent={"space-between"}>
        <Link to='/' onClick={()=>resetFilters()}>
        <Image boxShadow="md" src={logo} boxSize={"60px"}></Image></Link>
       
        <SearchInput />
        <Theme />
      </HStack>
    </GridItem>
  );
};

export default NavBar;
