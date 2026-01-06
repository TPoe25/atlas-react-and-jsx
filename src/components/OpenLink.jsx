import openIcon from "../assets/open.svg";

const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={openIcon} alt="Open external link" />
    </a>
  );
};

export default OpenLink;
