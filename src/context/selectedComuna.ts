import React from "react";
import { ComunaType } from "../types/Comuna.type";

const Comuna = { name: "Arica", favorite: false };

export const ComunaSelectedContext = React.createContext({
  selectedComuna: Comuna,
  updateSelectedComuna: (comuna: ComunaType) => {},
});
