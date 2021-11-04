export interface TaskbarProps {
  minimizeModal: (screenName: string) => void;
  maximizeModal: (screenName: string) => void;
  openModal: (screenName: string) => void;
  screenData: ConstructedObject;
}

export interface TaskbarThemes {
  selected?: boolean;
}
