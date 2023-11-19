import { Action } from "@/types/store";

// Types
export interface ISidebar {
  open: boolean;
}

export interface ISidebarAction extends Action<"TOGGLE" | "OPEN" | "CLOSE"> {}

// Initial state
export const initState: ISidebar = {
  open: false,
};

// Reducer
export const reducer = (state: ISidebar, action: ISidebarAction) => {
  switch (action.type) {
    case "TOGGLE":
      return toggleSidebar(state);
    case "OPEN":
      return openSidebar(state);
    case "CLOSE":
      return closeSidebar(state);
    default:
      return state;
  }
};

// Functions
const toggleSidebar = (state: ISidebar) => {
  return { ...state, open: !state.open };
};

const openSidebar = (state: ISidebar) => {
  return { ...state, open: true };
};

const closeSidebar = (state: ISidebar) => {
  return { ...state, open: close };
};
