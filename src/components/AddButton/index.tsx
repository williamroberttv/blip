import { Flex, Text } from "@chakra-ui/react";

const AddButton: React.FC = () => {
  return (
    <Flex
      width="60px"
      height="60px"
      bottom="40px"
      right="40px"
      bgColor="#2CC3D5"
      color="#FFF"
      borderRadius="50px"
      textAlign="center"
      boxShadow="2px 2px 3px #999"
      zIndex={999}
      alignItems="center"
      justifyContent="center"
      position="fixed"
    >
      <Text fontSize="34px">+</Text>
    </Flex>
  );
};

export default AddButton;
