import "./projects.scss";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section className="showcase">
      <h3 className="title">My Projects</h3>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <h3 className="project-name">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
