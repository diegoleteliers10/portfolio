import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Social from './components/Social/Social'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Contact from './components/Contact/Contact'
import Mark from './components/Mark/Mark'





function App() {

  return (
    <div>
      <header className='z-[9999]'>
        <Nav/>
      </header>
      <main className='z-1'>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main> 
      <Social/>
      <ScrollUp/>
      <footer className='z-[9999]'>
        <Mark/>
      </footer>
    </div>
  )
}

export default App
