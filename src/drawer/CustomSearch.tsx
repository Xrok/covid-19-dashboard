import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Comunas, ComunasContext } from "../context/comunas";
import { comunaSelectedUpdater, comunaUpdater } from "../utils/comunaUpdater";
import ComunaCard from "./ComunaCard";

function CustomSearch() {
  const [search, setSearch] = useState("");
  const updateSearchString = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input placeholder="Buscador" onChange={updateSearchString} />
      </InputGroup>
      <VStack>
        <ComunasContext.Consumer>
          {({ data, updateData }) => {
            return data.comunas
              .filter((comuna) => {
                return comuna.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((comuna) => {
                const updater = () => {
                  const comunasUpdated = comunaUpdater(
                    comuna,
                    data.comunas,
                    data.selectedComuna
                  );
                  updateData(comunasUpdated);
                };
                const updaterSelected = () => {
                  const comunasUpdated = comunaSelectedUpdater(
                    comuna,
                    data.comunas,
                    data.selectedComuna
                  );
                  updateData(comunasUpdated);
                };
                return (
                  <ComunaCard
                    key={comuna.name}
                    data={comuna}
                    updater={updater}
                    updaterSelected={updaterSelected}
                  ></ComunaCard>
                );
              });
          }}
        </ComunasContext.Consumer>
      </VStack>
    </Box>
  );
}

export default CustomSearch;
