import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Loading component
const Loading = () => (
  <div className="min-h-screen bg-darker flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-xl">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
