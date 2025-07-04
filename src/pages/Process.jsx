import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understanding your users and business",
      description: "We dive deep into your target audience, business goals, and competitive landscape. Through user interviews, market research, and stakeholder alignment, we build a comprehensive understanding of the problem space.",
      deliverables: ["User research findings", "Competitive analysis", "Business requirements", "Project roadmap"],
      timeline: "1-2 weeks",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Define",
      subtitle: "Clarifying the problem and opportunity",
      description: "Based on our research, we synthesize insights into clear problem statements and design opportunities. We create user personas, journey maps, and define the core features that will drive user success.",
      deliverables: ["User personas", "Journey maps", "Problem statements", "Feature prioritization"],
      timeline: "1 week",
      icon: "📝"
    },
    {
      number: "03",
      title: "Design",
      subtitle: "Crafting beautiful, functional solutions",
      description: "Our trained designers create wireframes, prototypes, and high-fidelity designs that solve real user problems. We iterate based on feedback and testing to ensure the best possible user experience.",
      deliverables: ["Wireframes", "Interactive prototypes", "Design system", "High-fidelity mockups"],
      timeline: "2-3 weeks",
      icon: "🎨"
    },
    {
      number: "04",
      title: "Deliver",
      subtitle: "Ready-to-build designs and documentation",
      description: "We provide comprehensive design specifications, assets, and documentation that make development seamless. Our team remains available for design QA and implementation support.",
      deliverables: ["Design specifications", "Asset exports", "Style guide", "Developer handoff"],
      timeline: "1 week",
      icon: "🚀"
    }
  ]

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
              Our Design{' '}
              <span className="text-gradient">Process</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto mb-12"
            >
              From discovery to delivery, we follow a proven methodology that ensures 
              exceptional results while providing hands-on training for emerging UX talent.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl mr-4">{step.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-1">
                        {step.number}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-cream-200 mb-4">
                    {step.subtitle}
                  </h3>
                  
                  <p className="text-lg text-slate-600 dark:text-cream-300 mb-8">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-3">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center text-slate-600 dark:text-cream-300">
                            <svg className="w-4 h-4 text-accent-600 dark:text-accent-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-3">
                        Timeline
                      </h4>
                      <p className="text-accent-600 dark:text-accent-400 font-medium text-lg">
                        {step.timeline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="bg-gradient-to-br from-slate-50 to-cream-100 dark:from-slate-800 dark:to-slate-700 border-2 border-accent-200 dark:border-accent-800">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-6 opacity-80">{step.icon}</div>
                      <div className="text-6xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-cream-100">
                        {step.title}
                      </h3>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Impact */}
      <section className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6">
              Training the Next Generation
            </h2>
            <p className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto">
              Throughout our design process, we provide hands-on training for women from underrepresented 
              backgrounds, giving them real-world experience while delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mentorship",
                description: "Paired with senior designers for guidance and skill development",
                icon: "👥"
              },
              {
                title: "Real Projects",
                description: "Working on actual client work, not just practice exercises",
                icon: "💼"
              },
              {
                title: "Career Growth",
                description: "Building portfolios and networks for successful UX careers",
                icon: "📈"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-cream-300">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-6">
              Ready to start your design journey?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <Button onClick={scrollToContact} variant="secondary" size="lg">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Process