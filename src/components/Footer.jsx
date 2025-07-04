import { motion } from 'framer-motion'

const Footer = ({ setCurrentPage }) => {
  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' }
  ]

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-accent-600 dark:from-cream-100 dark:to-accent-400 rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold font-display text-slate-900 dark:text-cream-100">
                Vectr Studio
              </span>
            </div>
            <p className="text-slate-600 dark:text-cream-300 max-w-md">
              Designing interfaces that empower real people while training the next generation of diverse UX talent.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-slate-600 dark:text-cream-300 hover:text-slate-900 dark:hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-4">Get Started</h4>
            <button
              onClick={handleStartProject}
              className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
            >
              Start a Project →
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 dark:text-cream-400 text-sm">
              © 2024 Vectr Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 dark:text-cream-400 hover:text-slate-700 dark:hover:text-cream-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-500 dark:text-cream-400 hover:text-slate-700 dark:hover:text-cream-200 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-500 dark:text-cream-400 hover:text-slate-700 dark:hover:text-cream-200 transition-colors">
                <span className="sr-only">Dribbble</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c.896 1.093 1.464 2.427 1.568 3.9-.256-.056-2.842-.578-5.431-.264-.127-.31-.255-.62-.396-.92 2.835-1.163 4.006-2.735 4.259-2.716zM12 2.107c2.271 0 4.336.867 5.886 2.287-.225.225-1.25 1.39-3.958 2.418C12.8 4.895 11.543 3.17 11.29 2.867c.236-.04.483-.06.71-.06zm-3.917.852c.253.303 1.51 2.027 2.647 3.934C8.37 7.867 5.949 7.84 5.672 7.84c.567-2.154 1.95-3.883 3.711-4.881zm-4.988 6.759c.283.003 3.302.043 6.626-1.167.155.302.299.608.435.918-.055.016-.111.029-.166.045-3.426 1.109-5.228 4.134-5.228 4.134s-.002-.084-.002-.126c0-1.254.486-2.403 1.335-3.264zm1.814 4.748c.199-.337 1.506-2.607 4.581-3.556l.002-.001c.736 1.909 1.035 3.483 1.118 3.925-1.813.77-3.066 2.401-3.066 2.401s-.836-.885-2.635-2.769zm5.704 2.454c-.063-.372-.312-1.79-.95-3.652 2.456-.393 4.607.251 4.607.251s-.596 2.606-2.134 4.31c-.612-.399-1.523-.909-1.523-.909zM15.858 19.87c1.014-1.057 1.685-2.434 1.978-3.957.074.025 1.689.696 3.232 2.066-1.086 1.315-2.706 2.206-4.548 2.206-.553 0-1.086-.098-1.662-.315z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer