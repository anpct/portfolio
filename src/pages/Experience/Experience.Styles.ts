import styled from "styled-components";

export const ExperienceContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const ExperienceHeader = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.primary};
  height: 100px;
`;

export const ExperienceCardContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  height: calc(100% - 100px);
  path {
    fill: inherit;
  }
`;
