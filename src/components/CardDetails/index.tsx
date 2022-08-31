import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { ICardDetailsChildren } from "../../utils/interfaces/card-details.interface";

const CardDetails: React.FC<ICardDetailsChildren> = ({
  description,
  value,
  icon,
  width,
  margin,
}: ICardDetailsChildren) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      p="0 32px"
      h="212px"
      w={width}
      bgColor="white"
      borderRadius="8px"
      boxShadow="0px 2px 12px 0px rgba(96, 123, 153, 0.15)"
      mr={margin ? "24px" : undefined}
      mt="24px"
    >
      <Flex>
        <Image src={icon} mr="16px" />
        <Box>
          <Text fontSize="24px" color="#52636C" fontWeight="bold">
            {value}
          </Text>
          <Text fontSize="14px" color="#52636C">
            {description}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardDetails;
