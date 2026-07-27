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
        description: `Building a SaaS platform used by 400+ beauty centers and 60k+ users.
        \n• Leading React Native apps, with native layers in Swift, Kotlin and Gradle.
        \n• Shipping full stack features across React, Node.js, Python, Firebase and GCP.
        \n• Driving CI/CD, automated testing, architecture decisions and Stripe-based flows.`,
        image: EsteticalLogo,
        website: "https://estetical.es"
    },
     {
        title: "Bubbo",
        position: "Full Stack Developer",
        duration: "12/2023-9/2024", 
        description: `Built the mobile app of an AI-powered audiovisual platform with 50k+ users.
        \n• Developed the React Native Expo app for iOS and Android.
        \n• Integrated scalable backend services on AWS and mobile subscriptions with RevenueCat.
        \n• Strengthened quality with E2E testing, Git hooks, CI/CD and automated deployments.`,
        image: BubboLogo,
        website: "https://bubbo.app"
    },
    {
        title: "4Geeks Academy España",
        position: "Senior F/S Mentor",
        duration: "12/2023-9/2024", 
        description: `Mentored 50+ students in full stack development and software quality.
        \n• Taught React, JavaScript, Python and database fundamentals.
        \n• Led code reviews, project guidance and clean code best practices.
        \n• Created internal learning materials and interview preparation sessions.`,
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
