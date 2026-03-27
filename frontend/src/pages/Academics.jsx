import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Award, GraduationCap } from 'lucide-react'
import axios from 'axios'
import AnimatedSection from '../components/AnimatedSection'
import images from '../data/images'

const departments = [
  {
    id: 'engineering',
    name: 'School of Engineering',
    icon: '⚙️',
    description: 'Cutting-edge programs in Computer Science, Mechanical, Electrical, Civil, and Chemical Engineering with state-of-the-art labs.',
    image: images.departments.engineering,
    programs: 12,
    students: 5000,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'science',
    name: 'School of Science',
    icon: '🔬',
    description: 'Explore Physics, Chemistry, Biology, Mathematics and Environmental Science with world-renowned researchers.',
    image: images.departments.science,
    programs: 10,
    students: 4000,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'arts',
    name: 'School of Arts & Humanities',
    icon: '🎨',
    description: 'Cultivate creativity through Literature, Philosophy, History, Fine Arts, Music and Cultural Studies.',
    image: images.departments.arts,
    programs: 8,
    students: 3000,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'business',
    name: 'School of Business',
    icon: '💼',
    description: 'World-class MBA, BBA, Finance, Marketing, and Entrepreneurship programs with global exposure.',
    image: images.departments.business,
    programs: 8,
    students: 4500,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'law',
    name: 'School of Law',
    icon: '⚖️',
    description: 'Comprehensive legal education with moot courts, internships, and international law programs.',
    image: images.departments.law,
    programs: 5,
    students: 2000,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'medicine',
    name: 'School of Medicine',
    icon: '🏥',
    description: 'Training compassionate healthcare professionals with cutting-edge medical facilities and clinical rotations.',
    image: images.departments.medicine,
    programs: 7,
    students: 1500,
    color: 'from-teal-500 to-teal-600'
  },
]

const stats = [
  { value: '6', label: 'Schools', icon: GraduationCap },
  { value: '50+', label: 'Programs', icon: BookOpen },
  { value: '1,500+', label: 'Faculty', icon: Users },
  { value: '95%', label: 'Placement Rate', icon: Award }
]

export default function Academics() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src={images.library.main}
            alt="Library"
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
              World-Class Education
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Academic Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover excellence across our diverse range of world-class academic departments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.05 }} className="p-6">
                  <stat.icon className="w-10 h-10 text-primary-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold mb-6">
              6 Schools of Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Schools</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
              Choose from a wide range of disciplines taught by world-renowned faculty
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <AnimatedSection key={dept.id} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }} 
                  className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl group h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="text-4xl drop-shadow-lg">{dept.icon}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{dept.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-neutral-600 dark:text-neutral-300 mb-5 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" /> {dept.programs} Programs
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {dept.students}+
                        </span>
                      </div>
                    </div>
                    <Link to={`/academics/${dept.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r ${dept.color} text-white font-semibold flex items-center justify-center gap-2 group`}
                      >
                        Explore Programs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Start Your Academic Journey
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join thousands of students pursuing excellence at Prestige University
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Apply Now
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-primary-600 transition-all"
                >
                  Request Info
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}