import { VStack } from "@chakra-ui/react";
import ContentGraphic from "./content/ContentGraphic";
import ContentHeader from "./content/ContentHeader";
import ContentTable from "./content/ContentTable";

function Content() {
  return (
    <VStack w="100%">
      <ContentHeader></ContentHeader>
      <ContentGraphic></ContentGraphic>
      <ContentTable></ContentTable>
    </VStack>
  );
}

export default Content;
