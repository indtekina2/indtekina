import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoon, FiSun } from "react-icons/fi";

import "./Navbar.css";

const THEME_STORAGE_KEY = "indtekina-theme";

function getSavedTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
}

function NavBar() {
  const [showMenuIco, setShowMenuIco] = useState(false);
  const [theme, setTheme] = useState(getSavedTheme);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const showToggle = () => {
    setShowMenuIco((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="navbar">
        <h1
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          Indtekina
        </h1>

        <nav
          id="primary-navigation"
          className={showMenuIco ? "showMenu" : "hideMenu"}
        >
          <ul className="nav_links">
            <li>
              <NavLink
                to={"/"}
                onClick={() => {
                  setShowMenuIco(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={() => {
                  setShowMenuIco(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                onClick={() => {
                  setShowMenuIco(false);
                }}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="theme_toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          <span>{theme === "light" ? "Dark" : "Light"}</span>
        </button>

        <button
          type="button"
          className="hamBurg"
          onClick={showToggle}
          aria-label={showMenuIco ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showMenuIco}
          aria-controls="primary-navigation"
        >
          <GiHamburgerMenu aria-hidden="true" />
        </button>
      </header>
    </>
  );
}

export default NavBar;
