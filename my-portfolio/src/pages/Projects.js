import React from "react";
import "./Projects.css";
import { FaCode, FaServer, FaMobile, FaDatabase, FaJava, FaPhp, FaReact } from "react-icons/fa";
import { SiMongodb, SiKotlin, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Fruit Pulp Factory Management System",
      desc: "A comprehensive MERN stack application for managing factory operations, inventory, and production tracking with real-time analytics.",
      tech: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaServer />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiJavascript />, name: "JavaScript" }
      ],
      category: "full-stack"
    },
    {
      title: "Life Insurance Management System",
      desc: "PHP-based system with advanced claim processing and fraud detection algorithms, featuring automated document verification.",
      tech: [
        { icon: <FaPhp />, name: "PHP" },
        { icon: <FaDatabase />, name: "MySQL" },
        { icon: <SiJavascript />, name: "JavaScript" }
      ],
      category: "web"
    },
    {
      title: "Online Medicine and Drug Ordering System",
      desc: "Secure e-commerce platform for pharmaceutical products with prescription validation and delivery tracking.",
      tech: [
        { icon: <FaJava />, name: "Java" },
        { icon: <FaServer />, name: "Servlets" },
        { icon: <FaDatabase />, name: "SQL" }
      ],
      category: "web"
    },
    {
      title: "Mobile Applications Suite",
      desc: "Collection of Android applications including games, productivity tools, and retail solutions with offline capabilities.",
      tech: [
        { icon: <FaMobile />, name: "Android" },
        { icon: <SiKotlin />, name: "Kotlin" },
        { icon: <FaDatabase />, name: "Room DB" }
      ],
      category: "mobile"
    },
    {
      title: "HomeStock - Smart Inventory System",
      desc: "IoT-enabled home inventory management with barcode scanning, expiry alerts, and shopping list generation.",
      tech: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaServer />, name: "Node.js" },
        { icon: <FaCode />, name: "JWT Auth" }
      ],
      category: "iot"
    }
  ];

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span className="highlight">Projects</span>
          </motion.h2>
          <div className="section-divider"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A selection of my recent work across various domains
          </motion.p>
        </div>

        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              className={`project-card ${project.category}`}
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.category === 'full-stack' && <FaCode />}
                  {project.category === 'web' && <FaServer />}
                  {project.category === 'mobile' && <FaMobile />}
                  {project.category === 'iot' && <FaDatabase />}
                </div>
                <h3>{project.title}</h3>
              </div>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tech">
                <span className="tech-label">Technologies:</span>
                <div className="tech-icons">
                  {project.tech.map((tech, techIdx) => (
                    <div className="tech-icon" key={techIdx}>
                      {tech.icon}
                      <span className="tech-tooltip">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <button className="project-btn view-btn">View Details</button>
                <button className="project-btn code-btn">View Code</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;