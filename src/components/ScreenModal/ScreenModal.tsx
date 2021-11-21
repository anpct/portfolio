import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import {
  MinusIconSVG,
  ResizeIconSVG,
  CrossIconSVG,
} from "../../resources/svgs/svgs";
import {
  IconContainer,
  ModalContent,
  ModalController,
  ModalDetails,
  ModalName,
  ScreenModalContainer,
} from "./ScreenModal.Styles";
import { ScreenModalProps } from "./ScreenModal.Types";
import { GlobalState } from "../../state/GlobalState";

const ScreenModal: React.FC<ScreenModalProps> = (props: ScreenModalProps) => {
  const [fullSize, setFullSize] = useState(false);
  const changeSreenSize = () => {
    setFullSize(!fullSize);
  };
  const { closeModal, minimizeModal, children, screen, onFocus } = props;
  const { state } = useContext(GlobalState);
  return (
    <Draggable bounds="parent" handle=".screen-modal-control-bar">
      <ScreenModalContainer
        fullSize={fullSize}
        isTransparent={state.transparency}
        onClick={() => onFocus(screen.screenName)}
        onTouchStart={() => onFocus(screen.screenName)}
        zIndex={screen?.zIndex}>
        <ModalController className="screen-modal-control-bar">
          <ModalDetails>
            <ModalName>{screen.screenName}</ModalName>
          </ModalDetails>
          <ModalDetails>
            <IconContainer
              onClick={() => minimizeModal(screen.screenName)}
              onTouchStart={() => minimizeModal(screen.screenName)}>
              <MinusIconSVG />
            </IconContainer>
            <IconContainer
              onClick={changeSreenSize}
              onTouchStart={changeSreenSize}>
              <ResizeIconSVG />
            </IconContainer>
            <IconContainer
              onClick={() => closeModal(screen.screenName)}
              onTouchStart={() => closeModal(screen.screenName)}>
              <CrossIconSVG />
            </IconContainer>
          </ModalDetails>
        </ModalController>
        <ModalContent>{children}</ModalContent>
      </ScreenModalContainer>
    </Draggable>
  );
};

export default ScreenModal;
