import React from "react";
import "./About.css";
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About <span className="highlight">Me</span>
          </motion.h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="about-description">
              I'm a passionate undergraduate specializing in Information Technology at SLIIT University, currently working as a Software Engineering Intern at Lanka Tech Innovation (PVT) Ltd. I thrive on creating elegant solutions to complex problems and building seamless user experiences with modern technologies.
            </p>
            <p className="about-description">
              My approach combines technical expertise with creative problem-solving, always focusing on delivering clean, efficient, and maintainable code. I'm committed to continuous learning and staying at the forefront of industry trends.
            </p>
          </motion.div>

          <div className="about-details">
            <motion.div 
              className="education-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="section-header">
                <FaGraduationCap className="section-icon" />
                <h3 className="section-subtitle">Education</h3>
              </div>
              <ul className="info-list">
                <li>
                  <span className="info-title">BSc. (Hons) in Information Technology</span>
                  <span className="info-subtitle">SLIIT University (2022 - Present)</span>
                </li>
                <li>
                  <span className="info-title">Diploma in Information Technology</span>
                  <span className="info-subtitle">SIBA Campus (2019 - 2020)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="experience-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="section-header">
                <FaBriefcase className="section-icon" />
                <h3 className="section-subtitle">Experience</h3>
              </div>
              <ul className="info-list">
                <li>
                  <span className="info-title">Software Engineering Intern</span>
                  <span className="info-subtitle">Lanka Tech Innovation (PVT) Ltd (2025 - Present)</span>
                  <p className="info-description">
                    Developing web applications using modern frameworks, collaborating with cross-functional teams, and implementing responsive UI designs.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header">
              <FaCode className="section-icon" />
              <h3 className="section-subtitle">What I Do</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <FaLaptopCode className="skill-icon" />
                <h4 className="skill-title">Web Development</h4>
                <p className="skill-description">
                  Building responsive, performant web applications with modern frameworks and best practices.
                </p>
              </div>
              <div className="skill-card">
                <FaCode className="skill-icon" />
                <h4 className="skill-title">Clean Code</h4>
                <p className="skill-description">
                  Writing maintainable, efficient code with proper architecture and documentation.
                </p>
              </div>
              <div className="skill-card">
                <FaLaptopCode className="skill-icon" />
                <h4 className="skill-title">UI/UX Design</h4>
                <p className="skill-description">
                  Creating intuitive user interfaces with attention to accessibility and user experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;