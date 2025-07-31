import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hello,</p>
        <h1>I'm <span>Praveen Perera</span></h1>
        <h2>Full Statck Developer</h2>
        <p>I'm a passionate undergraduate specializing in Information Technology at SLIIT University, building stunning and efficient web and mobile applications.</p>
        <a href="#contact" className="hero-btn">Hire Me</a>
      </div>

      <div className="hero-image">
        <img src="/Profile.png" alt="Praveen" />
      </div>
    </section>
  );
};

export default Home;