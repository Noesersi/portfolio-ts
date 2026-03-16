import React from 'react';
import { Section } from "../../components/Section/Section";
import styles from './WorkSection.module.css';
import BubboLogo from '../../assets/bubboIcon.png'; 
import ForGeeks from '../../assets/4geeks.jpg';
import EsteticalLogo from '../../assets/imago.png';

const cardsContent = [
   
    {
        title: "Estetical",
        position: "Mobile & Web Developer",
        duration: "2024-Present",
        description: `Developing a SaaS platform for beauty centers. Key responsibilities include:
        \n• React Native mobile apps & React web dashboard.
        \n• Node.js backend with Firebase and Google Cloud.
        \n• CI/CD, product decisions, and performance optimization.`,
        image: EsteticalLogo,
        website: "https://estetical.es"
    },
     {
        title: "Bubbo",
        position: "Full Stack Developer",
        duration: "12/2023-9/2024", 
        description: `Developed and maintained the BubboApp (audiovisiual recommendation platform), focusing on:
        \n• Creating smooth and engaging user experiences with React Native Expo.
        \n• Connecting the entire system using AWS Amplify to ensure scalability and efficiency.
        \n• Implementing a CI/CD system, including end-to-end testing with Detox, to maintain high quality.`,
        image: BubboLogo,
        website: "https://bubbo.app"
    },
    {
        title: "4Geeks Academy España",
        position: "Senior F/S Mentor",
        duration: "12/2023-9/2024", 
        description: `Mentored 50+ students in Full Stack development, covering:
        \n• React, TypeScript and Python fundamentals.
        \n• Conducting code reviews and providing architectural guidance for projects.
        \n• Preparing students for technical interviews through comprehensive prep sessions.
        \n• Developing internal teaching materials and exercises to enhance the learning experience.`,
        image: ForGeeks,
        website: "https://4geeksacademy.com"
    }
];

export const WorkSection: React.FC = () => {
    return (
        <Section title="Professional Experience" > 
            <div className={`${styles.container} `}>
                {cardsContent.map((card, index) => (
                    <div className="col-md-4 col-12 d-flex justify-content-center" key={index}>
                        <div className={`${styles.card} ${styles.mobileCard} `}>
                            <div className={styles.containerCard}>
                                <div className={styles.imageAndTitleContainer}>
                                    <div className={styles.cardImage}>
                                        <img src={card.image} className={styles.cardImage} alt={card.title} />
                                    </div>
                                    <div className={styles.cardData}>
                                        <a href={card.website} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                                            <p className={styles.cardTitle}>{card.title}  <i className="fa-solid fa-arrow-up-right-from-square"></i></p>
                                        </a>
                                        <p className={styles.cardPosition}>{card.position}</p>
                                        <p className={styles.cardDuration}>{card.duration && `(${card.duration})`}</p>
                                    </div>
                                </div>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

