import "./projects.scss";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Text",
    },
    {
      name: "Project 2",
      description: "Text",
    },
    {
      name: "Project 3",
      description: "Text",
    },
    {
      name: "Project 4",
      description: "Text",
    },
  ];
  return (
    <section className="showcase">
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
