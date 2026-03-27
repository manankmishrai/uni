import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
import AnimatedSection from '../components/AnimatedSection'
import LoadingSpinner from '../components/LoadingSpinner'
import images from '../data/images'

const contactInfo = [
  { 
    icon: MapPin, 
    title: 'Visit Us', 
    lines: ['123 University Avenue', 'Academic City, State 12345', 'Country'] 
  },
  { 
    icon: Phone, 
    title: 'Call Us', 
    lines: ['+1 (234) 567-890', '+1 (234) 567-891', 'Mon-Fri: 9AM-5PM'] 
  },
  { 
    icon: Mail, 
    title: 'Email Us', 
    lines: ['info@prestige.edu', 'admissions@prestige.edu', 'support@prestige.edu'] 
  },
  { 
    icon: Clock, 
    title: 'Office Hours', 
    lines: ['Monday - Friday: 9AM - 5PM', 'Saturday: 10AM - 2PM', 'Sunday: Closed'] 
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:5000/api/contact', formData)
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src={images.campus.entrance}
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              We'd love to hear from you. Reach out with any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-xl text-center h-full"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-neutral-600 dark:text-neutral-400 text-sm">{line}</p>
                  ))}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="input-field" 
                        placeholder="John Doe"
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required 
                        className="input-field" 
                        placeholder="john@example.com"
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject *
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="input-field" 
                      placeholder="How can we help you?"
                      value={formData.subject} 
                      onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Message *
                    </label>
                    <textarea 
                      rows="5" 
                      required 
                      className="input-field resize-none" 
                      placeholder="Your message..."
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    type="submit" 
                    disabled={loading} 
                    className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2"
                  >
                    {loading ? <LoadingSpinner size="sm" /> : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Social */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977277388103!2d-122.40641668468177!3d37.78583797975753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sUniversity%20of%20San%20Francisco!5e0!3m2!1sen!2sus!4v1647892740347!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    title="Campus Map" 
                  />
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {['📘 Facebook', '🐦 Twitter', '📷 Instagram', '💼 LinkedIn', '🎬 YouTube'].map((social, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        href="#"
                        className="px-5 py-3 bg-neutral-100 dark:bg-neutral-700 rounded-xl font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-500 hover:text-white transition-all"
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Help */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-white/80 mb-6">
                    Our admissions team is ready to answer your questions.
                  </p>
                  <a href="tel:+1234567890">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full bg-white text-primary-600 font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now: +1 (234) 567-890
                    </motion.button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}