import { HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ComunaType } from "../types/Comuna.type";

function ComunaCard({
  data,
  updater,
}: {
  data: ComunaType;
  updater: () => void;
}) {
  return (
    <HStack w="100%">
      <Text>{data.name}</Text>
      <Icon
        as={data.favorite ? AiFillStar : AiOutlineStar}
        onClick={updater}
      ></Icon>
    </HStack>
  );
}

export default ComunaCard;
