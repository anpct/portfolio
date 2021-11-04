import styled from "styled-components";

export const TaskbarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.taskbar};
  position: relative;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  width: 75%;
  display: flex;
`;

export const TaskbarControl = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TaskbarLeft = styled.div`
  width: calc(40% - 50px);
`;
export const TaskbarRight = styled.div`
  width: 60%;
`;

export const TaskbarListItem = styled.div``;
