import styled from "styled-components";
import { SkillsThemes } from "./Skills.Types";

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const SkillHeader = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;
export const SkillBody = styled.div`
  padding: 10px 10px 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  text-align: center;
`;

export const SkillCardContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SkillCard = styled.div<SkillsThemes>`
  background: #191c29;
  width: 200px;
  height: 250px;
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  margin-right: 50px;
  margin-bottom: 50px;
  flex-direction: column;

  --rotate: 132deg;

  path {
    fill: inherit;
  }

  &:before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(
      var(--rotate),
      ${(props) => (props.colors ? props.colors[0] : "#5ddcff")},
      ${(props) => (props.colors ? props.colors[1] : "#3c67e3")} 43%,
      ${(props) => (props.colors ? props.colors[2] : "#4e00c2")}
    );
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }

  &:after {
    position: absolute;
    content: "";
    top: calc(250px / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(250px / 6));
    background-image: linear-gradient(
      var(--rotate),
      ${(props) => (props.colors ? props.colors[0] : "#5ddcff")},
      ${(props) => (props.colors ? props.colors[1] : "#3c67e3")} 43%,
      ${(props) => (props.colors ? props.colors[2] : "#4e00c2")}
    );
    opacity: 1;
    transition: opacity 0.5s;
    animation: spin 2.5s linear infinite;
  }
`;

export const SkillCardFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const SkillCardBack = styled.div<SkillsThemes>`
  --rotate: 132deg;
  font-weight: lighter;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  display: list-item;
  background: linear-gradient(
    var(--rotate),
    ${(props) => (props.colors ? props.colors[0] : "#5ddcff")},
    ${(props) => (props.colors ? props.colors[1] : "#3c67e3")} 43%,
    ${(props) => (props.colors ? props.colors[2] : "#4e00c2")}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: spin 2.5s linear infinite;
`;
