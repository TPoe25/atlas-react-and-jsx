import React from "react";
import "./SocialLinks.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/tpoe25/" target="src/assets/linkedin.svg" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/TPoe25/atlas-react-and-jsx" target="src/assets/github.svg" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
