import React from "react";
import data from "./About.Data";
import {
  AboutContainer,
  AboutHeader,
  StickieCard,
  StickieContainer,
} from "./About.Styles";

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>{"Let's get to know a bit about me"}</AboutHeader>
      <StickieContainer>
        {data.map((sticke) => (
          <StickieCard key={sticke.key}>{sticke.value}</StickieCard>
        ))}
      </StickieContainer>
    </AboutContainer>
  );
};

export default About;
