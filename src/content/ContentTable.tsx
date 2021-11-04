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
import { ComunaData } from "../types/Comuna.type";
import { dataEneroMock } from "../utils/dataMock";

function ContentTable({ data }: { data: ComunaData }) {
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
        {data.values.map((entry) => {
          return (
            <Tr key={entry.date}>
              <Td>{entry.date}</Td>
              <Td isNumeric>{entry.quantity}</Td>
              <Td> {((entry.quantity / data.poblacion) * 100).toFixed(2)}</Td>
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
