import githubLogo from "../assets/svgs/github-mark.svg";
import steamcode from "../assets/images/steamcode.jpg";
import codeinspace from "../assets/images/codeinspace.jpg";
import comp from "../assets/images/comp.jpg";
import desk from "../assets/images/desk.jpg";
import spaceback from "../assets/images/spaceback.jpg";
import office from "../assets/images/office.jpg";

const projects = [
  {
    name: "IV Social Connection",
    description: "NoSQL social network",
    image: desk,
    githubLink: "https://github.com/MauryIV/iv-social-connection",
    projectLink:
      "https://drive.google.com/file/d/1mio7n9t3i4weeP8Lkux43gO3ZZOJnE-7/view",
  },
  {
    name: "Procrastinot",
    description: "A time manager web application",
    image: codeinspace,
    githubLink: "https://github.com/MauryIV/procrastinot",
    projectLink: "https://procrastinot.onrender.com",
  },
  {
    name: "MVC Tech Blog",
    description: "PostgreSQL MVC Blog",
    image: office,
    githubLink: "https://github.com/MauryIV/mvc-tech-blog",
    projectLink: "https://mvc-tech-blog-p2ap.onrender.com",
  },
  {
    name: "Note Taker",
    description: "Simple web app for taking notes",
    image: comp,
    githubLink: "https://github.com/MauryIV/note-taker",
    projectLink: "https://note-taker-f38a.onrender.com",
  },
  {
    name: "SVG Generator",
    description: "Description of Project 1",
    image: spaceback,
    githubLink: "https://github.com/MauryIV/logo-generator",
    projectLink:
      "https://drive.google.com/file/d/1qBPkcFXRKSATATdJG3rh7ZiRNE29CCj6/view",
  },
  {
    name: "ReadMe Generator",
    description: "My portfolio with contact info",
    image: steamcode,
    githubLink: "https://github.com/MauryIV/readme-generator",
    projectLink:
      "https://drive.google.com/file/d/1mXW7Jh0GVSyPllepBFKyu7zdTiVCwrPw/view",
  },
];

export default function Portfolio() {
  return (
    <div className="container pt-4">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 position-relative">
              <a
                className="hoverBox"
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="portImage"
                  src={project.image}
                  alt={project.name}
                />
                <div className="card-body text-light position-absolute top-0 start-0 w-100 p-2 d-flex justify-content-between">
                  <h4 className="align-self-start">{project.name}</h4>
                  <a href={project.githubLink} target="_blank">
                    <img
                      src={githubLogo}
                      className="logo github portGithub"
                      alt="Github logo"
                    />
                  </a>
                  <p className="position-absolute top-50 start-0 p-2">{project.description}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
