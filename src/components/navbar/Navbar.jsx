import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.scss";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(
    localStorage.getItem("theme") === "light"
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isLightTheme;
    setIsLightTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
    document.body.classList.toggle("light-theme", newTheme);
  };

  useEffect(() => {
    if (document.styleSheets.length > 0) {
      setIsLoaded(true);
    }

    if (isLoaded) {
      document.body.classList.toggle("light-theme", isLightTheme);
    }
  }, [isLightTheme, isLoaded]);

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
