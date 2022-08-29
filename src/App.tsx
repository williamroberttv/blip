import { ChakraProvider, theme } from "@chakra-ui/react";
import AppRoutes from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRoutes />
  </ChakraProvider>
);
