import styles from '../aboutMe/AboutMe.module.css'
import Perfil from '../../assets/IMG-20200612-WA0021.jpg'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.profileContainer}>
        <h1 className={styles.name} >Noé Ibáñez Torres</h1>
        <h5 className={styles.profession}>Full Stack Developer</h5>
        <img src={Perfil} alt="Foto de perfil" className={styles.profileImage} />
        <div className={styles.description}>
          <p>
            Results-driven{' '}<RoughNotation type="underline" color="black" show={true}>Full Stack Developer</RoughNotation> with a passion for technology, specialized in crafting impactful projects by using a full stack approach and technologies such as{' '}
            <RoughNotation type="circle" color="black" show={true}>
              JavaScript
            </RoughNotation> and{' '}
            <RoughNotation type="circle" color="black" show={true}>
              Python
            </RoughNotation>.</p> <p> I am particularly enthusiastic about{' '}
            <RoughNotation type='highlight' color='yellow' show={true}>clean coding practices</RoughNotation>, ensuring that my code is not only functional but also maintainable and easy to understand.
          </p>
        </div>

      </div>

      <div className={styles.socialLinksContainer}>
        <a href="https://github.com/noesersi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com/in/noesersi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://drive.google.com/file/d/1porBwjV63w2WQGrEtcm-m17lL-PkpdRe/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-file"></i> CV</a>

      </div>
    </div>
  )
}

export default AboutMe