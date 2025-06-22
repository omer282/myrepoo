import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Data Science Enthusiast',
  'UI/UX Explorer',
  'Problem Solver'
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const intervalRef = useRef();
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    setDisplayedRole('');
    const type = () => {
      if (charIndex <= roles[roleIndex].length) {
        setDisplayedRole(roles[roleIndex].slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
        return;
      }
    };
    intervalRef.current = setInterval(type, 70);
    return () => clearInterval(intervalRef.current);
  }, [roleIndex]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`home ${visible ? 'fade-in' : ''}`} id="home" ref={sectionRef}>
      <div className="home-content">
        <h2>Hello, I am</h2>
        <h1>M Umar Raza</h1>
        <h3><span className="typewriter">{displayedRole}</span></h3>
        <p>Passionate about building scalable applications and solving real-world problems through code.</p>
        <a className="btn-accent" href="#about">About Me</a>
      </div>
      <div className="home-image">
        <img src={process.env.PUBLIC_URL + '/IMG.jpg'} alt="Umar Raza" className="profile-pic" />
      </div>
    </section>
  );
}

export default Home;
