import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiJavascript, SiRedux, SiGraphql } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Home = () => {
  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiGraphql />, name: "GraphQL" }
  ];

  return (
    <section className="hero">
      {/* Background elements */}
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>
      <div className="particles"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <motion.p 
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="greeting-highlight">Hello, I'm</span>
          </motion.p>
          
          <motion.h1 
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>Praveen <span className="name-highlight">Perera</span></span>
          </motion.h1>
          
          <div className="animated-text">
            <motion.div
              className="animated-text-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="animated-text-track"
                animate={{ 
                  y: ['0%', '-100%', '-200%']
                }}
                transition={{ 
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {["Full Stack Developer", "UI/UX Enthusiast", "IT Undergraduate"].map((text, index) => (
                  <div key={index} className="animated-text-item">
                    <h2>{text}</h2>
                    <div className="animated-text-underline"></div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.p 
            className="bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            I create elegant, performant digital experiences using modern web technologies. 
            Currently pursuing my BSc in IT at SLIIT University while interning as a 
            Software Engineer.
          </motion.p>

          <div className="tech-stack">
            <div className="tech-stack-label">Tech Stack:</div>
            <div className="tech-icons">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  className="tech-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 1.6 + (index * 0.1)
                  }}
                  whileHover={{ y: -5 }}
                >
                  {tech.icon}
                  <span className="tech-tooltip">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="cta-buttons">
              <Link to ="/contact" className="hero-btn primary-btn">
                <span>Hire Me</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </Link>
              <Link to ="/projects" className="hero-btn secondary-btn">
                <span>View Work</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </Link>
            </div>
            
            <div className="social-links">
              <motion.a 
                href="https://github.com" 
                className="social-icon" 
                aria-label="GitHub"
                whileHover={{ y: -5 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                className="social-icon" 
                aria-label="LinkedIn"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                className="social-icon" 
                aria-label="Twitter"
                whileHover={{ y: -5 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <div className="profile-backdrop"></div>
            <div className="profile-glow"></div>
            <div className="profile-border"></div>
            <img 
              src="/praveen.png" 
              alt="Praveen Perera" 
              className="profile-image" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;