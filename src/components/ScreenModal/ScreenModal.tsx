import React, { useState } from "react";
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

const ScreenModal: React.FC<ScreenModalProps> = (props: ScreenModalProps) => {
  const [fullSize, setFullSize] = useState(false);
  const changeSreenSize = () => {
    setFullSize(!fullSize);
  };
  const { closeModal, minimizeModal, children, screen } = props;
  return (
    <Draggable bounds="parent">
      <ScreenModalContainer fullSize={fullSize}>
        <ModalController>
          <ModalDetails>
            <ModalName>{screen.screenName}</ModalName>
          </ModalDetails>
          <ModalDetails>
            <IconContainer onClick={() => minimizeModal(screen.screenName)}>
              <MinusIconSVG />
            </IconContainer>
            <IconContainer onClick={changeSreenSize}>
              <ResizeIconSVG />
            </IconContainer>
            <IconContainer onClick={() => closeModal(screen.screenName)}>
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
