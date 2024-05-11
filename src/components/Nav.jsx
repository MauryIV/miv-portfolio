import { Link } from 'react-router-dom';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
