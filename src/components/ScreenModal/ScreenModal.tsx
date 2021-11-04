import React, { useState } from "react";
import {
  MinusIconSVG,
  ResizeIconSVG,
  CrossIconSVG,
} from "../../resources/svgs/svgs";
import {
  IconContainer,
  ModalContent,
  ModalController,
  ScreenModalContainer,
} from "./ScreenModal.Styles";
import { ScreenModalProps } from "./ScreenModal.Types";

const ScreenModal: React.FC<ScreenModalProps> = (props: ScreenModalProps) => {
  const [fullSize, setFullSize] = useState(false);
  const changeSreenSize = () => {
    setFullSize(!fullSize);
  };
  const { closeModal, minimizeModal, children, screenName } = props;
  return (
    <ScreenModalContainer fullSize={fullSize}>
      <ModalController>
        <IconContainer onClick={() => minimizeModal(screenName)}>
          <MinusIconSVG />
        </IconContainer>
        <IconContainer onClick={changeSreenSize}>
          <ResizeIconSVG />
        </IconContainer>
        <IconContainer onClick={() => closeModal(screenName)}>
          <CrossIconSVG />
        </IconContainer>
      </ModalController>
      <ModalContent>{children}</ModalContent>
    </ScreenModalContainer>
  );
};

export default ScreenModal;
