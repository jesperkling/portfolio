import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <ul className="name">
          <li>&copy; 2024 Jesper Kling</li>
        </ul>
        <div className="links">
          <ul>
            <li>Main</li>
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
              <a
                href="https://www.linkedin.com/in/jesper-kling/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://read.cv/jesperkling" target="_blank">
                CV
              </a>
            </li>
            <li>
              <a href="https://github.com/jesperkling" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="mailto:jesperkling87@gmail.com">Mail</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
