import { Button, TextInput } from 'flowbite-react'
import { useState } from 'react'
import Header from './components/Header'
import Home from './views/Home'
import Projects from './views/Projects'
import Contact from './views/Contact'
import About from './views/About'
import Cv from './views/Cv'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-slate-950 text-slate-100'>
      <div className='container mx-auto'>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Cv />
        <Footer />
      </div>
    </div>
  )
}

export default App
