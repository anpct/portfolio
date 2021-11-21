import React from "react";
import data from "./Skills.Data";
import {
  SkillBody,
  SkillCard,
  SkillCardBack,
  SkillCardContainer,
  SkillCardFront,
  SkillContainer,
  SkillHeader,
} from "./Skills.Styles";

const Skills = () => {
  return (
    <SkillContainer>
      <SkillHeader>I do all kinds of neat stuff</SkillHeader>
      <SkillBody>
        I am an experienced full stach developer with specialized knowledge in
        all stages of the software development lifecycle
      </SkillBody>
      <SkillCardContainer>
        {data.map((skill) => (
          <SkillCard
            colors={skill.colors}
            key={skill.name}
            onClick={() => {
              window?.open(skill.link, "_blank")?.focus();
            }}>
            <SkillCardFront>{skill.icon}</SkillCardFront>
            <SkillCardBack colors={skill.textColors}>
              {skill.level}
            </SkillCardBack>
          </SkillCard>
        ))}
      </SkillCardContainer>
    </SkillContainer>
  );
};

export default Skills;
