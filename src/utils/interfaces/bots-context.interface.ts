import { ReactNode } from "react";
import { IBot } from "./bots.interfaces";

export type ChildrenType = {
  children: ReactNode;
};

export interface BotsContextProps {
  favorities: IBot[];
  bots: IBot[];
  addToFavorities: (bot: IBot) => void;
  addBots: (bot: IBot[]) => void;
  botsList: IBot[];
  filterBots: (name: string) => void;
}
