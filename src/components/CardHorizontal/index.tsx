import { Text, Flex } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useBots } from "../../context/bots.context";
import { ICardChildren } from "../../utils/interfaces/card.interface";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/format-date";

const Card: React.FC<ICardChildren> = ({ data, favorite }: ICardChildren) => {
  const { addToFavorities } = useBots();
  const navigate = useNavigate();

  function handleToDetails(name: string) {
    navigate(`/details/${name.toLowerCase()}`);
  }

  return (
    <Flex w="100%" mt="16px">
      <button onClick={() => addToFavorities(data)}>
        {favorite ? (
          <AiFillStar size={22} color="gold" />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>
      <Flex
        justifyContent="space-between"
        w="100%"
        h="60px"
        p="20px"
        ml="8px"
        alignItems="center"
        onClick={() => handleToDetails(data?.name)}
        borderRadius="8px"
        boxShadow="0px 2px 12px 0px rgba(96, 123, 153, 0.15)"
        bgColor="white"
      >
        <Text fontSize="16px" color="#52636C">
          {data?.name}
        </Text>
        <Text fontSize="14px" fontWeight="400" color="#738192">
          {formatDate(data?.created)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
