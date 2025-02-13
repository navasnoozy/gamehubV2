import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PropsType {
  heading: string;
  children: ReactNode | ReactNode[];
}

const GameMetaData = ({ heading, children }: PropsType) => {
  return (
    <>
      <Heading color='gray.500'>{heading}</Heading>
      <dd>{children} </dd>
    </>
  );
};

export default GameMetaData;
