import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css";

function NavBar() {
  const [showMenuIco, setShowMenuIco] = useState(false);

  const showToggle = () => {
    setShowMenuIco((prev) => !prev);
  };

  return (
    <header className="navbar">
      <h1 className="logo">Indtekina</h1>

      <nav className={showMenuIco ? "showMenu" : "hideMenu"}>
        <ul className="nav_links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li><Link to={"/services"}>Services</Link></li>
        </ul>
      </nav>

      <div className="hamBurg" onClick={showToggle}>
        <GiHamburgerMenu/>
      </div>
    </header>
  );
}

export default NavBar;
