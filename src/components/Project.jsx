import React, { useContext } from 'react';
import GlobalContext from '../context/context';

const Project = ({ imgS, imgL, title, liveUrl, codeUrl, tags }) => {
  const { windowSize } = useContext(GlobalContext);
  return (
    <div className="project-item">
      <div className="thumbnail">
        <img
          src={windowSize.mobile ? imgS : imgL}
          alt="project1"
        />
      </div>
      <h3>{title}</h3>
      <div className="tags">
        {tags.map((tag, i) => {
          return <p key={i}>{tag}</p>;
        })}
      </div>
      <div className={windowSize.desktop ? 'links large' : 'links small'}>
        <a href={liveUrl}>view project</a>
        <a href={codeUrl}>view code</a>
      </div>
    </div>
  );
};

export default Project;
