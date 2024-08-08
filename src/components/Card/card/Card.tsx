import React from 'react'
import styles from './Card.module.css'
import github from '../../../assets/github.png'
import websiteLogo from '../../../assets/websiteLogo.png'

interface CardProps {
  title: string
  technologies: string[]
  image?: string
  description?: string
  githubLink?: string
  websiteLink?: string
}

const Card: React.FC<CardProps> = ({
  title,
  technologies,
  image,
  description,
  githubLink,
  websiteLink
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
      <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.technologiesBox}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.cardTechnologies}>
              {tech}
            </span>
          ))}
        </div>
      </div> <div className={styles.cardLinks}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={github} width="24px" height="24px" />
        </a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          <img src={websiteLogo} width="24px" height="24px" />
        </a>
      </div>
    </div>
  )
}

export default Card
