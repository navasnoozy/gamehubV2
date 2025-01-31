interface PropsType {
  onSearch: (searchInput: string) => void;
}

import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }: PropsType) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) onSearch(ref.current.value);
      }}
    >
      <InputGroup
        paddingX={12}
        width="100%"
        flex="1"
        startElement={<BsSearch />}
      >
        <Input
        
          _hover={{ bg: "white", color:'black' }}
          transition="background 0.5s ease-in-out"
          ref={ref}
          variant="subtle"
          borderRadius={20}
          placeholder="Search games"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
