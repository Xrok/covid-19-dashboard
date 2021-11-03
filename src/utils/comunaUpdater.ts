import { ComunaType } from "../types/Comuna.type";

export const comunaUpdater = (_comuna: ComunaType, _comunas: ComunaType[]) => {
  const index = _comunas.findIndex((comuna) => comuna.name === _comuna.name);
  _comunas[index].favorite = !_comunas[index].favorite;
  return _comunas;
};
