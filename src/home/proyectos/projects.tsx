import styles from './Projects.module.css'
import ThinkFlash from '../../assets/ThinkFlash.png'
import BookChallenge from '../../assets/BookChallenge.png'
import HogwartsLibrary from '../../assets/hogwartsLibrary.png'
import PappersAgent from '../../assets/pappers-agent-icon.svg'
import SuperContext from '../../assets/supercontext-brain.svg'

import Card from '../../components/Card/card/Card'
import { Section } from '../../components/Section/Section'

const Projects: React.FC = () => {
  const ThinkFlashLogo = ThinkFlash
  return (
    <Section title='Projects'>
      <div className={styles.projectsBox}>
        <Card
          title="PappersAgent"
          technologies={['TypeScript', 'Node.js', 'Telegraf', 'Pappers API', 'ExcelJS', 'LLMs']}
          image={PappersAgent}
          description="Telegram-based AI agent for company prospecting, analysis and Excel exports."
          githubLink="https://github.com/NITDev94/papperAgent"
        />
        <Card
          title="superContext"
          technologies={['Python', 'ChromaDB', 'Ollama', 'CLI', 'RAG', 'Watchdog']}
          image={SuperContext}
          description="Local semantic memory layer for AI coding agents, with search, project memory and impact analysis."
          githubLink="https://github.com/NITDev94/superContext"
        />
         <Card
          title="Book Challenge"
          technologies={['ReactNative', 'Figma', 'Firebase', 'iOS', 'Android']}
          image={BookChallenge}
          description="A mobile application designed to encourage reading by allowing users to set reading goals, track progress, and discover new books."
          githubLink="https://github.com/NITDev94/BookChallenge"
        />
        <Card
          title="Think Flash"
          technologies={['React', 'CSS', 'HTML', 'Bootstrap', 'Python', 'PostgreSQL', 'Flask']}
          image={ThinkFlashLogo}
          description="An interactive web platform centered on card games for effective learning in key subjects such as English, programming, and government
        exam preparation."
          githubLink="https://github.com/NITDev94/ThinkFlash_APP"
          websiteLink="https://thinkflashreal.onrender.com/"
        />
        <Card
          title="Hogwarts Library"
          technologies={['React Native', 'NodeJS', 'ExpressJS', 'Expo', 'Firebase']}
          image={HogwartsLibrary}
          description='Full-featured CRUD application utilizing modern technologies to deliver a seamless virtual library experience on both iOS and Android devices.'
          githubLink='https://github.com/NITDev94/HogwartsLibrary'
          websiteLink="https://hogwarts-library.onrender.com"

        />

      </div>
    </Section>
  )
}

export default Projects
