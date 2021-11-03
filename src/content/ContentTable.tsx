import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { dataEneroMock } from "../utils/dataMock";

function ContentTable() {
  return (
    <Table variant="simple">
      <TableCaption>Contagiados de Covid-19 por Comuna en el mes </TableCaption>
      <Thead>
        <Tr>
          <Th>Dia</Th>
          <Th isNumeric># Contagios</Th>
          <Th> Porcentaje</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(dataEneroMock).map((entry) => {
          return (
            <Tr key={entry[0]}>
              <Td>{entry[0]}</Td>
              <Td isNumeric>{entry[1]}</Td>
              <Td> {((entry[1] / 247552) * 100).toFixed(2)}</Td>
            </Tr>
          );
        })}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Dia</Th>
          <Th isNumeric># Contagios</Th>
          <Th> Porcentaje</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default ContentTable;
