import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PropsType {
  heading: string;
  children: ReactNode | ReactNode[];
}

const GameMetaData = ({ heading, children }: PropsType) => {
  return (
    <>
      <Heading textStyle='2xl' color='gray.500'>{heading}</Heading>
      {children}
    </>
  );
};

export default GameMetaData;
