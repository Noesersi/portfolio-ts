import styles from './Projects.module.css'
import ThinkFlash from '../../assets/ThinkFlash.png'
import StarWars from '../../assets/starwars.png'
import ContactList from '../../assets/ContactList.png'
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
          title="Think Flash"
          technologies={['React', 'CSS', 'HTML', 'Bootstrap', 'Python', 'PostgreSQL', 'Flask']}
          image={ThinkFlashLogo}
          description="An interactive web platform centered on card games for effective learning in key subjects such as English, programming, and government
        exam preparation."
          githubLink="https://github.com/Noesersi/ThinkFlash_APP"
          websiteLink="https://thinkflashreal.onrender.com/"
        />
        <Card
          title="Hogwarts Library"
          technologies={['React Native', 'NodeJS', 'ExpressJS', 'Expo', 'Firebase']}
          image={HogwartsLibrary}
          description='Full-featured CRUD application utilizing modern technologies to deliver a seamless virtual library experience on both iOS and Android devices.'
          githubLink='https://github.com/Noesersi/HogwartsLibrary'
          websiteLink="https://hogwarts-library.onrender.com"

        />

        <Card
          title="Star Wars Blog"
          technologies={['CSS', 'HTML', 'Bootstrap', 'React', 'Context', 'Hooks']}
          image={StarWarsPic}
          description="A Star Wars blog where users can view planets, characters and starships from the Star Wars universe. Information is loaded from an API."
          githubLink="https://github.com/Noesersi/StarWarsBlog"
          websiteLink="https://star-wars-blog-jade.vercel.app/"
        />
        <Card
          title="Contact List"
          technologies={['CSS', 'HTML', 'Bootstrap', 'React', 'Context', 'Hooks', 'Firebase']}
          image={ContactList}
          description="Contact Management list where users can add, edit, and delete contacts working with Firebase."
          githubLink="https://github.com/Noesersi/ContactList"
          websiteLink="https://contact-list-three-teal.vercel.app/"
        />
        <Card
          title="Todo List"
          technologies={['CSS', 'HTML', 'Bootstrap', 'React', 'Context', 'Hooks', 'Firebase']}
          image={Todos}
          description="Todo List where users can add and delete todo's while the colors change randomly as you add new todo's that are saved in Firebase."
          githubLink="https://github.com/Noesersi/Todolist"
          websiteLink="https://todolist-ten-taupe.vercel.app/"
        />
      </div>
    </Section>
  )
}

export default Projects
