import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children, currentPage, setCurrentPage, darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-slate-900 transition-colors duration-200">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="pt-16">
        {children}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Layout