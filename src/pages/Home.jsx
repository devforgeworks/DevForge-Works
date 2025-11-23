import { Hero } from '../Hero'
import { About } from '../About'
import { Projects } from '../Projects'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../Footer'

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  )
}
