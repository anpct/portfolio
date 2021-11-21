import React from "react";
import {
  DesktopContainer,
  DesktopIconContainer,
  DesktopIconIconContainer,
  DesktopIconTextContainer,
} from "./Desktop.Styles";
import { DesktopProps } from "./Desktop.Types";
import Draggable from "react-draggable";

type CallBack = () => void;
type TapParams = { onSingleTap?: CallBack; onDoubleTap?: CallBack };

const DELTA_TIME_THRESHOLD_MS = 700;
let timer: NodeJS.Timeout | null = null;
let target: EventTarget;

export function tap(
  e: React.MouseEvent,
  { onSingleTap, onDoubleTap }: TapParams,
) {
  console.log("here");

  if (timer == null) {
    // First tap
    onSingleTap?.();

    timer = setTimeout(() => {
      timer = null;
    }, DELTA_TIME_THRESHOLD_MS);
  } else {
    // Second tap
    if (e.target === target) {
      onDoubleTap?.();
    }

    clearTimeout(timer);
    timer = null;
  }
  target = e.target;
}

const Desktop: React.FC<DesktopProps> = (props: DesktopProps) => {
  const { openModal, screenData } = props;

  return (
    <DesktopContainer>
      {Object.values(screenData).map((screen) => (
        <Draggable bounds="parent" key={screen.screenName}>
          <DesktopIconContainer
            onDoubleClick={() => openModal(screen.screenName)}
            onTouchEndCapture={() => openModal(screen.screenName)}
            key={screen.screenName}>
            <DesktopIconIconContainer>{screen.icon}</DesktopIconIconContainer>
            <DesktopIconTextContainer>
              {screen.screenName}
            </DesktopIconTextContainer>
          </DesktopIconContainer>
        </Draggable>
      ))}
    </DesktopContainer>
  );
};

export default Desktop;
