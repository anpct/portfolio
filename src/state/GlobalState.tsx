import React from "react";
import { createContext, useReducer } from "react";
import { GlobalStateI, StateActions, StateReducerT } from "./GlobalState.Types";

const initialState: GlobalStateI = {
  theme: "dark",
  wallpaper: "default",
  transparency: false,
};

const stateReducer: StateReducerT = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const GlobalState = createContext<{
  state: GlobalStateI;
  dispatch: React.Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => undefined });

export const GlobalStateProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalState.Provider>
  );
};
