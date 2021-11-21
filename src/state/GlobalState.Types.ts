export interface GlobalStateI {
  theme: "dark" | "light";
  wallpaper: string;
  transparency: boolean;
}

export type StateReducerT = (
  state: GlobalStateI,
  action: StateActions,
) => GlobalStateI;

export interface ChangeThemeAction {
  type: "CHANGE_THEME";
  payload: "light" | "dark";
}

export type StateActions = ChangeThemeAction;
