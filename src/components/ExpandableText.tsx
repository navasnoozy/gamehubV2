
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { useState } from "react";

interface PropsType {
  children: string;
}

const ExpandableText = ({ children }: PropsType) => {
  const [expanded, setExpanded] = useState(false);
  const isLargScreen = useBreakpointValue({base:false,xl:true});

  if (children.length <= 300) return children;
  const limit = 300;

  const displayText = expanded || isLargScreen ? children : children.substring(0, limit);

  return (
    <Box paddingBottom={4}>
      {displayText}
      {!isLargScreen && (<Button  marginX={1} size='xs' onClick={() => setExpanded(!expanded)}>
        {expanded ? "Collapse" : "Read more"}
      </Button>)}
    </Box>
  );
};

export default ExpandableText;
