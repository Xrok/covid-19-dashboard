import { ComunaType } from "../types/Comuna.type";

export const comunaUpdater = (
  _comuna: ComunaType,
  _comunas: ComunaType[],
  _selectedComuna: ComunaType
) => {
  const index = _comunas.findIndex((comuna) => comuna.name === _comuna.name);
  _comunas[index].favorite = !_comunas[index].favorite;
  const selectedComuna =
    _comuna.name === _selectedComuna.name ? _comunas[index] : _selectedComuna;
  return { comunas: _comunas, selectedComuna };
};

export const comunaSelectedUpdater = (
  _comuna: ComunaType,
  _comunas: ComunaType[],
  _selectedComuna: ComunaType
) => {
  return { comunas: _comunas, selectedComuna: _comuna };
};
