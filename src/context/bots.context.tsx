import { createContext, useState, useContext } from "react";
import { IBot } from "../utils/interfaces/bots.interfaces";
import {
  BotsContextProps,
  ChildrenType,
} from "../utils/interfaces/bots-context.interface";

const BotsContext = createContext({} as BotsContextProps);

export function BotsProvider({ children }: ChildrenType) {
  const [favorities, setFavorities] = useState<IBot[]>([]);
  const [bots, setBots] = useState<IBot[]>([]);
  const [botsList, setBotsList] = useState<IBot[]>([]);

  const addToFavorities = (bot: IBot): void => {
    const alreadyOnFavorities = favorities.find(
      (item) => item.name === bot.name
    );

    if (alreadyOnFavorities) {
      setFavorities((state) => {
        return state.filter((item) => item.name !== bot.name);
      });
      setBots((state) => {
        return [...state, bot];
      });

      setBotsList((state) => {
        return [...state, bot];
      });

      return;
    }

    setBots((state) => {
      return state.filter((item) => item.name !== bot.name);
    });

    setBotsList((state) => {
      return state.filter((item) => item.name !== bot.name);
    });

    setFavorities((state) => {
      return [...state, bot];
    });
  };

  const addBots = (bots: IBot[]): void => {
    setBots(bots);
    setBotsList(bots);
  };

  const filterBots = (name: string): void => {
    if (name.trim() === "" && name.length > 0) {
      return;
    }

    if (!name || name.trim() === "") {
      addBots(bots);
      return;
    }

    const botsFilteredByName = bots.filter((bot) =>
      bot.name.toLowerCase().includes(name.toLowerCase())
    );

    setBotsList(botsFilteredByName);
  };

  return (
    <BotsContext.Provider
      value={{
        favorities,
        addToFavorities,
        bots,
        addBots,
        filterBots,
        botsList,
      }}
    >
      {children}
    </BotsContext.Provider>
  );
}

export const useBots = () => useContext(BotsContext);
