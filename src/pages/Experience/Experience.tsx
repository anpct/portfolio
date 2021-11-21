import React from "react";
import {
  ExperienceCardContainer,
  ExperienceContainer,
  ExperienceHeader,
} from "./Experience.Styles";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2014",
    cardTitle: "Completed Schooling",
    cardDetailedText: "Started working on small personal project",
  },
  {
    title: "2016",
    cardTitle: "Started College",
    cardDetailedText:
      "Worked on multiple applications for my college like a feedback website",
  },
  {
    title: "2018",
    cardTitle: "Started freelancing",
    cardDetailedText: "Created Multiple applications for various companies",
  },
  {
    title: "July 2020",
    cardTitle: "Started working at TCS",
    cardDetailedText:
      "Since joining TCS as a Systems Engineer I have developed multiple applications across various domains",
  },
  {
    title: "Sep 2020",
    cardTitle: "Graduated from college",
    cardDetailedText: "While working at TCS I completed my graduation",
  },
];

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceHeader>What I have been upto over the years</ExperienceHeader>
      <ExperienceCardContainer>
        <Chrono items={items} mode="VERTICAL" slideShow cardHeight={100} />
      </ExperienceCardContainer>
    </ExperienceContainer>
  );
};

export default Experience;
