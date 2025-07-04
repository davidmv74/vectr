import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Process from './pages/Process'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'process':
        return <Process />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      default:
        return <Home />
    }
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Layout 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        {renderPage()}
      </Layout>
    </div>
  )
}

export default App