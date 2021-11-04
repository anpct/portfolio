import React from "react";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Experience from "../pages/Experience/Experience";
import Info from "../pages/Info/Info";
import Projects from "../pages/Projects/Projects";
import Settings from "../pages/Settings/Settings";
import Skills from "../pages/Skills/Skills";
import {
  AboutIconSVG,
  ContactIconSVG,
  ExperienceIconSVG,
  InfoIconSVG,
  ProjectsIconSVG,
  SettingsIconSVG,
  SkillsIconSVG,
} from "../resources/svgs/svgs";

const screenDetails: ConstructedObject = {
  info: {
    screenName: "info",
    component: <Info />,
    isOpened: true,
    isVisible: true,
    icon: <InfoIconSVG />,
  },
  about: {
    screenName: "about",
    component: <About />,
    isOpened: false,
    isVisible: false,
    icon: <AboutIconSVG />,
  },
  contact: {
    screenName: "contact",
    component: <Contact />,
    isOpened: false,
    isVisible: false,
    icon: <ContactIconSVG />,
  },
  experience: {
    screenName: "experience",
    component: <Experience />,
    isOpened: false,
    isVisible: false,
    icon: <ExperienceIconSVG />,
  },
  projects: {
    screenName: "projects",
    component: <Projects />,
    isOpened: false,
    isVisible: false,
    icon: <ProjectsIconSVG />,
  },
  settings: {
    screenName: "settings",
    component: <Settings />,
    isOpened: false,
    isVisible: false,
    icon: <SettingsIconSVG />,
  },
  skills: {
    screenName: "skills",
    component: <Skills />,
    isOpened: false,
    isVisible: false,
    icon: <SkillsIconSVG />,
  },
};

export default screenDetails;
