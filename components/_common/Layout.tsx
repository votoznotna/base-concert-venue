import { Box } from "@chakra-ui/react";
import React from "react";

import { NavBar } from "../nav/Nav";
import { LoadingSpinner } from "./LoadingSpinner";
interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({ children }) => (
  <Box h="100vh" w="100vw">
    <Box zIndex={50} w="100vw">
      <NavBar />
    </Box>
    <Box w="100vw" mt={4}>
      <LoadingSpinner display={false} />
      <main>{children}</main>
    </Box>
  </Box>
);
