import { ReactElement } from "react";

export interface ScreenModalThemes {
  fullSize?: boolean;
}

export interface ScreenModalProps {
  closeModal: (screenName: string) => void;
  minimizeModal: (screenName: string) => void;
  children: ReactElement;
  screenName: string;
}
