import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    <Link key={1} className="nav-link page page--active" to="/">
      About Me
    </Link>,
    <Link key={2} className="nav-link page page--active" to="/portfolio">
      Portfolio
    </Link>,
    <Link key={3} className="nav-link page page--active" to="/resume">
      Resume
    </Link>,
    <Link key={4} className="nav-link page page--active" to="/contact">
      Contact Me
    </Link>,
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1 className="flex-grow-1" id="nameTitle">
          Maury Hughes IV
        </h1>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.key} className="nav-item">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
