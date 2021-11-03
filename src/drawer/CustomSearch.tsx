import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Comunas, ComunasContext } from "../data/comunas";
import { comunaUpdater } from "../utils/comunaUpdater";
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
          {({ comunas, updateComunas }) => {
            return comunas
              .filter((comuna) => {
                return comuna.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((comuna) => {
                const updater = () => {
                  const comunasUpdated = comunaUpdater(comuna, comunas);
                  updateComunas(comunasUpdated);
                };
                return (
                  <ComunaCard
                    key={comuna.name}
                    data={comuna}
                    updater={updater}
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
