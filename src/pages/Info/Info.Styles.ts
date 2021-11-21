import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const InfoHeader = styled.div`
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

export const InfoCardContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  div {
    margin: 10px 0;
    display: flex;
    width: 100%;
  }
  path {
    fill: inherit;
  }

  ul {
    list-style-type: "✅";
    margin-left: 20px;
    padding-left: 1em;
  }
  li {
    margin-bottom: 8px;
  }
`;
