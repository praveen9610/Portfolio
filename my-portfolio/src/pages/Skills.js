import React from "react";
import "./Skills.css"; // use this for both sections

const Skills = () => {
  return (
    <div>
      {/* Education Section */}
      <section className="education">
        <div className="education-header">
          <h1>Education</h1>
          <p>Here are my educational qualifications and certifications.</p>
        </div>

        <div className="education-container">
          <div className="education-item">
            <div className="education-logo-container">
              <img
                src="/SLIIT_Logo.png"
                alt="SLIIT Logo"
                className="education-logo"
              />
            </div>
            <div className="education-info">
              <h2>BSc (Hons) in Information Technology</h2>
              <p className="specialization">
                Specializing in Information Technology
              </p>
              <p>
                <strong>Institution:</strong> SLIIT | Sri Lanka Institute of
                Information Technology
              </p>
              <p>
                <strong>Expected Graduation:</strong> 2026
              </p>
              <p>
                <strong>Progress:</strong> 2 semesters out of 4 years completed
              </p>
            </div>
          </div>
        </div>

        {/* Bar chart for education progress */}
        <div className="progress-bar-container">
          <p>My Degree Progress</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
          <p className="progress-label">75% Completed</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-header">
          <h1>
            <i className="fas fa-code"></i> My Skills
          </h1>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <h2>
              <i className="fas fa-laptop-code"></i> Programming Languages
            </h2>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Java
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> C++
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> C
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Python
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> PHP
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> JavaScript
              </div>
            </div>
          </div>

          <div className="skill-card">
            <h2>
              <i className="fas fa-globe"></i> Web Development
            </h2>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> React JS
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> HTML/CSS
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Node JS
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Express.js
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Bootstrap
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Tailwind CSS
              </div>
            </div>
          </div>

          <div className="skill-card">
            <h2>
              <i className="fas fa-database"></i> Databases
            </h2>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> MongoDB
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> MySQL
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Firebase
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> SQLite
              </div>
            </div>
          </div>

          <div className="skill-card">
            <h2>
              <i className="fab fa-android"></i> Mobile & Tools
            </h2>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Android Studio
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Kotlin
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> VS Code
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Postman
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> GitHub
              </div>
            </div>
          </div>

          <div className="skill-card">
            <h2>
              <i className="fas fa-paint-brush"></i> Design Technologies
            </h2>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Figma
              </div>
              <div className="skill-item">
                <span className="skill-checkbox">✅</span> Mockflow
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
