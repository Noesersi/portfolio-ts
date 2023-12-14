import styles from '../Navbar/Navbar.module.css'
const Navbar: React.FC = () => {
  return (
    <header >
      <nav >
        <div className={styles.navbar}>
          <a href="#about-me" className={styles.link}>
            <span className={styles.firstLetter}>A</span>bout me
          </a>
          <a href="#my-projects" className={styles.link}>
            <span className={styles.firstLetter}>M</span>y projects
          </a>
          <a href="#services" className={styles.link}>
            <span className={styles.firstLetter}>S</span>ervices
          </a>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
