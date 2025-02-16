import NavBar from "@/components/NavBar";
import { Box} from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Box paddingY={4} paddingX={{ base: "20px", xl: "100px" }} spaceY={6}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
