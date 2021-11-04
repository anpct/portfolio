import React from "react";
import {
  DesktopContainer,
  DesktopIconContainer,
  DesktopIconIconContainer,
  DesktopIconTextContainer,
} from "./Desktop.Styles";
import { DesktopProps } from "./Desktop.Types";

const Desktop: React.FC<DesktopProps> = (props: DesktopProps) => {
  const { openModal, screenData } = props;
  return (
    <DesktopContainer>
      {Object.values(screenData).map((screen) => (
        <DesktopIconContainer
          onClick={() => openModal(screen.screenName)}
          key={screen.screenName}>
          <DesktopIconIconContainer>{screen.icon}</DesktopIconIconContainer>
          <DesktopIconTextContainer>
            {screen.screenName}
          </DesktopIconTextContainer>
        </DesktopIconContainer>
      ))}
    </DesktopContainer>
  );
};

export default Desktop;
