import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/tpoe25/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/TPoe25/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;
