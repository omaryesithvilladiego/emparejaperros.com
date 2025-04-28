import { createContext, useContext } from "react";
import { INavBarContext } from "../interfaces";

export const NavBarContext = createContext<INavBarContext | undefined>(undefined);

export function useNavBarButtonsContext() {
  const context = useContext(NavBarContext);
  if (!context) throw new Error("No hay ningun contexto");
  return context;
}
