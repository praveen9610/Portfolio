import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <span className="logo-main">Praveen</span>
          <span className="logo-dot">.</span>
        </NavLink>

        <div className="nav-menu">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                
                <span className="link-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                
                <span className="link-text">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
              
                <span className="link-text">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                
                <span className="link-text">Projects</span>
              </NavLink>
            </li>
          </ul>

          <NavLink 
            to="/contact" 
            className="contact-btn"
          >
            <FiMail className="contact-icon" />
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;