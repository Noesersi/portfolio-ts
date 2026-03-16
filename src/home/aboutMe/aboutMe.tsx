import styles from '../aboutMe/AboutMe.module.css'
import Perfil from '../../assets/IMG-20200612-WA0021.jpg'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'
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
            <RoughNotation type="underline" color="black" padding={0} show={true}>
              Product-oriented
            </RoughNotation>{' '}
            Full Stack Developer passionate about transforming ideas into{' '}
            <RoughNotation type="underline" color="black" padding={0} show={true}>
              concrete web & mobile applications
            </RoughNotation>.
          </p>
          <p>
            I design comprehensive solutions from{' '}
            <RoughNotation type='highlight' color='lightblue' multiline={true} show={true}>
              business logic
            </RoughNotation>{' '}
            to{' '}
            <RoughNotation type='highlight' color='lightblue' multiline={true} show={true}>
              user experience
            </RoughNotation>, with special focus on scalability, best practices and{' '}
            <RoughNotation type="box" color="black" padding={2} show={true}>
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>code quality</span>
            </RoughNotation>.
          </p>
          <p>
            <RoughNotation type="highlight" color="#c3e88d" multiline={true} show={true}>
              Curious self-taught developer
            </RoughNotation>{' '}
            constantly learning new technologies and improving my approach to{' '}
            <RoughNotation type="underline" color="black" show={true}>
              product development
            </RoughNotation>.
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