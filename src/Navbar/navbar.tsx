import styles from '../Navbar/Navbar.module.css';
import React, { useState, useEffect } from 'react';
import Perfil from '../assets/IMG-20200612-WA0021.jpg'

const Navbar: React.FC = () => {
  const [showProfilePic, setShowProfilePic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowProfilePic(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg bg-dark fixed-top ${styles.navbar}`}>
      <div className="container-fluid">
          {showProfilePic ? 
            <img
              src={Perfil}
              alt="Profile"
              className={styles.profilePic}
            />
          : <div className={styles.profilePic}></div> }
        <button className="navbar-toggler bg-light ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#about-me">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#work">
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#my-projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#services">
                Services
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
