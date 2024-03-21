import "./projectPage.scss";
import Projects from "../../components/projects/Projects";

const ProjectPage = () => {
  return (
    <div className="projects-container">
      <section className="top">
        <h1>Projects</h1>
      </section>

      <section className="projects">
        <Projects />
      </section>
    </div>
  );
};

export default ProjectPage;
