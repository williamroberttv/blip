import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Flex h="84px" w="100%" justifyContent="center" bottom="0" position="fixed">
      <Flex w="80%" flexDir="column" justifyContent="center">
        <Divider colorScheme="#B9CBD3" />
        <Text
          align="center"
          m="16px 0 46px 0"
          color="#738192"
          fontSize="12px"
          lineHeight="22px"
        >
          ©{year}, BLiP Todos os direitos reservados | Termos de Uso
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
