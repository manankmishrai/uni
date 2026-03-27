import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, ChevronDown, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/research', label: 'Research' },
  { path: '/campus-life', label: 'Campus Life' },
  { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white dark:bg-neutral-900 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <GraduationCap className="w-10 h-10 text-primary-600" />
            </motion.div>
            <div>
              <span className="font-bold text-xl text-neutral-900 dark:text-white group-hover:text-primary-600 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                Prestige
              </span>
              <span className="block text-xs text-primary-600 font-semibold tracking-wider">
                UNIVERSITY
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 font-medium transition-colors ${
                    isActive 
                      ? 'text-primary-600' 
                      : 'text-neutral-700 dark:text-neutral-200 hover:text-primary-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-accent-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700"
            >
              {isDark ? <Sun className="w-5 h-5 text-accent-400" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-900 dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-xl transition-colors ${
                          isActive
                            ? 'bg-primary-600 text-white'
                            : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}