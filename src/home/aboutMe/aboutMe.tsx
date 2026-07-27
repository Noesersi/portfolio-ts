import styles from '../aboutMe/AboutMe.module.css'
import Perfil from '../../assets/IMG-20200612-WA0021.jpg'
import React from 'react'
import { Section } from '../../components/Section/Section'
import CVicon from '../../assets/icons8-resume-48 (1).png'
import { CVlink, GithubLink, LinkedinLink } from '../../constants'


const AboutMe: React.FC = () => {
  return (
    <>
      <div className={styles.nameContainer}>
        <h1 className={styles.name} >Noé Ibáñez Torres</h1>
      </div>

      <Section title='Full Stack Developer'>
        <div className={styles.profilePic}>
          <img src={Perfil} alt="Profile photo" className={styles.profileImage} />
        </div>
        <div className={styles.description}>
          <p>
            I enjoy building products that people actually use.
          </p>
          <p>
            Over the past few years I've been working across the full software lifecycle, from designing new features and backend services to shipping mobile applications used daily by thousands of users. Today I lead the technical development of a React Native application, making architectural decisions, improving development workflows and helping the product evolve without losing sight of code quality and maintainability.
          </p>
          <p>
            What motivates me most is solving real problems, learning continuously and building software that remains simple, reliable and enjoyable to work on.
          </p>
        </div>


        <div className={styles.socialLinksContainer}>
          <a href={GithubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={LinkedinLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={CVlink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src={CVicon} alt="cv" className={styles.CVicon} />

          </a>
        </div>
      </Section >
    </>



  )
}

export default AboutMe
