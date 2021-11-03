import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CustomSearch from "./drawer/CustomSearch";
import Favorites from "./drawer/Favorites";

function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Drawer
        trapFocus={false}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        id="CustomDrawer"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Filtros</DrawerHeader>
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab key="comunas">Comunas</Tab>
                <Tab key="fav"> Favoritos</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CustomSearch />
                </TabPanel>
                <TabPanel>
                  <Favorites></Favorites>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button position="fixed" m={4} onClick={onOpen}>
        Filter
      </Button>
    </Box>
  );
}

export default CustomDrawer;
