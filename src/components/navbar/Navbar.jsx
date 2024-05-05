import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    document.body.classList.toggle("light-theme");
  };

  return (
    <div className={`navbar-container ${isLightTheme ? "light-theme" : ""}`}>
      <nav className="navbar">
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
        <button onClick={toggleTheme}>
          {isLightTheme ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
