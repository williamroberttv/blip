import { Box, Button, Divider, Flex, Img, Input, Text } from "@chakra-ui/react";
import blockOrganizer from "../../assets/images/organize-blocks.png";
import listOrganizer from "../../assets/images/organize-list.png";
import GridSection from "../../components/GridSection";
import { useEffect } from "react";
import { api } from "../../api/api";
import { useBots } from "../../context/bots.context";

const Home: React.FC = () => {
  const { addBots, filterBots } = useBots();

  const getBots = async () => {
    const { data } = await api.get("/bots");
    addBots(data);
  };

  const handleOrderByName = async (order: string) => {
    const { data } = await api.get(`/bots?Filters[orderBy]=${order}`);
    addBots(data);
  };

  useEffect(() => {
    getBots();
  }, []);

  return (
    <Box mb="50px" h="100vh">
      <Flex
        w="90%"
        justifyContent="space-between"
        m="40px auto"
        alignItems="center"
      >
        <Text fontSize={32} fontWeight="bold" color="#56616E">
          My chatbots
        </Text>
        <Flex alignItems="center">
          <Input
            w="312px"
            placeholder="Search"
            mr="10px"
            onChange={(e) => filterBots(e.target.value)}
          />
          <Button
            w="129px"
            h="40px"
            mr="10px"
            bg="#2CC3D5"
            color="#ffffff"
            fontSize="12px"
            onClick={() => handleOrderByName("name")}
          >
            Order by name
          </Button>
          <Button
            w="129px"
            h="40px"
            mr="10px"
            bg="#2CC3D5"
            color="#ffffff"
            fontSize="12px"
            onClick={() => handleOrderByName("date")}
          >
            Order by creation
          </Button>

          <Img
            src={blockOrganizer}
            w="32px"
            h="32px"
            cursor="pointer"
            mr="10px"
            _hover={{ opacity: 0.7 }}
          />

          <Img
            src={listOrganizer}
            w="32px"
            h="32px"
            cursor="pointer"
            _hover={{ opacity: 0.7 }}
          />
        </Flex>
      </Flex>
      <Flex flexDir="column" w="90%" m="32px auto 0 auto">
        <Text fontSize={32} fontWeight="bold" color="#56616E" mb="16px">
          Favorities
        </Text>
        <GridSection section="favorities" />
        <Divider m="40px auto" />
        <GridSection section="allBots" />
      </Flex>
    </Box>
  );
};

export default Home;
