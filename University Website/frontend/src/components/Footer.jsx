import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Phone, Mail, Send, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Research', path: '/research' },
]

const resources = [
  { label: 'Campus Life', path: '/campus-life' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:5000/api/newsletter/subscribe', { email })
      toast.success('Successfully subscribed to newsletter!')
      setEmail('')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to subscribe')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-10 h-10 text-gold-500" />
              <div>
                <span className="font-bold text-xl">Prestige</span>
                <span className="block text-xs text-gold-500 font-semibold tracking-wider">UNIVERSITY</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering minds, transforming futures. Excellence in education for over 75 years.
            </p>
            <div className="flex gap-4">
              {['📘', '🐦', '📷', '💼', '🎬'].map((emoji, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors text-lg"
                >
                  {emoji}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get the latest news and updates.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-gold-500 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
              <span className="text-gray-400 text-sm">
                123 University Avenue, Academic City, State 12345
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
              <a href="tel:+1234567890" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
              <a href="mailto:info@prestige.edu" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                info@prestige.edu
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Prestige University. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}