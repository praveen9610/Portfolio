import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Praveen Perera. All rights reserved.</p>
      <div className="footer-socials">
        <a href="https://github.com/praveen9610" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/praveen-perera-94467a246" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;