import { motion } from 'framer-motion'
import { FlaskConical, Cpu, Leaf, Heart, Award, Users, BookOpen, Lightbulb, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import images from '../data/images'

const stats = [
  { icon: FlaskConical, value: '500+', label: 'Active Projects' },
  { icon: Award, value: '$50M+', label: 'Research Funding' },
  { icon: Users, value: '300+', label: 'Research Faculty' },
  { icon: BookOpen, value: '2,000+', label: 'Publications/Year' }
]

const researchAreas = [
  { 
    icon: Cpu, 
    title: 'Artificial Intelligence', 
    desc: 'Deep learning, NLP, computer vision, and robotics research', 
    projects: 45, 
    color: 'from-blue-500 to-blue-600',
    image: images.research.computer
  },
  { 
    icon: Leaf, 
    title: 'Sustainable Energy', 
    desc: 'Renewable energy, solar technology, and green solutions', 
    projects: 28, 
    color: 'from-green-500 to-green-600',
    image: images.research.science
  },
  { 
    icon: Heart, 
    title: 'Biomedical Sciences', 
    desc: 'Gene therapy, drug discovery, and healthcare innovation', 
    projects: 52, 
    color: 'from-red-500 to-red-600',
    image: images.research.lab
  },
  { 
    icon: FlaskConical, 
    title: 'Nanotechnology', 
    desc: 'Nanomaterials, molecular engineering, and quantum research', 
    projects: 23, 
    color: 'from-purple-500 to-purple-600',
    image: images.research.microscope
  },
]

const publications = [
  {
    title: 'Breakthrough in Neural Network Efficiency',
    authors: 'Dr. Chen, Prof. Williams et al.',
    journal: 'Nature Machine Intelligence',
    year: '2024',
    citations: 156
  },
  {
    title: 'Novel Solar Cell Design with 40% Efficiency',
    authors: 'Prof. Anderson, Dr. Kumar et al.',
    journal: 'Science Advances',
    year: '2024',
    citations: 89
  },
  {
    title: 'CRISPR Advances in Gene Therapy',
    authors: 'Dr. Parker, Prof. Lee et al.',
    journal: 'Cell',
    year: '2023',
    citations: 234
  },
  {
    title: 'Quantum Computing Error Correction',
    authors: 'Prof. Johnson, Dr. Smith et al.',
    journal: 'Physical Review Letters',
    year: '2024',
    citations: 67
  },
]

const labs = [
  { name: 'AI & Robotics Lab', image: images.research.computer },
  { name: 'Biomedical Center', image: images.research.lab },
  { name: 'Clean Energy Lab', image: images.research.science },
  { name: 'Quantum Computing', image: images.research.microscope },
]

export default function Research() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src={images.research.lab}
            alt="Research Lab"
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
              World-Class Research
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Research & Innovation
            </h1>
            <p className="text-xl text-gray-300">
              Pushing the boundaries of knowledge to solve global challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6">
                  <stat.icon className="w-10 h-10 text-primary-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold mb-6">
              Focus Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Research <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Areas</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4`}>
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{area.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">{area.desc}</p>
                      <div className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold">
                        {area.projects} Active Projects
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured Publications
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {publications.map((pub, index) => (
              <AnimatedSection key={pub.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border-l-4 border-primary-500"
                >
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{pub.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{pub.authors}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-600 font-medium">{pub.journal}</span>
                    <span className="text-neutral-500">{pub.year} • {pub.citations} citations</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              State-of-the-Art Facilities
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {labs.map((lab, index) => (
              <AnimatedSection key={lab.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative h-64 rounded-2xl overflow-hidden"
                >
                  <img 
                    src={lab.image} 
                    alt={lab.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{lab.name}</h3>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}