import React, { useState } from 'react';
import styles from './StickyBar.module.css';
import CVicon from '../../assets/icons8-resume-48.png'

const StickyBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleStickyBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.stickyContainer} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleButton} onClick={toggleStickyBar}>
        {isOpen ? <i className="fa-solid fa-chevron-left"></i> : <i className="fa-solid fa-chevron-right"></i>}
      </button>
      {isOpen && (
        <ul className={styles.stickyList}>
          <li>
            <a
              href="https://github.com/noesersi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/noesersi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1AZQnUv31eOS4NNU25fgGhdRM8n1UZfQJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
        <img src={CVicon} alt="cv" className={styles.CVicon} />

            </a>
          </li>
          <li>
            <a
              href="mailto:noesersi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default StickyBar;
