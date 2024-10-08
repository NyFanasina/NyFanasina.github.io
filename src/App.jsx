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
    <div className='gradient text-slate-100 font-Raleway'>
      <Header />
      <main className='container mx-auto'>
        <Home />
        <About />
        <Projects />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
