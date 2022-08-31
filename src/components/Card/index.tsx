import { Box, Text, Flex } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useBots } from "../../context/bots.context";
import { ICardChildren } from "../../utils/interfaces/card.interface";
import { useNavigate } from "react-router-dom";

const Card: React.FC<ICardChildren> = ({ data, favorite }: ICardChildren) => {
  const { addToFavorities } = useBots();
  const navigate = useNavigate();

  function handleToDetails(name: string) {
    navigate(`/details/${name.toLowerCase()}`);
  }

  return (
    <Box
      w="188px"
      h="192px"
      bgColor="white"
      borderRadius="8px"
      boxShadow="0px 2px 12px 0px rgba(96, 123, 153, 0.15)"
      p="20px"
      mr="24px"
      mt="16px"
    >
      <button onClick={() => addToFavorities(data)}>
        {favorite ? (
          <AiFillStar size={22} color="gold" />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="40px"
        onClick={() => handleToDetails(data?.name)}
      >
        <Text fontSize="16px" color="#52636C">
          {data?.name}
        </Text>
        <Text fontSize="12px" fontWeight="400" color="#738192">
          {data?.type}
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
