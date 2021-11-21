import { ReactElement } from "react";

export interface ScreenModalThemes {
  fullSize?: boolean;
  isTransparent?: boolean;
  zIndex?: number;
}

export interface ScreenModalProps {
  closeModal: (screenName: string) => void;
  minimizeModal: (screenName: string) => void;
  onFocus: (screenName: string) => void;
  children: ReactElement;
  screen: ConstructedObject;
}
