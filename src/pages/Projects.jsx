import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "FinTech Mobile App",
      category: "Mobile App",
      description: "Complete UX redesign for a personal finance app serving 50K+ users",
      image: "📱",
      tags: ["Mobile", "FinTech", "User Research"],
      challenge: "Users struggled with complex financial data visualization and navigation",
      solution: "Simplified information architecture with progressive disclosure and intuitive data visualization",
      impact: "40% increase in user engagement and 25% reduction in support tickets",
      duration: "6 weeks",
      team: "2 UX Designers, 1 Trainee",
      testimonial: "Vectr Studio completely transformed our user experience. The attention to detail and user-centered approach exceeded our expectations.",
      client: "FinanceFlow Inc."
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      category: "Web App",
      description: "Dashboard design for healthcare providers to manage patient data",
      image: "🏥",
      tags: ["Dashboard", "Healthcare", "Data Visualization"],
      challenge: "Medical professionals needed quick access to critical patient information during time-sensitive situations",
      solution: "Streamlined dashboard with customizable widgets and emergency alert system",
      impact: "30% faster patient data retrieval and improved clinical decision-making",
      duration: "8 weeks",
      team: "3 UX Designers, 2 Trainees",
      testimonial: "The team's understanding of healthcare workflows was impressive. They created a tool that actually makes our jobs easier.",
      client: "MedTech Solutions"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Web App",
      description: "Complete redesign of checkout flow for sustainable fashion brand",
      image: "🛍️",
      tags: ["E-commerce", "Sustainability", "Conversion"],
      challenge: "High cart abandonment rates and confusing checkout process",
      solution: "Simplified 3-step checkout with sustainability impact tracking",
      impact: "60% reduction in cart abandonment and 35% increase in conversions",
      duration: "4 weeks",
      team: "2 UX Designers, 1 Trainee",
      testimonial: "Not only did they improve our conversion rates, but they also helped us better communicate our sustainability mission.",
      client: "EcoFashion Co."
    },
    {
      id: 4,
      title: "Educational Platform",
      category: "Web App",
      description: "Learning management system for online coding bootcamp",
      image: "📚",
      tags: ["Education", "Learning", "Accessibility"],
      challenge: "Students struggled with course navigation and progress tracking",
      solution: "Gamified learning experience with clear progress indicators and peer collaboration features",
      impact: "80% improvement in course completion rates and higher student satisfaction",
      duration: "10 weeks",
      team: "3 UX Designers, 3 Trainees",
      testimonial: "The redesign transformed our platform into something students actually enjoy using. Completion rates have never been higher.",
      client: "CodeLearn Academy"
    },
    {
      id: 5,
      title: "Travel Booking App",
      category: "Mobile App",
      description: "Mobile app for booking unique, local travel experiences",
      image: "✈️",
      tags: ["Travel", "Mobile", "Social"],
      challenge: "Users found it difficult to discover and book authentic local experiences",
      solution: "AI-powered recommendations with social proof and simplified booking flow",
      impact: "45% increase in bookings and 50% improvement in user ratings",
      duration: "7 weeks",
      team: "2 UX Designers, 2 Trainees",
      testimonial: "Vectr Studio helped us create an app that truly connects travelers with local communities. The user experience is seamless.",
      client: "WanderLocal"
    },
    {
      id: 6,
      title: "Food Delivery Platform",
      category: "Mobile App",
      description: "Order and delivery tracking system for local restaurant marketplace",
      image: "🍔",
      tags: ["Food", "Delivery", "Real-time"],
      challenge: "Poor delivery tracking and communication between restaurants and customers",
      solution: "Real-time tracking with smart notifications and restaurant communication portal",
      impact: "25% faster delivery times and 40% reduction in customer complaints",
      duration: "5 weeks",
      team: "2 UX Designers, 1 Trainee",
      testimonial: "The new design made order management so much easier for our restaurant partners and customers love the transparency.",
      client: "LocalEats"
    }
  ]

  const categories = ["All", "Mobile App", "Web App", "Dashboard"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6"
            >
              Our{' '}
              <span className="text-gradient">Projects</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto mb-12"
            >
              Real projects, real impact. See how we've helped startups create exceptional 
              user experiences while training the next generation of UX talent.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-slate-900 dark:bg-cream-100 text-cream-50 dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-cream-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                      {project.image}
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium mb-4">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-cream-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-cream-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-accent-600 dark:text-accent-400 font-medium group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                    View Case Study →
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-8xl mb-4">{selectedProject.image}</div>
              <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                {selectedProject.category}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">Challenge</h4>
                <p className="text-slate-600 dark:text-cream-300 text-sm">{selectedProject.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">Solution</h4>
                <p className="text-slate-600 dark:text-cream-300 text-sm">{selectedProject.solution}</p>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">Impact</h4>
              <p className="text-slate-600 dark:text-cream-300">{selectedProject.impact}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">Duration</h4>
                <p className="text-slate-600 dark:text-cream-300">{selectedProject.duration}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">Team</h4>
                <p className="text-slate-600 dark:text-cream-300">{selectedProject.team}</p>
              </div>
            </div>
            
            <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-600 dark:border-accent-400 p-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-cream-200 italic mb-3">
                "{selectedProject.testimonial}"
              </p>
              <p className="text-slate-600 dark:text-cream-300 text-sm font-medium">
                — {selectedProject.client}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-cream-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-6">
              Ready to create your own success story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's work together to solve your UX challenges and create something amazing.
            </p>
            <Button onClick={scrollToContact} variant="secondary" size="lg">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects