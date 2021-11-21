import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const ContactHeader = styled.div`
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

export const ContactCardContainer = styled.div`
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

export const Github = styled.div`
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.7));
  cursor: pointer;
  transition: all ease-in 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Email = styled.div`
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.7));
  cursor: pointer;
  margin-right: 30px;
  transition: all ease-in 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;
