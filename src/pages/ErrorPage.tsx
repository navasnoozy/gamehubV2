import NavBar from "@/components/NavBar";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box minH="100vh" display="flex" flexDirection="column" >
      <NavBar />  {/* Ensures NavBar stays at the top */}

      <VStack gap={'10'} flex={1} justify="center" align="center">
        <Heading fontSize="7xl">404</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page not found"
            : "An unexpected error occurred"}
        </Text>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
