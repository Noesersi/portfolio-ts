import React from 'react';
import styles from './Section.module.css';
import { Title } from '../Title/Title';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    title: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, title }) => {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <div className={styles.container}>
                <Title text={title} />
            </div>
            {children}
        </section>
    );
};
