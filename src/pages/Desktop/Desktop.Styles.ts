import styled from "styled-components";

export const DesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.gradientBackground};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
`;

export const DesktopIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70px;
  width: 70px;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const DesktopIconIconContainer = styled.div`
  height: 50px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopIconTextContainer = styled.div`
  height: 20px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
