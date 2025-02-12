import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";



const SortGames = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s=>s.setSortOrder)
  const currentSortOrder = sortOrders.find(sortOrder => (sortOrder.value===selectedSortOrder))

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">{selectedSortOrder ? currentSortOrder?.label : "Relevance"}<BsChevronDown /></Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((sortOrder) => (
          <MenuItem key={sortOrder.value} onClick={()=>setSortOrder(sortOrder.value)} value={sortOrder.value}>{sortOrder.label}</MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortGames;
