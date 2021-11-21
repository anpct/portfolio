import styled from "styled-components";
import { TaskbarThemes } from "./Taskbar.Types";

export const TaskbarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.taskbar};
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 999999999;
`;

export const IconContainer = styled.div<TaskbarThemes>`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 2px;

  ${(props) => {
    if (props.selected) {
      return `background-color: ${props.theme.hover};`;
    }
  }}

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const TaskbarModal = styled.div<TaskbarThemes>`
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.taskbar};
  height: 80vh;
  bottom: 50px;
  display: flex;
  width: auto;
  opacity: ${(props) => (props.isTransparent ? "0.5" : "1")};
  animation: bottomToTop;
  animation-duration: 0.5s;
  border-top-right-radius: 10px;
  z-index: 999999999;
  border-top: thin solid ${(props) => props.theme.primaryText};
  border-right: thin solid ${(props) => props.theme.primaryText};
`;

export const TaskbarControl = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TaskbarLeft = styled.div`
  padding: 10px;
  width: calc(100% - 50px);
  overflow: auto;
`;

export const TaskbarListItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  transition: all ease-in 200ms;
  transform-style: preserve-3d;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;
export const TaskbarListItemIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TaskbarListItemName = styled.div`
  text-transform: capitalize;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;
  font-size: 13px;
`;

export const EnabledIconsContainer = styled.div`
  display: flex;
`;

export const GroupHeader = styled.div`
  padding: 10px 0;
  text-transform: capitalize;
`;

export const IconDivider = styled.div``;
