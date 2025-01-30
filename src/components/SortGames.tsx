import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface PropsType {
  onSelectGameSort : (sortOrder: string)=> void;
  selectedSortOrder: string;
}

const SortGames = ({selectedSortOrder ,onSelectGameSort}: PropsType) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(sortOrder => (sortOrder.value===selectedSortOrder))

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">{selectedSortOrder ? currentSortOrder?.label : "Relevance"}<BsChevronDown /></Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((sortOrder) => (
          <MenuItem key={sortOrder.value} onClick={()=>onSelectGameSort(sortOrder.value)} value={sortOrder.value}>{sortOrder.label}</MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortGames;
