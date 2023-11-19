import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import { initState, reducer, ISidebarAction, ISidebar } from "./reducer";

interface IContext {
  state: ISidebar;
  dispatch: Dispatch<ISidebarAction>;
}

export const Context = createContext<IContext>({
  state: initState,
  dispatch: () => {},
});

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
