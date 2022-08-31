import { Flex } from "@chakra-ui/react";
import { useBots } from "../../context/bots.context";
import Card from "../Card";
interface IGridSectionChildren {
  section: string;
}

const GridSection: React.FC<IGridSectionChildren> = ({
  section,
}: IGridSectionChildren) => {
  const { botsList, favorities } = useBots();
  const cardsData = section === "favorities" ? favorities : botsList;
  return (
    <Flex w="100%" m="0 auto" flexWrap="wrap">
      {cardsData.map((bot) => (
        <Card
          data={bot}
          key={bot.name}
          favorite={section === "favorities" ? true : false}
        />
      ))}
    </Flex>
  );
};

export default GridSection;
