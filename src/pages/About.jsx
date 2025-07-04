import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'

const About = () => {
  const teamMembers = [
    {
      name: "Maya Rodriguez",
      role: "Founder & Creative Director",
      bio: "Former design lead at top tech companies, Maya founded Vectr Studio to create opportunities for underrepresented women in UX while delivering exceptional design work.",
      image: "👩🏽‍💻",
      skills: ["UX Strategy", "Design Systems", "Mentorship"]
    },
    {
      name: "Zara Ahmed",
      role: "Senior UX Designer",
      bio: "With 8 years of experience in fintech and healthcare, Zara brings deep expertise in complex user research and interaction design to every project.",
      image: "👩🏾‍🎨",
      skills: ["User Research", "Prototyping", "Healthcare UX"]
    },
    {
      name: "Elena Vasquez",
      role: "Design Program Manager",
      bio: "Elena oversees our training programs and ensures seamless project delivery while fostering growth and development for emerging designers.",
      image: "👩🏻‍🏫",
      skills: ["Program Management", "Training", "Quality Assurance"]
    }
  ]

  const stats = [
    {
      number: "50+",
      label: "Women Trained",
      description: "Emerging designers given real-world experience"
    },
    {
      number: "95%",
      label: "Job Placement Rate",
      description: "Of our program graduates find UX roles"
    },
    {
      number: "25+",
      label: "Successful Projects",
      description: "Delivered for startups and growing companies"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Every client recommends our services"
    }
  ]

  const values = [
    {
      title: "Inclusive Design",
      description: "We believe great design considers all users, and great teams include diverse perspectives.",
      icon: "🌈"
    },
    {
      title: "Real Impact",
      description: "Our work creates meaningful change for both users and the designers we train.",
      icon: "💫"
    },
    {
      title: "Quality First",
      description: "We never compromise on design quality while providing educational opportunities.",
      icon: "✨"
    },
    {
      title: "Community Building",
      description: "We're creating a supportive network of diverse UX professionals.",
      icon: "🤝"
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
              About{' '}
              <span className="text-gradient">Vectr Studio</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto"
            >
              We're not just a design studio—we're a movement towards more inclusive, 
              thoughtful design that empowers both users and creators.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-cream-300 mb-6">
                Vectr Studio was founded on the belief that exceptional design and social impact 
                can go hand in hand. We partner with startups to create outstanding user experiences 
                while providing real-world training opportunities for women from underrepresented 
                backgrounds entering the UX field.
              </p>
              <p className="text-lg text-slate-600 dark:text-cream-300 mb-8">
                Every project we take on serves a dual purpose: solving complex design challenges 
                for our clients while creating meaningful career opportunities for emerging designers. 
                This unique model ensures that our work has lasting impact beyond the digital products we create.
              </p>
              <Button onClick={scrollToContact}>
                Work With Us
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-cream-100 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-cream-300">
                    {stat.description}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Unique Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6">
              How We're Different
            </h2>
            <p className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto">
              Our training + client work model creates a win-win-win situation for everyone involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-3">
                  For Clients
                </h3>
                <p className="text-slate-600 dark:text-cream-300">
                  Get high-quality design work at competitive rates while supporting 
                  diversity in tech. Our supervised training model ensures excellent results 
                  with fresh perspectives.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-3">
                  For Trainees
                </h3>
                <p className="text-slate-600 dark:text-cream-300">
                  Gain real-world experience on actual client projects, build impressive 
                  portfolios, and receive mentorship from experienced designers—all while 
                  getting paid for your work.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-3">
                  For The Industry
                </h3>
                <p className="text-slate-600 dark:text-cream-300">
                  Help build a more diverse, inclusive tech industry by supporting the 
                  next generation of UX professionals from underrepresented backgrounds.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to creating exceptional design and fostering the next generation of UX talent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <div className="text-6xl mb-6">{member.image}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-cream-300 mb-6">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Vectr Studio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-cream-100 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 dark:text-cream-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity Mission Callout */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-700 dark:from-accent-800 dark:to-accent-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-6">
              Building a More Inclusive Future
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              We're committed to increasing representation of women and underrepresented 
              groups in UX design. Every project we complete brings us closer to a more 
              diverse and inclusive tech industry.
            </p>
            <Button onClick={scrollToContact} variant="secondary" size="lg">
              Join Our Mission
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About