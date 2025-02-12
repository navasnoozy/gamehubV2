
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Theme from "./theme";
import SearchInput from "./SearchGames";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image boxShadow="md" src={logo} boxSize={"60px"}></Image>
     <SearchInput />
      <Theme />
    </HStack>
  );
};

export default NavBar;
