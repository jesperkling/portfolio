import "./home.scss";
import Tools from "../../components/tools/Tools";
import Projects from "../../components/projects/Projects";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="header">
          <h1>Welcome, I'm Jesper.</h1>
          <span>Frontend Developer.</span>
        </div>

        <div className="subtitle">
          <p>
            I am highly passionate about crafting engaging and user-centered
            experiences.
          </p>
        </div>
      </section>
      <Projects />
      <Tools />
    </div>
  );
};

export default Home;
