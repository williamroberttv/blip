import { ChakraProvider, theme } from "@chakra-ui/react";
import { BotsProvider } from "./context/bots.context";
import AppRoutes from "./routes";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS>
    <BotsProvider>
      <AppRoutes />
    </BotsProvider>
  </ChakraProvider>
);
