import React from 'react';
import { Section } from "../../components/Section/Section";
import styles from './WorkSection.module.css';
import Bubbo from '../../assets/bubboIcon.png';
import ForGeeks from '../../assets/4geeks.jpg';

const cardsContent = [
    {
        title: "Bubbo",
        position: "Full Stack Developer",
        duration: "9/02/2024 - Present",
        description: `My work is focused on working with React Native Expo to create a smooth and engaging user experience in our BubboApp (audiovisiual recommendation platform). 
        \nIn addition, I have been working closely with our backend team to connect the whole system using AWS Amplify, which allows us to scale and maintain the application efficiently.\n
        We are also implementing a CI/CD system to optimize our development processes. This includes the implementation of end-to-end testing with Detox, ensuring the quality and reliability of our application at all times.`,
        image: Bubbo,
        website: "https://bubbo.app"
    },
    {
        title: "4Geeks Academy España",
        position: "F/S Dev Mentor and TA",
        duration: "12/02/2024 - Present",
        description: `I provide personalized support to students mastering Full Stack programming, focusing on essential skills and technologies such as HTML, CSS, React, JavaScript, Python, and MySQL. \n
        As a Teacher Assistant, I work closely with instructors to offer comprehensive assistance, including grading and providing feedback on student projects, ensuring they are well-prepared for successful careers in the tech industry. \n
        Additionally, I mentor students through their final projects, offering guidance and advice to help them overcome obstacles and refine their MVP versions.`,
        image: ForGeeks,
        website: "https://4geeksacademy.com"
    }
];

export const WorkSection: React.FC = () => {
    return (
        <Section title="Work Experience" >
            <div className={`${styles.container} `}>
                {cardsContent.map((card, index) => (
                    <div className="col-md-4 col-12 d-flex justify-content-center" >
                        <div className={`${styles.card} ${styles.mobileCard} `} key={index}>
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
                                        <p className={styles.cardDuration}>{card.duration}</p>
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

export default WorkSection;
