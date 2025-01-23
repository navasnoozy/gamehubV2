import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { platformType } from "./hooks/useGames";
import { IconType } from "react-icons";
import { HStack, Icon} from "@chakra-ui/react";

interface propsType {
  platforms: platformType[];
}

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
  };

  return (
    <HStack my="4">
      {platforms.map((platform) => (
        <>
          <Icon  mx="1px" color='gray.500' as={iconMap[platform.slug]} fontSize='2xl' />
        </>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
