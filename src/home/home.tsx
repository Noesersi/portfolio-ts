/* eslint-disable @typescript-eslint/indent */
import AboutMe from './aboutMe/aboutMe.tsx'
import Projects from './proyectos/projects.tsx'

const Home: React.FC = () => {
   return (
      <>
         <section id="about-me">
            <AboutMe />
         </section>

         <section id="my-projects">
           <Projects />
         </section>
      </>

   )
}

export default Home
