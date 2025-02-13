
import { Button } from "./ui/button";
import { useState } from "react";

interface PropsType {
  children: string;
}

const ExpandableText = ({ children }: PropsType) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= 300) return children;
  const limit = 300;

  const trimmedText = expanded ? children : children.substring(0, limit);

  return (
    <>
      {trimmedText}
      <Button  marginX={1} size='xs' onClick={() => setExpanded(!expanded)}>
        {expanded ? "Collapse" : "Read more"}
      </Button>
    </>
  );
};

export default ExpandableText;
