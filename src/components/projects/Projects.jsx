import "./projects.scss";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section className="showcase">
      <h3 className="title">My Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
