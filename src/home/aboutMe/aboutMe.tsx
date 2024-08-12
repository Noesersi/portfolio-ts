import styles from '../aboutMe/AboutMe.module.css'
import Perfil from '../../assets/IMG-20200612-WA0021.jpg'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Section } from '../../components/Section/Section'

const AboutMe: React.FC = () => {
  return (
    <>
      <div className={styles.nameContainer}>
        <h1 className={styles.name} >Noé Ibáñez Torres</h1>
      </div>

      <Section title='Full Stack Developer'>
        <div className={styles.profilePic}>
          <img src={Perfil} alt="Foto de perfil" className={styles.profileImage} />
        </div>
        <div className={styles.description}>
          <p>
            <RoughNotation type="underline" color="black" padding={0} show={true}>
              Results-driven
            </RoughNotation>{' '}
            Full Stack Developer with a passion for technology, specialized in crafting impactful projects by using a full stack approach and technologies such as{' '}
            <RoughNotation type="circle" color="black" padding={3} show={true}>
              JavaScript
            </RoughNotation> and{' '}
            <RoughNotation type="circle" color="black" padding={4} show={true}>
              Python
            </RoughNotation>.
          </p>
          <p>
            I am particularly enthusiastic about{' '}
            <RoughNotation type='highlight' color='violet' multiline={true} show={true}>
              clean coding practices
            </RoughNotation>, ensuring that my code is not only functional but also maintainable and easy to understand.
          </p>
          <p>
            Currently, I work as a {' '}
            <RoughNotation type="highlight" color="lightblue" multiline={true} padding={2} show={true}>
              Mobile App Full Stack Developer
            </RoughNotation> {' '}
            at Bubbo, using technologies such as React Native Expo and AWS.
          </p>
          <p>
            Additionally, I am a{' '}
            <RoughNotation type="highlight" color="lightblue" multiline={true} padding={2} show={true}>
              Full Stack Developer Teacher Assistant and Mentor
            </RoughNotation>{' '}
            at 4 Geeks Academy, where I assist new developers taking their first steps in the programming world.
          </p>
        </div>


        <div className={styles.socialLinksContainer}>
          <a href="https://github.com/noesersi" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/noesersi" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://drive.google.com/file/d/1AZQnUv31eOS4NNU25fgGhdRM8n1UZfQJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <i className="fa-regular fa-file"></i> CV
          </a>
        </div>
      </Section >
    </>



  )
}

export default AboutMe