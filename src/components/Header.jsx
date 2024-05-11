import { Link } from 'react-router-dom';

export default function Header() {
  const links=[
    <Link key={1} className="nav-link text-light" to="/">
      About Me
    </Link>,
    <Link key={2} className="nav-link text-light" to="/portfolio">
      Portfolio
    </Link>,
    <Link key={2} className="nav-link text-light" to="/resume">
      Resume
    </Link>,
    <Link key={2} className="nav-link text-light" to="/contact">
      Contact Me
    </Link>,
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1 className="flex-grow-1">Maury Hughes IV</h1>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
