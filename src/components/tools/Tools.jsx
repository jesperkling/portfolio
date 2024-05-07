import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaJs,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import "./tools.scss";
import { SiMysql } from "react-icons/si";

const Tools = () => {
  const tools = [
    {
      name: "React",
      icon: <FaReact size={32} />,
    },
    {
      name: "Node.js",
      icon: <FaNode size={32} />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={32} />,
    },
    {
      name: "CSS",
      icon: <FaCss3 size={32} />,
    },
    {
      name: "Figma",
      icon: <FaFigma size={32} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={32} />,
    },
    {
      name: "Sass",
      icon: <FaSass size={32} />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={32} />,
    },
  ];
  return (
    <section className="toolbox-container">
      <h3>My Toolbox</h3>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>
            {tool.icon}
            <p>{tool.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;
