import styled from "styled-components";
import { ScreenModalThemes } from "./ScreenModal.Types";

export const ScreenModalContainer = styled.div<ScreenModalThemes>`
  position: absolute;

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
        height: 50%;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        `;
    }
  }}
`;

export const ModalController = styled.div`
  height: 40px;
  width: 100%;
`;

export const ModalContent = styled.div`
  height: calc(100% - 40px);
  width: 100%;
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
