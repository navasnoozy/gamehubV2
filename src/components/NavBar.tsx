import { HStack, Image, Text, Stack, StackSeparator } from "@chakra-ui/react"
import logo from '../assets/logo.webp'

const NavBar = ()=>{
    return (
        <HStack  >
            <Image src={logo} boxSize={"60px"} ></Image>
              <Text>search bar</Text>
        </HStack>
    )
};

export default NavBar;