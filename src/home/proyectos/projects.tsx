import styles from './Projects.module.css'
import ThinkFlash from '../../assets/ThinkFlash.png'
import BookChallenge from '../../assets/BookChallenge.png'
import StarWars from '../../assets/starwars.png'
import Todos from '../../assets/Todos.png'
import HogwartsLibrary from '../../assets/hogwartsLibrary.png'

import Card from '../../components/Card/card/Card'
import { Section } from '../../components/Section/Section'

const Projects: React.FC = () => {
  const ThinkFlashLogo = ThinkFlash
  const StarWarsPic = StarWars
  return (
    <Section title='Projects'>
      <div className={styles.projectsBox}>
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

        <Card
          title="Star Wars Blog"
          technologies={['CSS', 'HTML', 'Bootstrap', 'React', 'Context', 'Hooks']}
          image={StarWarsPic}
          description="A Star Wars blog where users can view planets, characters and starships from the Star Wars universe. Information is loaded from an API."
          githubLink="https://github.com/NITDev94/StarWarsBlog"
          websiteLink="https://star-wars-blog-jade.vercel.app/"
        />
        <Card
          title="Todo List"
          technologies={['CSS', 'HTML', 'Bootstrap', 'React', 'Context', 'Hooks', 'Firebase']}
          image={Todos}
          description="Todo List where users can add and delete todo's while the colors change randomly as you add new todo's that are saved in Firebase."
          githubLink="https://github.com/NITDev94/Todolist"
          websiteLink="https://todolist-ten-taupe.vercel.app/"
        />
      </div>
    </Section>
  )
}

export default Projects
