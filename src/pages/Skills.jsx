import MyResume from "../assets/pdfs/MauryHughesResume.pdf";
import MyTechResume from "../assets/pdfs/MauryHughesTechnicalResume.pdf";
import { useState, useEffect } from "react";

export default function Skills() {
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
        <div className="col-auto">
          <h2>Skills</h2>
          <h4 className="py-2">Professional</h4>
          <ul className="pb-3">
            {[
              "Communication",
              "Active Listening",
              "Problem Solving",
              "Leadership",
              "Soft Skills",
              "Empathy",
              "Project Management",
              "Time Management",
            ].map((skill, index) => (
              <li
                key={index}
                className={`skill-item fall-in`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
          <h4 className="pb-2">Front-end</h4>
          <ul className="pb-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Bootstrap",
              "Bulma",
              "Git",
              "Browser Developer Tools",
              "Web APIs",
              "Third-Party APIs",
              "Server-Side APIs",
            ].map((skill, index) => (
              <li
                key={index}
                className={`skill-item fly-in-bottom-left`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
          <h4 className="pb-2">Back-end</h4>
          <ul className="pb-3">
            {[
              "Node.js",
              "Express.js",
              "Progressive Web Applications (PWA)",
              "Model-View-Controller (MVC)",
              "Object-Oriented Programming (OOP)",
              "Object-Relational Mapping (ORM)",
              "MERN",
              "State",
              "NoSQL (MongoDB)",
              "SQL (PostgreSQL)",
              "GraphQL",
            ].map((skill, index) => (
              <li
                key={index}
                className={`skill-item fly-in-bottom-right`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className={prettyLayout ? "col" : ""}>
          <h2>Resume</h2>
          <ul>
            <li className="pt-3 fs-5 fw-bold text-decoration-underline resume-item">
              <a className="resume" href={MyTechResume} download>
                Download my technical resume
              </a>
            </li>
            <li className="pt-3 fs-5 fw-bold text-decoration-underline pb-4 resume-item">
              <a className="resume" href={MyResume} download>
                Download my resume
              </a>
            </li>
          </ul>
          <h3 className="pb-2">Unique Value</h3>
          {[
            "I think there is a lot of value in being part of a team and someone that others can look to for help or even confide in. Being able to help others increases my motivation and overall positivity. I feel that communication is extremely beneficial for a great work environment and for morale of everybody. I like being able to go into my workplace to help and support those around me. I know by doing this, I am creating a place that is more comfortable for me, as well as those I work with. I feel like I have been gifted with an ability to adapt to a variety of people and situations, likely because I like to stay positive and spread that positivity to others.",
            "Some things that I have always liked about myself, which have made integration and adaptivity to most any situation possible, are: being a fast learner, having a thirst for knowledge, and being inquisitive. I have found that these traits have allowed my growth mindset to develop, and encouraged me to stay motivated. As long as I have more to learn, I stay happy in a work environment. Finally, I have found great satisfaction in pouring my attention to detail and thoroughness into whatever it is that I am doing.",
            "Through my experiences and challenges I have faced, I see how we all improve and grow together. I look forward to continuing to expand my programming knowledge. I'm excited about the possibilities ahead. Thank you for considering my contributions.",
          ].map((paragraph, index) => (
            <p
              key={index}
              className="paragraph fade-in"
              style={{ animationDelay: `${index * 2}s` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
