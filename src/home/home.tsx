/* eslint-disable @typescript-eslint/indent */
import AboutMe from './aboutMe/aboutMe.tsx'
import Projects from './proyectos/projects.tsx'
import Services from './services/services.tsx'
import { WorkSection } from './WorkSection/WorkSection.tsx'

const Home: React.FC = () => {
   return (
      <>
         <section id="about-me">
            <AboutMe />
         </section>
         <section id="work">
            <WorkSection />
         </section>
         <section id="my-projects">
           <Projects />
         </section>

         <section id="services">
           <Services />
         </section>
      </>

   )
}

export default Home
