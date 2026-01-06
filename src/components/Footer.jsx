import links from "../assets/links.json";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <ul>
                {links.map(item => (
                    <li key={item.label}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
