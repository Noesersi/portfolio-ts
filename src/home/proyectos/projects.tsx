import styles from './Projects.module.css'
import ThinkFlash from '../../assets/Logo_2-removebg-preview.png'
import StarWars from '../../assets/starwars.png'
import Card from '../../components/Card/Card'
const Projects: React.FC = () => {
  const ThinkFlashLogo = ThinkFlash
  const StarWarsPic = StarWars
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsBox}>

        <Card
          title="Think Flash"
          technologies={['React', 'CSS', 'HTML', 'Bootstrap', 'Python', 'PostgreSQL', 'Flask']}
          image={ThinkFlashLogo}
          description="An interactive web platform centered on card games for effective learning in key subjects such as English, programming, and government
        exam preparation."
          githubLink="https://github.com/Noesersi/ThinkFlash_APP"
          websiteLink="https://thinkflash.onrender.com/"
        />
        <Card
          title="Star Wars Blog"
          technologies={['CSS', 'HTML', 'Bootstrap', 'React', 'Context', 'Hooks']}
          image={StarWarsPic}
          description="A Star Wars blog where users can view planets, characters and starships from the Star Wars universe. Information is loaded from an API."
          githubLink="https://github.com/Noesersi/StarWarsBlog"
          websiteLink="https://star-wars-blog-jade.vercel.app/"
        />
      </div>
    </section>
  )
}

export default Projects
