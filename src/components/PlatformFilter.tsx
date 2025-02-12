
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform  from "./hooks/usePlatforms";
import { useFindPlatform } from "./hooks/useFindSelected";
import useGameQueryStore from "@/store";


const PlatformFilter = () => {
  const { data, error } = usePlatform();
  const setPlatformId = useGameQueryStore(s=>s.setPlatform)
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId);
  
  //finding selected platform with id
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
          <MenuItem cursor="button" onClick={()=>setPlatformId(platform.id)} key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformFilter;
