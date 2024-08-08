import styles from '../Navbar/Navbar.module.css'
const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar} >
      <a href="#about-me" className={styles.link}>
        About me
      </a>
      <a href="#work" className={styles.link}>
        Work
      </a>
      <a href="#my-projects" className={styles.link}>
        My projects
      </a>
      <a href="#services" className={styles.link}>
        Services
      </a>
    </header>
  )
}

export default Navbar
