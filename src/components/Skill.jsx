import React from 'react';

const Skill = ({ title, years }) => {
  return (
    <div className="skills-item">
      <h2>{title}</h2>
      <p>{`${years} years experience`}</p>
    </div>
  );
};

export default Skill;
