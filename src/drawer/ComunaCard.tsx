import { HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ComunaType } from "../types/Comuna.type";

function ComunaCard({
  data,
  updater,
  updaterSelected,
}: {
  data: ComunaType;
  updater: () => void;
  updaterSelected: () => void;
}) {
  return (
    <HStack w="100%">
      <Text onClick={updaterSelected}>{data.name}</Text>
      <Spacer />
      <Icon
        as={data.favorite ? AiFillStar : AiOutlineStar}
        onClick={updater}
      ></Icon>
    </HStack>
  );
}

export default ComunaCard;
