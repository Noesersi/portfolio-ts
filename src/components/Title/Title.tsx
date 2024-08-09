import styles from './Title.module.css'
import { RoughNotation } from 'react-rough-notation'

interface TitleProps {
    text: string
}
export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className={styles.container}>
            <RoughNotation type='bracket' color='white' brackets={['left', 'right']} show={true}><h1 className={styles.title}>{text}</h1></RoughNotation>
        </div>
    )
}