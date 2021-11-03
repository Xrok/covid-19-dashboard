import { VStack } from "@chakra-ui/layout";
import { ComunasContext } from "../data/comunas";
import { comunaUpdater } from "../utils/comunaUpdater";
import ComunaCard from "./ComunaCard";

function Favorites() {
  return (
    <VStack>
      <ComunasContext.Consumer>
        {({ comunas, updateComunas }) => {
          return comunas
            .filter((comuna) => comuna.favorite)
            .map((comuna) => {
              const updater = () => {
                const comunasUpdated = comunaUpdater(comuna, comunas);
                updateComunas(comunasUpdated);
              };
              return (
                <ComunaCard
                  data={comuna}
                  key={comuna.name}
                  updater={updater}
                ></ComunaCard>
              );
            });
        }}
      </ComunasContext.Consumer>
    </VStack>
  );
}

export default Favorites;
