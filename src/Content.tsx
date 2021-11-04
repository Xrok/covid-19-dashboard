import { Box, Button, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ContentGraphic from "./content/ContentGraphic";
import ContentHeader from "./content/ContentHeader";
import ContentTable from "./content/ContentTable";
import { ComunaData } from "./types/Comuna.type";

function Content({ months, comuna }: { months: string[]; comuna: string }) {
  const [month, setMonth] = useState<string>(months[0]);
  const [comunaData, setComunaData] = useState<ComunaData>();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/data?comuna=${comuna}&month=${month}`)
      .then((response) => {
        setComunaData(response.data);
      });
    return () => {};
  }, [month, comuna]);
  return (
    <VStack w="100%">
      <ContentHeader months={months} updateMonth={setMonth}></ContentHeader>
      {comunaData ? (
        <Box>
          <ContentGraphic data={comunaData!}></ContentGraphic>
          <ContentTable data={comunaData!}></ContentTable>
        </Box>
      ) : (
        <Button isLoading variant="solid" />
      )}
    </VStack>
  );
}

export default Content;
