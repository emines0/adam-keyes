import ContactBtn from '../ContactBtn';
import Project from '../Project';
import projects from '../../assets/data/projects';

const Projects = () => {
  return (
    <div
      className="container"
      id="projects"
    >
      <div className="underline"></div>

      <header className="box">
        <h2>Projects</h2>
        <ContactBtn />
      </header>
      <div className="projects-container">
        {projects.map((project, i) => (
          <Project
            key={i}
            imgS={project.imageS}
            imgL={project.imageL}
            title={project.title}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
