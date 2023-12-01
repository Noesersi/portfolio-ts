import styles from '../aboutMe/AboutMe.module.css'
import Perfil from '../../assets/IMG-20200612-WA0021.jpg'

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.profileContainer}>
        <img src={Perfil} alt="Foto de perfil" className={styles.profileImage} />
        <p className={styles.description}>
          Results-driven Full Stack Developer with a passion for technology, specialized in crafting impactful projects by using a full stack approach and
          technologies such as JavaScript and Python. Immediate availability for full-time work.
        </p>
      </div>

      <div className={styles.socialLinksContainer}>
        <a href="https://github.com/noesersi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/noesersi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">CV</a>

      </div>
    </div>
  )
}

export default AboutMe