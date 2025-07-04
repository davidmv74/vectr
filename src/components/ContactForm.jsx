import { useState } from 'react'
import { motion } from 'framer-motion'
import { Form, Input, Textarea, Select } from './Form'
import Button from './Button'
import Card from './Card'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    goals: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10k' },
    { value: '10k-25k', label: '$10k - $25k' },
    { value: '25k-50k', label: '$25k - $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: 'over-100k', label: 'Over $100k' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          goals: ''
        })
      }, 3000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-cream-100 mb-4">
          Thank you for your submission!
        </h3>
        <p className="text-slate-600 dark:text-cream-300 mb-6">
          We'll review your project details and get back to you within 24 hours.
        </p>
        <div className="text-accent-600 dark:text-accent-400 font-medium">
          Expect to hear from us soon!
        </div>
      </motion.div>
    )
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-cream-100 mb-6">
            Start Your Project
          </h2>
          <p className="text-xl text-slate-600 dark:text-cream-300 max-w-3xl mx-auto">
            Ready to create an exceptional user experience? Tell us about your project 
            and we'll help you build something amazing while supporting UX diversity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-cream-100 mb-6">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-slate-600 dark:text-cream-300 mb-8">
                Whether you're a early-stage startup or a growing company, we're here to help 
                you create user experiences that truly matter. Our unique model ensures you get 
                top-quality design work while contributing to a more diverse tech industry.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">
                      Quick Response
                    </h4>
                    <p className="text-slate-600 dark:text-cream-300 text-sm">
                      We'll review your project and get back to you within 24 hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">
                      Collaborative Process
                    </h4>
                    <p className="text-slate-600 dark:text-cream-300 text-sm">
                      We work closely with your team throughout the entire design process
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-cream-100 mb-2">
                      Social Impact
                    </h4>
                    <p className="text-slate-600 dark:text-cream-300 text-sm">
                      Your project directly supports diversity and inclusion in UX design
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    required
                  />
                  <Select
                    label="Budget Range"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    options={budgetOptions}
                    placeholder="Select your budget"
                    required
                  />
                </div>

                <Textarea
                  label="Project Goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, challenges, and what you're hoping to achieve..."
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Details'}
                </Button>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm