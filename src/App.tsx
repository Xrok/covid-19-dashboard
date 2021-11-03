import { useState } from "react";
import "./App.css";
import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./Header";
import Content from "./Content";
import CustomDrawer from "./CustomDrawer";
import { Comunas, ComunasContext } from "./data/comunas";
import { ComunaType } from "./types/Comuna.type";

function App() {
  const [comunas, setComunas] = useState(Comunas);

  const updateComunas = (comunas: ComunaType[]) => {
    setComunas([...comunas]);
  };

  return (
    <ChakraProvider>
      <ComunasContext.Provider value={{ comunas, updateComunas }}>
        <Box w="100%">
          <CustomDrawer></CustomDrawer>
          <VStack>
            <Header />
            <Content></Content>
          </VStack>
        </Box>
      </ComunasContext.Provider>
    </ChakraProvider>
  );
}
export default App;
