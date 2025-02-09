// PlatformFilter.tsx file

interface PropsType {
    onFilterByPlatform : (platform: platformType | null) => void;
    selectedPlatformId?: number;
}

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform ,{ platformType } from "./hooks/usePlatforms";
import { useFindPlatform } from "./hooks/useFindSelected";


const PlatformFilter = ({selectedPlatformId, onFilterByPlatform}: PropsType) => {
  const { data, error } = usePlatform();
  const selectedPlatform = useFindPlatform(selectedPlatformId)

  if (error) return null;

  return (
    <MenuRoot >
      <MenuTrigger asChild>
        <Button variant="outline">
     
        {selectedPlatform ? selectedPlatform?.name : 'Platforms'}
        <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem cursor="button" onClick={()=>onFilterByPlatform(platform)} key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformFilter;
