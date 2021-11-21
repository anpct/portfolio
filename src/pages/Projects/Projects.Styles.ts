import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const ProjectsHeader = styled.div`
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

export const ProjectsCardContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

export const ProjectCard = styled.div`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border: thin solid #33325c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 50px;
  margin-bottom: 50px;
  flex-direction: column;

  padding: 10px;
  img {
    height: 90%;
    width: 90%;
  }
`;

export const ProjectCardTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
`;
export const ProjectCardDescription = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const ProjectCardActions = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: thin solid #33325c;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease-in 200ms;
  }

  div:hover {
    background-color: #33325c;
  }
`;
export const ProjectCardTech = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  path {
    fill: inherit;
  }

  div {
    height: 30px;
    object-fit: contain;
    margin-right: 2px;
  }
`;
