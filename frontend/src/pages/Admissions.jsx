import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Download, Calendar, DollarSign, Send, FileText, Clock, Award } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
import AnimatedSection from '../components/AnimatedSection'
import LoadingSpinner from '../components/LoadingSpinner'
import images from '../data/images'

const steps = [
  { step: 1, title: 'Check Eligibility', desc: 'Review program requirements', icon: FileText },
  { step: 2, title: 'Apply Online', desc: 'Complete application form', icon: Send },
  { step: 3, title: 'Entrance Test', desc: 'Take the university exam', icon: Clock },
  { step: 4, title: 'Interview', desc: 'Personal interview round', icon: CheckCircle },
  { step: 5, title: 'Admission Offer', desc: 'Receive offer letter', icon: Award },
  { step: 6, title: 'Enroll', desc: 'Pay fees & confirm seat', icon: DollarSign },
]

const programs = [
  'Bachelor of Engineering (B.Tech)',
  'Bachelor of Science (B.Sc)',
  'Bachelor of Arts (B.A)',
  'Bachelor of Business Administration (BBA)',
  'Bachelor of Law (LLB)',
  'Bachelor of Medicine (MBBS)',
  'Master of Engineering (M.Tech)',
  'Master of Business Administration (MBA)',
  'Master of Science (M.Sc)',
  'Doctor of Philosophy (PhD)',
]

const importantDates = [
  { event: 'Application Opens', date: 'January 15, 2024', icon: Calendar },
  { event: 'Early Decision Deadline', date: 'March 1, 2024', icon: Clock },
  { event: 'Regular Deadline', date: 'April 15, 2024', icon: FileText },
  { event: 'Entrance Exam', date: 'May 10-15, 2024', icon: Award },
  { event: 'Results Announced', date: 'June 1, 2024', icon: CheckCircle },
  { event: 'Classes Begin', date: 'August 1, 2024', icon: Calendar },
]

const feeStructure = [
  { program: 'B.Tech', tuition: '$8,000', hostel: '$2,000', total: '$10,000' },
  { program: 'B.Sc', tuition: '$5,000', hostel: '$2,000', total: '$7,000' },
  { program: 'BBA', tuition: '$7,000', hostel: '$2,000', total: '$9,000' },
  { program: 'MBA', tuition: '$15,000', hostel: '$3,000', total: '$18,000' },
  { program: 'MBBS', tuition: '$20,000', hostel: '$3,000', total: '$23,000' },
]

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', program: '', message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/apply', formData)
      toast.success(`Application submitted! Your ID: ${response.data.applicationId}`)
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    } catch (error) {
      toast.error('Failed to submit application')
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
            src={images.students.group1}
            alt="Students"
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
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/20 backdrop-blur-md rounded-full mb-6 border border-green-500/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Admissions Open 2024-25</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Join Our Community
            </h1>
            <p className="text-xl text-gray-300">
              Begin your journey towards excellence at Prestige University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold mb-6">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Admission <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
              Follow these simple steps to join Prestige University
            </p>
          </AnimatedSection>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 -translate-y-1/2" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 0.1}>
                  <motion.div whileHover={{ scale: 1.05, y: -5 }} className="relative z-10">
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 text-center shadow-xl border border-neutral-100 dark:border-neutral-700">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                        {s.step}
                      </div>
                      <h3 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">{s.title}</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{s.desc}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Important Dates
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {importantDates.map((item, index) => (
              <AnimatedSection key={item.event} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white">{item.event}</h3>
                    <p className="text-primary-600 font-semibold">{item.date}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fee Structure
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4">Annual fees for different programs (per year)</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-left font-semibold">Tuition</th>
                    <th className="px-6 py-4 text-left font-semibold">Hostel</th>
                    <th className="px-6 py-4 text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-700">
                  {feeStructure.map((fee, i) => (
                    <motion.tr 
                      key={fee.program}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-neutral-900 dark:text-white">{fee.program}</td>
                      <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">{fee.tuition}</td>
                      <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">{fee.hostel}</td>
                      <td className="px-6 py-4 font-bold text-primary-600">{fee.total}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex flex-wrap gap-4 justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Prospectus
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Scholarship Info
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold mb-6">
                Start Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Apply Now
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
                Fill out the form below to begin your application
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Full Name *
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="input-field" 
                        placeholder="+1 234 567 890"
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Program of Interest *
                      </label>
                      <select 
                        required 
                        className="input-field" 
                        value={formData.program} 
                        onChange={(e) => setFormData({...formData, program: e.target.value})}
                      >
                        <option value="">Select a program</option>
                        {programs.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Why do you want to join Prestige University?
                    </label>
                    <textarea 
                      rows="4" 
                      className="input-field resize-none" 
                      placeholder="Tell us about yourself and your goals..."
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
                        Submit Application
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}