import React from "react";
import "./Skills.css";
import { FaGraduationCap, FaCode, FaGlobe, FaDatabase, FaMobileAlt, FaPaintBrush, FaLayerGroup, FaTools, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  // Skill data organized for better maintainability
  const skillsData = {
    programming: ["Java", "C++", "C", "Python", "PHP", "JavaScript"],
    client_side: ["React JS", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
    server_side: [ "Node JS", "Express.js"],
    databases: ["MongoDB", "MySQL", "Firestore", "SQLite"],
    mobile: ["Android Studio"],
    Tools: ["Kotlin", "VS Code", "Postman", "GitHub"],
    design: ["Figma", "Mockflow", "Adobe XD", "Photoshop"]
  };

  // Skill proficiency levels (for visualization)
  const proficiencyLevels = {
    Java: 85,
    "C++": 80,
    "C": 75,
    Python: 90,
    PHP: 70,
    JavaScript: 85,
    "React JS": 90,
    "HTML/CSS": 95,
    Bootstrap: 85,
    "Tailwind CSS": 80,
    "Node JS": 80,
    "Express.js": 75,
    MongoDB: 75,
    MySQL: 80,
    Firebase: 70,
    SQLite: 65,
    "Android Studio": 75,
    Kotlin: 70,
    "VS Code": 95,
    Postman: 85,
    GitHub: 90,
    Figma: 80,
    Mockflow: 70,
    "Adobe XD": 65,
    Photoshop: 60
  };

  return (
    <div className="skills-page">
      {/* Background elements */}
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>
      <div className="particles"></div>

      {/* Education Section */}
      <section className="education-section">
        <div className="section-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaGraduationCap /> Education
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My academic journey and qualifications
          </motion.p>
        </div>

        <motion.div 
          className="education-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="education-card">
            <div className="education-logo">
              <img src="/SLIIT_Logo.png" alt="SLIIT Logo" />
            </div>
            <div className="education-details">
              <h2>BSc (Hons) in Information Technology</h2>
              <p className="institution">SLIIT | Sri Lanka Institute of Information Technology</p>
              <div className="education-meta">
                <span><i className="fas fa-calendar-alt"></i> Expected 2026</span>
                <span><i className="fas fa-clock"></i> 3/4 Years Completed</span>
              </div>
              <div className="progress-container">
                <div className="progress-track">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(7/8)*100}%` }}
                    data-progress={`${Math.round((6/8)*100)}%`}
                  ></div>
                </div>
                <div className="progress-text">
                  <span>Year 4 Semester 1</span>
                  <span>{Math.round((6/8)*100)}% Completed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCode /> Technical Skills
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies I work with and my proficiency levels
          </motion.p>
        </div>

        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Programming Languages */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaCode /> Programming Languages
            </h2>
            <div className="skills-list">
              {skillsData.programming.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/*Client-Side Technologies */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaGlobe /> Client-Side Technologies
            </h2>
            <div className="skills-list">
              {skillsData.client_side.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

           {/* Server-Side Technologies */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaServer /> Server-Side Technologies
            </h2>
            <div className="skills-list">
              {skillsData.server_side.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaDatabase /> Databases
            </h2>
            <div className="skills-list">
              {skillsData.databases.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaMobileAlt /> Mobile Applications
            </h2>
            <div className="skills-list">
              {skillsData.mobile.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div> 

           {/* Tools */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaTools /> Tools
            </h2>
            <div className="skills-list">
              {skillsData.Tools.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Design Technologies */}
          <motion.div 
            className="skill-category"
            whileHover={{ y: -5 }}
          >
            <h2>
              <FaPaintBrush /> Design
            </h2>
            <div className="skills-list">
              {skillsData.design.map(skill => (
                <div className="skill-item" key={skill}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                    <span className="skill-level">{proficiencyLevels[skill]}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${proficiencyLevels[skill]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Skills Summary</h3>
          <div className="summary-grid">
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaCode />
              </div>
              <div className="summary-content">
                <h4>5+</h4>
                <p>Programming Languages</p>
              </div>
            </motion.div>
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaGlobe />
              </div>
              <div className="summary-content">
                <h4>4+</h4>
                <p>Client-Side Technologies</p>
              </div>
            </motion.div>
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaServer />
              </div>
              <div className="summary-content">
                <h4>2+</h4>
                <p>Server-Side Technologies</p>
              </div>
            </motion.div>
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaDatabase />
              </div>
              <div className="summary-content">
                <h4>4+</h4>
                <p>Database Systems</p>
              </div>
            </motion.div>
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaMobileAlt />
              </div>
              <div className="summary-content">
                <h4>1+</h4>
                <p>Mobile Applications</p>
              </div>
            </motion.div>
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaTools />
              </div>
              <div className="summary-content">
                <h4>4+</h4>
                <p>Tools</p>
              </div>
            </motion.div>
            <motion.div 
              className="summary-item"
              whileHover={{ y: -5 }}
            >
              <div className="summary-icon">
                <FaPaintBrush />
              </div>
              <div className="summary-content">
                <h4>4+</h4>
                <p>Design</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;