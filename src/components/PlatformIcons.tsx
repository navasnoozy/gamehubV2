// PlatformIconsList.tsx file

interface propsType {
  platforms: platformType[];
}

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone,MdDownloading } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { platformType } from "./hooks/usePlatforms";
import { IconType } from "react-icons";
import {  HStack, Icon } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const PlatformIconsList = ({ platforms }: propsType) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    sega: SiSega,
  };

  const haverColor = useColorModeValue('black', 'white')

  return (
    <HStack my="4">
      {platforms?.map((platform) => (
        <Icon transition='all 0.05s ease-in-out' _hover={{color:haverColor}}
          key={platform.id}
          mx="1px"
          color="gray.500"
          as={iconMap[platform.slug] || MdDownloading }
          fontSize="2xl"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
