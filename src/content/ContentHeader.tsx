import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { Heading, HStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { MenuItemOption, MenuOptionGroup, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

function ContentHeader() {
  return (
    <HStack w="auto" spacing="25px">
      <HStack>
        <Heading>Comuna</Heading>
        <Icon as={AiOutlineStar} w={30} h={30}></Icon>
        <Text>Enero</Text>
      </HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Mes
        </MenuButton>
        <MenuList>
          <MenuOptionGroup defaultValue="2" type="radio">
            <MenuItemOption value="0">Enero</MenuItemOption>
            <MenuItemOption value="1">Febrero</MenuItemOption>
            <MenuItemOption value="2">Marzo</MenuItemOption>
            <MenuItemOption value="3">Abril</MenuItemOption>
            <MenuItemOption value="4">Mayo</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default ContentHeader;
