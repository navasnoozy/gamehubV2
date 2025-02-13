import { GridItem, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Theme from "./theme";
import SearchInput from "./SearchGames";

const NavBar = () => {
  return (
    <GridItem
      paddingX={4}
      paddingY={4}
      marginY={3}
      marginX={2}
      border="solid"
      borderWidth="1px"
      borderRadius="md"
      borderColor={{ base: "gray.200", _dark: "gray.600" }}
      area={"nav"}
    >
      <HStack justifyContent={"space-between"}>
        <Image boxShadow="md" src={logo} boxSize={"60px"}></Image>
        <SearchInput />
        <Theme />
      </HStack>
    </GridItem>
  );
};

export default NavBar;
