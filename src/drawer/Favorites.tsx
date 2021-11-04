import { VStack } from "@chakra-ui/layout";
import { ComunasContext } from "../context/comunas";
import { comunaSelectedUpdater, comunaUpdater } from "../utils/comunaUpdater";
import ComunaCard from "./ComunaCard";

function Favorites() {
  return (
    <VStack>
      <ComunasContext.Consumer>
        {({ data, updateData }) => {
          return data.comunas
            .filter((comuna) => comuna.favorite)
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
                  data={comuna}
                  key={comuna.name}
                  updater={updater}
                  updaterSelected={updaterSelected}
                ></ComunaCard>
              );
            });
        }}
      </ComunasContext.Consumer>
    </VStack>
  );
}

export default Favorites;
