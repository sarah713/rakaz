"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();
export const UpdateContext = createContext();
const [globalState, setGlobalState] = useState();
export const globalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalState}>
      <UpdateContext.Provider value={setGlobalState}>
        {children}
      </UpdateContext.Provider>
    </GlobalContext.Provider>
  );
};
