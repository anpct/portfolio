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
`;

export const IconContainer = styled.div<TaskbarThemes>`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.selected) {
      return `background-color: ${props.theme.hover};`;
    }
  }}

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const TaskbarModal = styled.div`
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.taskbar};
  height: 90vh;
  bottom: 50px;
  display: flex;
  width: auto;
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
  margin-right: 10px;
`;

export const EnabledIconsContainer = styled.div`
  display: flex;
`;

export const GroupHeader = styled.div`
  padding: 10px 0;
  text-transform: capitalize;
`;

export const IconDivider = styled.div``;
