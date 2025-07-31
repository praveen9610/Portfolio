import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Fruit Pulp Factory Management System",
      desc: "MERN stack factory operations app.",
    },
    {
      title: "Life Insurance Management System",
      desc: "PHP & JS system for claims & fraud detection.",
    },
    {
      title: "Online Medicine and Drug Ordering System",
      desc: "Java Servlets login system for online medicine orders.",
    },
    {
      title: "Mobile Applications",
      desc: "Games, note-taking, coffee shop with Android Studio & Kotlin.",
    },
    {
      title: "HomeStock - A Smart Home Inventory Management System",
      desc: "User Authentication with JWT auth and Role management.",
    }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
