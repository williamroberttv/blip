import { Box, Flex, Text, Image, Button, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import baloon from "../../assets/images/baloons.svg";
import messageIcon from "../../assets/images/message-icon.png";
import messageRecievedIcon from "../../assets/images/message-recieved.png";
import userIcon from "../../assets/images/user.png";
import CardDetails from "../../components/CardDetails";
import { IBotDetails } from "../../utils/interfaces/bot-details.interface";
import { formatDate } from "../../utils/format-date";
import { toast } from "react-toastify";

const Details: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [botDetails, setBotDetails] = useState<IBotDetails>();

  const getBotDetails = async () => {
    const { data } = await api.get<Promise<IBotDetails>>(
      `/${name?.replace(/\s/g, "_")}/details`
    );
    if (!data) {
      toast.error("Not Found!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
      return;
    }
    setBotDetails(await data);
    return;
  };

  useEffect(() => {
    getBotDetails();
  }, []);

  return (
    <Flex flexDir="column" w="90%" m="0 auto">
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        h="120px"
      >
        <Flex>
          <Image
            src={botDetails ? botDetails?.image : messageIcon}
            w="56px"
            h="56px"
            mr="12px"
            borderRadius="50%"
          />
          <Box w="100%">
            <Text fontSize="24px" fontWeight="bold" color="#52636C">
              {botDetails?.name}
            </Text>
            <Text fontSize="14px" color="#8CA0B3">
              id: {botDetails?.shortName}
            </Text>
          </Box>
        </Flex>
        <Text fontSize="14px" color="#8CA0B3">
          created at {formatDate(botDetails?.created!)}
        </Text>
      </Flex>

      <Divider mb="24px" />

      <Flex>
        <Flex w="70%" flexDir="column">
          <Flex>
            <Flex
              width="30%"
              padding="20px"
              flexDir="column"
              justifyContent="center"
              bgColor="white"
              borderRadius="8px"
              h="212px"
              boxShadow="0px 2px 12px 0px rgba(96, 123, 153, 0.15)"
              mr="24px"
              mt="24px"
            >
              <Text>{botDetails?.description}</Text>
            </Flex>
            <CardDetails
              width="70%"
              value={botDetails?.analytics?.user?.total!}
              description="Usuários ativos"
              icon={userIcon}
            />
          </Flex>
          <Flex>
            <CardDetails
              width="60%"
              value={botDetails?.analytics?.message?.received!}
              description="Mensagens recebidas"
              icon={messageRecievedIcon}
              margin={true}
            />
            <CardDetails
              width="40%"
              value={botDetails?.analytics?.message?.sent!}
              description="Mensagens enviadas"
              icon={messageRecievedIcon}
            />
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          w="30%"
          alignItems="center"
          justifyItems="center"
        >
          <Image src={baloon} />
          <Text mt="60px" fontSize="16px" color="#8CA0B3">
            Status account
          </Text>
          <Text fontSize="24px" fontWeight="bold" color="#56616E">
            Free
          </Text>
          <Button
            mt="24px"
            bgColor="#2CC3D5"
            w="134px"
            h="40px"
            color="#ffffff"
            fontSize="14px"
          >
            Update account
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Details;
