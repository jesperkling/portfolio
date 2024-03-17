import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
      <section className="top">
        <div className="title">
          <h1>About me</h1>
        </div>
      </section>

      <section className="content">
        <div className="image">
          <img src="src/assets/CV-Bild.jpg" alt="Profile picture" />
        </div>
        <div className="presentation">
          <h3>Developer based in Malmö, Sweden</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptatibus velit laudantium id? Quam laboriosam facere fugiat
            labore officiis in fuga eligendi? Repudiandae voluptate eaque culpa
            odit tenetur dolore aspernatur.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
