import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul className="name">
        <li>&copy; 2024 Jesper Kling</li>
      </ul>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <ul>
          <li>Contact</li>
          <li>
            <a href="https://www.linkedin.com/in/jesper-kling/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/jesperkling" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
