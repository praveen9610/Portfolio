import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Praveen Perera</h3>
            <p>Full Stack Developer & IT Undergraduate</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="/resume.pdf" download><FaFileDownload /> Resume</a></li>
                <li><a href="https://github.com/praveen9610?tab=repositories" target="_blank" rel="noreferrer">Projects</a></li>
                <li><a href="https://blog.praveenperera.com" target="_blank" rel="noreferrer">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p>
              <FaEnvelope /> praveen.perera@example.com
            </p>
            <div className="social-links">
              <a href="https://github.com/praveen9610" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/praveen-perera-94467a246" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/praveen_dev" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Praveen Perera. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;