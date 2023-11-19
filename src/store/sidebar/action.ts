import { Dispatch } from "react";
import { ISidebar, ISidebarAction } from "./reducer";

export const toggleSidebar = (
  sidebar: ISidebar,
  dispatch: Dispatch<ISidebarAction>
) => {
  dispatch({
    type: "TOGGLE",
  });
};
export const openSidebar = (
  sidebar: ISidebar,
  dispatch: Dispatch<ISidebarAction>
) => {
  dispatch({
    type: "OPEN",
  });
};
export const closeSidebar = (
  sidebar: ISidebar,
  tag: string,
  dispatch: Dispatch<ISidebarAction>
) => {
  dispatch({
    type: "CLOSE",
  });
};
