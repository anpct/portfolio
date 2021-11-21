import React from "react";
import {
  ProjectCard,
  ProjectCardActions,
  ProjectCardDescription,
  ProjectCardTech,
  ProjectCardTitle,
  ProjectsCardContainer,
  ProjectsContainer,
  ProjectsHeader,
} from "./Projects.Styles";
import meAni from "../../resources/svgs/meAni.svg";
import meAniEnd from "../../resources/svgs/meAniEnd.svg";
import data from "./Projects.Data";
import {
  DjangoSVG,
  HerokuSVG,
  HTMLSVG,
  JSSVG,
  PythonSVG,
  ReactNativeSVG,
  ReactSVG,
} from "../../resources/svgs/skills";

const getSVG = (techName: string) => {
  if (techName === "django") {
    return <DjangoSVG height={25} width={25} />;
  } else if (techName === "heroku") {
    return <HerokuSVG height={25} width={25} />;
  } else if (techName === "react") {
    return <ReactSVG height={25} width={25} />;
  } else if (techName === "react native") {
    return <ReactNativeSVG height={25} width={25} />;
  } else if (techName === "django") {
    return <DjangoSVG height={25} width={25} />;
  } else if (techName === "python") {
    return <PythonSVG height={25} width={25} />;
  } else if (techName === "html") {
    return <HTMLSVG height={25} width={25} />;
  } else if (techName === "js") {
    return <JSSVG height={25} width={25} />;
  }
  return <></>;
};

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeader>Things I have worked on</ProjectsHeader>
      <ProjectsCardContainer>
        <ProjectCard key="me">
          <img src={meAni} />
        </ProjectCard>
        {data.map((project) => (
          <ProjectCard key={project.key}>
            <ProjectCardTitle>{project.name}</ProjectCardTitle>
            <ProjectCardDescription>
              {project.description}
            </ProjectCardDescription>
            <ProjectCardActions>
              <div
                onClick={() => {
                  window?.open(project?.github, "_blank")?.focus();
                }}>
                View Code
              </div>
              {project?.website && (
                <div
                  onClick={() => {
                    window?.open(project?.website, "_blank")?.focus();
                  }}>
                  View Live
                </div>
              )}
            </ProjectCardActions>
            <ProjectCardTech>
              {project?.technologies?.map((tech) => (
                <div key={tech}>{getSVG(tech)}</div>
              ))}
            </ProjectCardTech>
          </ProjectCard>
        ))}
        <ProjectCard key="meEnd">
          <img src={meAniEnd} />
        </ProjectCard>
      </ProjectsCardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
