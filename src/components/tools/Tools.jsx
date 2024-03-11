import "./tools.scss";

const Tools = () => {
  const tools = [
    {
      name: "React",
      logo: "src/assets/tools/icons8-react-js.svg",
    },
    {
      name: "Node.js",
      logo: "src/assets/tools/icons8-node-js.svg",
    },
    {
      name: "Bootstrap",
      logo: "src/assets/tools/icons8-bootstrap.svg",
    },
    {
      name: "CSS",
      logo: "src/assets/tools/icons8-css.svg",
    },
    {
      name: "Firebase",
      logo: "src/assets/tools/icons8-firebase.svg",
    },
    {
      name: "JavaScript",
      logo: "src/assets/tools/icons8-javascript.svg",
    },
    {
      name: "Sass",
      logo: "src/assets/tools/icons8-sass.svg",
    },
    {
      name: "Tailwind",
      logo: "src/assets/tools/icons8-tailwind-css.svg",
    },
  ];
  return (
    <section className="toolbox-container">
      <h3>My Toolbox</h3>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>
            <img src={tool.logo} alt="logo" />
            <p>{tool.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;
