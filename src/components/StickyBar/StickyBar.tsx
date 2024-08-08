import React from 'react';
import styles from './StickyBar.module.css';

const StickyBar: React.FC = () => {
 
  return (
    <div className={styles.stickyContainer}>
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
            <i className="fa-regular fa-file"></i> CV
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
    </div>
  );
};

export default StickyBar;
