import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const AboutHeader = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

export const StickieContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

export const StickieCard = styled.div`
  height: 200px;
  width: 175px;
  color: #191c29;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer;
  margin-right: 50px;
  margin-bottom: 50px;
  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  transition: all ease-in 200ms;

  &:nth-child(even) {
    transform: rotate(-4deg);
    background: #cfc;
  }

  &:nth-child(odd) {
    transform: rotate(4deg);
    background: #ffc;
  }

  &:hover {
    transform: scale(1.2);
  }

  @keyframes cardShow {
    0% {
      position: absolute;
    }
    100% {
      position: relative;
    }
  }
`;
