/* eslint-disable padded-blocks */
import styles from '../services/Services.module.css'
import Jest from '../../assets/jest-logo-png-transparent.png'
import JS from '../../assets/JS.png'
import Python from '../../assets/Python.png'
import CSS from '../../assets/CSS.png'
import JSX from '../../assets/React.png'
import MySQL from '../../assets/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0.4375062915228278501906.png'
import Flask from '../../assets/icons8-flask-50.png'
import Postgres from '../../assets/PostgreSQL.png'
import HTML from '../../assets/HTML.png'
import SQLite from '../../assets/SQLite.png'
import Bootstrap from '../../assets/Bootstrap.png'
import GIT from '../../assets/Git.png'
import Typescript from '../../assets/typescript_original_logo_icon_146317.png'
import AWS from '../../assets/Amazon_Web_Services_Logo_PNG(11).png'
import Firebase from '../../assets/Firebase.png'
import NodeJS from '../../assets/nodeJS.png'
import ReactNative from '../../assets/ReactNativeLogo.png'
import { Section } from '../../components/Section/Section'


const Services: React.FC = () => {
  return (
    <Section title='Services'>
      <div className={styles.tecsBox}>
        <img src={HTML} alt="HTML" className={styles.techImage} />
        <img src={CSS} alt="CSS" className={styles.techImage} />
        <img src={Bootstrap} alt="Bootstrap" className={styles.techImage} />
        <img src={JS} alt="JavaScript" className={styles.techImage} />
        <img src={JSX} alt="JSX" className={styles.techImage} />
        <img src={Python} alt="Python" className={styles.techImage} />
        <img src={MySQL} alt="MySQL" className={styles.techImage} />
        <img src={Flask} alt="Flask" className={styles.techImage} />
        <img src={Postgres} alt="Postgres" className={styles.techImage} />
        <img src={Jest} alt="Jest" className={styles.techImage} />
        <img src={SQLite} alt="SQLite" className={styles.techImage} />
        <img src={GIT} alt="GIT" className={styles.techImage} />
        <img src={Typescript} alt="Typescript" className={styles.techImage} />
        <img src={AWS} alt="AWS" className={styles.techImage} />
        <img src={NodeJS} alt="NodeJS" className={styles.techImage} />
        <img src={Firebase} alt="Firebase" className={styles.techImage} />
        <img src={ReactNative} alt="ReactNative" className={styles.techImage} />
      </div>
    </Section>
  )

}

export default Services
