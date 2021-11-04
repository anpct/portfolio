import styled from "styled-components";

export const DesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.gradientBackground};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
`;

export const DesktopIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70px;
  width: 80px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const DesktopIconIconContainer = styled.div`
  height: 50px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopIconTextContainer = styled.div`
  height: 20px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;
