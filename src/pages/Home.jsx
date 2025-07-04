import { motion } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'
import ContactForm from '../components/ContactForm'

const Home = () => {
  const trustLogos = [
    "TechCorp", "InnovateLabs", "StartupXYZ", "GrowthCo", "VentureInc"
  ]

  const testimonials = [
    {
      quote: "Vectr Studio transformed our user experience while training incredible talent. A win-win partnership.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      quote: "The design quality exceeded expectations, and knowing we supported diversity made it even better.",
      author: "Michael Chen",
      role: "Product Manager, InnovateLabs"
    }
  ]

  const processSteps = [
    {
      icon: "🔍",
      title: "Discover",
      description: "Deep dive into your users and business goals"
    },
    {
      icon: "📝",
      title: "Define",
      description: "Clear problem definition and design strategy"
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Beautiful, functional interfaces that work"
    },
    {
      icon: "🚀",
      title: "Deliver",
      description: "Polished designs ready for development"
    }
  ]

  const scrollToProcess = () => {
    const processSection = document.getElementById('process-overview')
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6"
            >
              Designing interfaces that{' '}
              <span className="text-gradient">empower real people</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto mb-12"
            >
              Vectr Studio is a UX design studio that pairs high-quality client work with 
              real-world training for underrepresented women entering the UX field.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button onClick={scrollToProcess} size="lg">
                View Our Work
              </Button>
              <Button onClick={scrollToContact} variant="secondary" size="lg">
                Start a Project
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-200 dark:bg-accent-800 rounded-full mix-blend-multiply opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cream-200 dark:bg-slate-800 rounded-full mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Trust/Social Proof Section */}
      <section className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-slate-500 dark:text-cream-400 uppercase tracking-wider mb-8">
              Trusted by forward-thinking startups
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {trustLogos.map((logo, index) => (
                <div key={index} className="text-lg font-semibold text-slate-700 dark:text-cream-300">
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <blockquote className="text-lg text-slate-700 dark:text-cream-200 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-cream-100">
                      {testimonial.author}
                    </p>
                    <p className="text-slate-600 dark:text-cream-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section id="process-overview" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-cream-300 max-w-2xl mx-auto">
              From discovery to delivery, we follow a proven process that ensures great results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-cream-300">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-6">
              Ready to transform your user experience?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together while supporting the next generation of UX talent.
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

export default Home