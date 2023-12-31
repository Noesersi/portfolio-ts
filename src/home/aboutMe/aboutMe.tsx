import styles from '../aboutMe/AboutMe.module.css'
import Perfil from '../../assets/IMG-20200612-WA0021.jpg'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.profileContainer}>
        <h1 className={styles.name} >Noé Ibáñez Torres</h1>
        <h5 className={styles.profession}><RoughNotation type='bracket' color='black' brackets={['left', 'right']} show={true}>Full Stack Developer</RoughNotation></h5>
        <img src={Perfil} alt="Foto de perfil" className={styles.profileImage} />
        <div className={styles.description}>
          <p>
          <RoughNotation type="underline" color="black" padding={0} show={true}>Results-driven</RoughNotation>{' '}Full Stack Developer with a passion for technology, specialized in crafting impactful projects by using a full stack approach and technologies such as{' '}
            <RoughNotation type="circle" color="black" padding={3} show={true}>
              JavaScript
            </RoughNotation> and{' '}
            <RoughNotation type="circle" color="black" padding={4} show={true}>
              Python
            </RoughNotation>.</p> <p> I am particularly enthusiastic about{' '}
            <RoughNotation type='highlight' color='yellow' multiline={true} show={true}>clean coding practices</RoughNotation>, ensuring that my code is not only functional but also maintainable and easy to understand.
          </p>
        </div>

      </div>

      <div className={styles.socialLinksContainer}>
        <a href="https://github.com/noesersi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com/in/noesersi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://drive.google.com/file/d/19DPfLYW2xSuzLXBiH-kHigHGgeGr4MDY/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-file"></i> CV</a>

      </div>
    </div>
  )
}

export default AboutMe