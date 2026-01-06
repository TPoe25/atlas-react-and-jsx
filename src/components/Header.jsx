import Greeting from "./Greeting.jsx";
import SocialLinks from "./SocialLinks.jsx";

function Header() {
  return (
    <header className="header">
      <Greeting />
      <SocialLinks />
    </header>
  );
}

export default Header;
