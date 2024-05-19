import MyResume from "../assets/pdfs/MauryHughesResume.pdf";
import { useState, useEffect } from "react";

export default function Resume() {
  const [prettyLayout, setPrettyLayout] = useState(window.innerWidth > 767);
  useEffect(() => {
    const handleResize = () => {
      setPrettyLayout(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12">
          <h2>Resume</h2>
          <ul>
            <li className="pt-3 fs-5 fw-bold text-decoration-underline pb-5">
              <a id="resume" href={MyResume} download>
                Download my resume
              </a>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <h3>Skills</h3>
          <h4 className="py-2">Professional</h4>
          <ul className="pb-3">
            <li>Communication</li>
            <li>Active Listening</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
            <li>Soft Skills</li>
            <li>Empathy</li>
            <li>Project Management</li>
            <li>Time Management</li>
          </ul>
          <h4 className="pb-2">Front-end</h4>
          <ul className="pb-3">
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
          <h4 className="pb-2">Back-end</h4>
          <ul className="pb-3">
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
            <li>GraphQL</li>
          </ul>
        </div>
        <div className={prettyLayout ? "col" : ""}>
          <h3 className="pb-2">Unique Value</h3>
          <p className="paragraph">
            I think there is a lot of value in being part of a team and someone
            that others can look to for help or even confide in. By being able
            to help others increases my motivation and overall positivity. I
            greatly feel that communication is extremely beneficial for a great
            work environment and for morale of everybody. I like being able to
            go into my workplace to help and support those around me. I know
            that by doing that I am creating a place that is more comfortable
            for me, as well as those I work with. I feel like I have been gifted
            with an ability to adapt to multiple variations of people and
            situations, likely because I like to stay positive and spread that
            positivity to others.
          </p>
          <p className="paragraph">
            Some things that I have always liked about myself, which have made
            integration and adaptivity to most any situation possible, are:
            being a fast learner, having a thirst for knowledge and being
            inquisitive. I have found that these traits give me my growth
            mindset and kept me extremely motivated. As long as I have more I
            can grow, I stay happy in a work environment. Finally, my attention
            to detail and thoroughness has really helped me in satisfaction in
            the time and effort I have put into whatever it is that I am doing.
          </p>
          <p className="paragraph">
            Through these practices, I&#39;ve noticed that people see me as a
            leader. I am hopeful that is truly the case so that we can all grow
            and improve together. I look forward to continuing to grow and
            expand my programming knowledge. I&#39;m excited about the
            possibilities ahead. Thank you for considering my contributions.
          </p>
        </div>
      </div>
    </div>
  );
}
