import MyResume from '../assets/MauryHughesResume.pdf';

export default function Resume() {
  return (
    <div className="container pt-4">
      <h2>Resume</h2>
      <p>Download my
      <a href={MyResume} download> resume</a>
      </p>
      <h3>Skills</h3>
      <h4>Front-end</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
        <li>Git</li>
        <li>Browser Developer Tools</li>
        <li>Web APIs</li>
        <li>Third-Party APIs</li>
        <li>Server-Side APIs</li>
      </ul>
      <h4>Back-end</h4>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>Progressive Web Applications (PWA)</li>
        <li>Model-View-Controller (MVC)</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Object-Relational Mapping (ORM)</li>
        <li>MERN</li>
        <li>State</li>
        <li>NoSQL (MongoDB)</li>
        <li>SQL (PostgreSQL)</li>
      </ul>
    </div>
  );
}
