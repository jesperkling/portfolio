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
          <img src="/assets/CV-Bild.jpg" alt="Profile picture" />
        </div>
        <div className="presentation">
          <h3>I'm a developer based in Malmö, Sweden</h3>
          <p>
            I have a diverse background in logistics and customs. I always had
            an interest and passion for learning more about technology. That's
            why I 2021 decided to study to become a Frontend Developer to have
            the possibility to combine two passions of mine technology and
            design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
