/* eslint-disable padded-blocks */
import styles from '../services/Services.module.css'
import Jest from '../../assets/jest-logo-png-transparent.png'
import JS from '../../assets/613b64fe30e8530004ba3a03.png'
import Python from '../../assets/5848152fcef1014c0b5e4967.png'
import CSS from '../../assets/62b221ef038aad4d3ed7ca2e.png'
import JSX from '../../assets/584830f5cef1014c0b5e4aa1.png'
import MySQL from '../../assets/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0.4375062915228278501906.png'
import Flask from '../../assets/kisspng-flask-python-bottle-web-framework-web-application-flask-5ace6e94133f66.5495283515234781640788.png'
import Postgres from '../../assets/62cdccb0e106734e1ce200aa.png'
import HTML from '../../assets/5847f5b6cef1014c0b5e489b.png'
const Services: React.FC = () => {
  return (
        <>
            <h1 className={styles.title}>Services</h1>

            <div className={styles.tecsBox}>
                <img src={HTML} alt="HTML" className={styles.techImage} />
                <img src={CSS} alt="CSS" className={styles.techImage} />
                <img src={JS} alt="JavaScript" className={styles.techImage} />
                <img src={JSX} alt="JSX" className={styles.techImage} />
                <img src={Python} alt="Python" className={styles.techImage} />
                <img src={MySQL} alt="MySQL" className={styles.techImage} />
                <img src={Flask} alt="Flask" className={styles.techImage} />
                <img src={Postgres} alt="Postgres" className={styles.techImage} />
                <img src={Jest} alt="Jest" className={styles.techImage} />
            </div>
        </>
  )

}

export default Services
