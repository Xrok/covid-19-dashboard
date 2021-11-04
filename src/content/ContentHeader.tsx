import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { Heading, HStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { MenuItemOption, MenuOptionGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ComunasContext } from "../context/comunas";
import { comunaUpdater } from "../utils/comunaUpdater";

function ContentHeader({
  months,
  updateMonth,
}: {
  months: string[];
  updateMonth: (month: string) => void;
}) {
  const [month, setMonth] = useState(months[0]);
  const handleMonthChange = (value: any) => {
    setMonth(value);
    updateMonth(value);
  };
  return (
    <ComunasContext.Consumer>
      {({ data, updateData }) => {
        const updater = () => {
          const comunasUpdated = comunaUpdater(
            data.selectedComuna,
            data.comunas,
            data.selectedComuna
          );
          updateData(comunasUpdated);
        };
        return (
          <HStack w="auto" spacing="25px">
            <HStack>
              <Heading>{data.selectedComuna.name}</Heading>
              <Icon
                as={data.selectedComuna.favorite ? AiFillStar : AiOutlineStar}
                w={30}
                h={30}
                onClick={updater}
              ></Icon>
              <Text>{month}</Text>
            </HStack>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Mes
              </MenuButton>
              <MenuList>
                <MenuOptionGroup
                  defaultValue={month}
                  type="radio"
                  onChange={handleMonthChange}
                >
                  {months.map((m) => {
                    return (
                      <MenuItemOption value={m} key={m}>
                        {m}
                      </MenuItemOption>
                    );
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </HStack>
        );
      }}
    </ComunasContext.Consumer>
  );
}

export default ContentHeader;
