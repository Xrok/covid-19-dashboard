import React from "react";
import { ComunaType } from "../types/Comuna.type";

export const Comunas = [
  { name: "Arica", favorite: false },
  { name: "Antofagasta", favorite: false },
  { name: "Alto Hospicio", favorite: false },
  { name: "Iquique", favorite: false },
];

export const ComunasContext = React.createContext({
  comunas: Comunas,
  updateComunas: (comunas: ComunaType[]) => {},
});
