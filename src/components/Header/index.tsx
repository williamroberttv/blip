import { Flex, Img } from "@chakra-ui/react";
import logo from "../../assets/images/blip-logo.svg";
const Header: React.FC = () => {
  return (
    <Flex
      h="44px"
      w="100%"
      backgroundColor="#1A2437"
      alignItems="center"
      justifyContent="center"
    >
      <Img src={logo} alt="Blip Logo" w="48px" />
    </Flex>
  );
};

export default Header;
