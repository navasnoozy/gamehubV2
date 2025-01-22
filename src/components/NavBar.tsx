// NavBar.tsx File

import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import Theme from "./theme";

const NavBar = ()=>{
    return (
        <HStack justifyContent={"space-between"} >
            <Image src={logo} boxSize={"60px"} ></Image>
              <Text>search bar</Text>
              <Theme />
        </HStack>
    )
};

export default NavBar;