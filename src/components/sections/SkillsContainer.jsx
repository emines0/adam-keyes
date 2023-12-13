import React from 'react';
import skills from '../../assets/data/skills';
import Skill from '../Skill';

const Skills = () => {
  return (
    <>
      <div className="underline"></div>
      <div
        className="container"
        id="skills"
      >
        {skills.map((skill, i) => {
          return (
            <Skill
              key={i}
              title={skill.title}
              years={skill.years}
            />
          );
        })}
      </div>
    </>
  );
};

export default Skills;
