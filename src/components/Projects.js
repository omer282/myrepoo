import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Candy Crush (Console)',
    description: 'A console-based version of Candy Crush developed in C++.',
    logo: require('../assets/cpp.png'),
    alt: 'C++ Logo',
  },
  {
    name: 'Tic Tac Toe',
    description: 'Classic Tic Tac Toe game implemented in C++.',
    logo: require('../assets/cpp.png'),
    alt: 'C++ Logo',
  },
  {
    name: 'University Management System (OOP)',
    description: 'A university management system using object-oriented programming in C++.',
    logo: require('../assets/cpp.png'),
    alt: 'C++ Logo',
  },
  {
    name: 'GitHub Clone',
    description: 'A GitHub-like platform built using C++ data structures.',
    logo: require('../assets/cpp.png'),
    alt: 'C++ Logo',
  },
  {
    name: 'Pizza Website',
    description: 'A pizza ordering website using DBMS and SQL.',
    logo: require('../assets/sql.png'),
    alt: 'SQL Logo',
  },
  {
    name: 'Dictionary Desktop Application',
    description: 'A desktop dictionary application developed in Java.',
    logo: require('../assets/java.png'),
    alt: 'Java Logo',
  },
  {
    name: 'Hospital Management System',
    description: 'A hospital management system built with the MERN stack.',
    logo: require('../assets/mern.png'),
    alt: 'MERN Stack Logo',
  },
  {
    name: 'Freelance Platform',
    description: 'A freelance platform using the MERN stack (MongoDB, Express, React, Node.js).',
    logo: require('../assets/mern.png'),
    alt: 'MERN Stack Logo',
  },
  {
    name: 'English to Urdu Speech Recognition Picture Rotator',
    description: 'A Python application that recognizes English speech, translates it to Urdu, and rotates pictures accordingly.',
    logo: require('../assets/python.png'),
    alt: 'Python Logo',
  },
  {
    name: 'Weather Prediction',
    description: 'A Python project for predicting weather conditions using data analysis and machine learning.',
    logo: require('../assets/python.png'),
    alt: 'Python Logo',
  },
  {
    name: 'Web Automation',
    description: 'A Java application for automating web tasks and browser interactions.',
    logo: require('../assets/java.png'),
    alt: 'Java Logo',
  },
  {
    name: 'Tutor and Student Platform',
    description: 'A platform for tutors and students to connect, built using the MERN stack (MongoDB, Express, React, Node.js).',
    logo: require('../assets/mern.png'),
    alt: 'MERN Stack Logo',
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.logo} alt={project.alt} className="project-logo" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
