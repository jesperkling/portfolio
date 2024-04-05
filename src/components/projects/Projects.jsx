import "./projects.scss";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section className="showcase">
      <h3 className="title">My Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <h3>{project.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
