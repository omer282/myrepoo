import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiHaskell, SiCplusplus, SiFigma, SiCanva } from 'react-icons/si';

// Custom SVG for C#
const CSharpIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#239120"/>
    <text x="16" y="21" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#fff" fontFamily="Arial">C#</text>
  </svg>
);

const skillIcons = [
  { icon: <FaHtml5 title="HTML5" style={{ color: '#e34c26' }} />, name: 'HTML5' },
  { icon: <FaCss3Alt title="CSS3" style={{ color: '#1572b6' }} />, name: 'CSS3' },
  { icon: <FaJs title="JavaScript" style={{ color: '#f7e018' }} />, name: 'JavaScript' },
  { icon: <FaReact title="React" style={{ color: '#61dafb' }} />, name: 'React' },
  { icon: <FaNodeJs title="Node.js" style={{ color: '#3c873a' }} />, name: 'Node.js' },
  { icon: <SiMongodb title="MongoDB" style={{ color: '#47a248' }} />, name: 'MongoDB' },
  { icon: <FaPython title="Python" style={{ color: '#3776ab' }} />, name: 'Python' },
  { icon: <FaJava title="Java" style={{ color: '#f89820' }} />, name: 'Java' },
  { icon: <SiHaskell title="Haskell" style={{ color: '#5e5086' }} />, name: 'Haskell' },
  { icon: <SiCplusplus title="C++" style={{ color: '#00599c' }} />, name: 'C++' },
  { icon: <CSharpIcon />, name: 'C#' },
  { icon: <FaDatabase title="SQL" style={{ color: '#00758f' }} />, name: 'SQL' },
  { icon: <SiFigma title="Figma" style={{ color: '#a259ff' }} />, name: 'Figma' },
  { icon: <SiCanva title="Canva" style={{ color: '#00c4cc' }} />, name: 'Canva' },
];

function Skills() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`skills ${visible ? 'fade-in' : ''}`} id="skills" ref={sectionRef}>
      <h2>Technical Skills</h2>
      <div className="skills-icons-row">
        {skillIcons.map((s, i) => (
          <div className="skill-icon-card" key={s.name} style={{ animationDelay: `${i * 0.08 + 0.1}s` }}>
            {s.icon}
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    
    </section>
  );
}

export default Skills;
