import react from 'react';
import 'src/asset/header.jsx';
import './Header.css';
import SocialLinks from './SocialLinks.jsx';
import Greeting from './Greeting.jsx';

const Header = () => {
  return (
    <header className="header">
        <h1>Welcome to Atlas!</h1>
        <Greeting />
        <SocialLinks />
    </header>
    );
};
const App = () => { return <Header />; }
export default App;
