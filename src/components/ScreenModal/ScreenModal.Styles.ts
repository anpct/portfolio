import styled from "styled-components";
import { ScreenModalThemes } from "./ScreenModal.Types";

export const ScreenModalContainer = styled.div<ScreenModalThemes>`
  position: absolute;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isTransparent ? "0.5" : "1")};
  border-radius: ${(props) => (props.fullSize ? "0" : "10px")};
  animation: fadeIn;
  animation-duration: 0.5s;
  z-index: ${(props) => props.zIndex};
  border: thin solid ${(props) => props.theme.primaryText};
  ${(props) => {
    if (props.fullSize) {
      return `
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        `;
    } else {
      return `
        height: 70%;
        width: 70%;
        top: 0;
        left: 0;
        `;
    }
  }};
`;

export const ModalController = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContent = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  overflow: auto;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  margin-left: 10px;
`;
