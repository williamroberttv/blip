import { Flex } from "@chakra-ui/react";
import { useBots } from "../../context/bots.context";
import CardHorizontal from "../CardHorizontal";
interface IFlexSectionChildren {
  section: string;
}

const FlexSection: React.FC<IFlexSectionChildren> = ({
  section,
}: IFlexSectionChildren) => {
  const { botsList, favorities } = useBots();
  const cardsData = section === "favorities" ? favorities : botsList;
  return (
    <Flex w="100%" m="0 auto" flexDir="column" mb="20px">
      {cardsData.map((bot) => (
        <CardHorizontal
          data={bot}
          key={bot.name}
          favorite={section === "favorities" ? true : false}
        />
      ))}
    </Flex>
  );
};

export default FlexSection;
