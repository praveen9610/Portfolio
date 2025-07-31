import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      {/* Background elements matching Home page */}
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>
      
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'd love to hear from you! Feel free to reach out.
        </motion.p>
      </div>

      <motion.div 
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Information */}
        <div className="contact-info">
          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:geethanjanaperera02@gmail.com">geethanjanaperera02@gmail.com</a>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-icon">
              <FaLinkedin />
            </div>
            <div className="info-content">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/praveen-perera-94467a246" target="_blank" rel="noreferrer">
                linkedin.com/in/praveen-perera
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-icon">
              <FaGithub />
            </div>
            <div className="info-content">
              <h3>GitHub</h3>
              <a href="https://github.com/praveen9610" target="_blank" rel="noreferrer">
                github.com/praveen9610
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <a href="tel:+94771234567">+94 77 123 4567</a>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>Colombo, Sri Lanka</p>
            </div>
          </motion.div>
        </div>

      
      </motion.div>
    </section>
  );
};

export default Contact;