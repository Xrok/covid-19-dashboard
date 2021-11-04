import { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./Header";
import Content from "./Content";
import CustomDrawer from "./CustomDrawer";
import { Comunas, ComunasContext } from "./context/comunas";
import { ComunaType } from "./types/Comuna.type";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    comunas: Comunas,
    selectedComuna: Comunas[0],
  });

  const [months, setMoths] = useState<string[]>();

  const updateData = ({
    comunas,
    selectedComuna,
  }: {
    comunas: ComunaType[];
    selectedComuna: ComunaType;
  }) => {
    setData({
      comunas: [...comunas],
      selectedComuna: { ...selectedComuna },
    });
    setData({ comunas: [...comunas], selectedComuna: { ...selectedComuna } });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/metadata").then((response) => {
      const _comunas = response.data.comunas.map((comuna: any) => {
        return { name: comuna, favorite: false };
      });
      setData({ comunas: _comunas, selectedComuna: _comunas[0] });
      setMoths(response.data.months);
    });
    return () => {};
  }, []);

  return (
    <ChakraProvider>
      <ComunasContext.Provider value={{ data, updateData }}>
        <Box w="100%">
          <CustomDrawer></CustomDrawer>
          <VStack>
            <Header />
            {months ? (
              <Content months={months} comuna={data.selectedComuna.name} />
            ) : (
              <Button isLoading variant="solid" />
            )}
          </VStack>
        </Box>
      </ComunasContext.Provider>
    </ChakraProvider>
  );
}
export default App;
