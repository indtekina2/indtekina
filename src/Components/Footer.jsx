import React from "react";
import "./FooterStyle.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footBar">
      <a
        href="https://github.com/indtekina2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.instagram.com/indtekina/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="icon" />
      </a>
      <a href="mailto:indtekina2@gmail.com">
        <MdEmail className="icon" />
      </a>
      <a
        href="https://linkedin.com/in/Add_this_In_Future"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
}

export default Footer;