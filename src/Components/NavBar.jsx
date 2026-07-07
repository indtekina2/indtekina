import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css";

function NavBar() {
  const [showMenuIco, setShowMenuIco] = useState(false);
  const navigate = useNavigate();

  const showToggle = () => {
    setShowMenuIco((prev) => !prev);
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

        <nav className={showMenuIco ? "showMenu" : "hideMenu"}>
          <ul className="nav_links">
            <li>
              <NavLink
                to={"/"}
                onClick={() => {
                  showMenuIco(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={() => {
                  showMenuIco(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                onClick={() => {
                  showMenuIco(false);
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                onClick={() => {
                  showMenuIco(false);
                }}
              >
                Services
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hamBurg" onClick={showToggle}>
          <GiHamburgerMenu />
        </div>
      </header>
    </>
  );
}

export default NavBar;
