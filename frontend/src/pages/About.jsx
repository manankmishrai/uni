import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, BookOpen, Trophy, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import images from '../data/images'

const leadership = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chancellor',
    image: images.people.professor1,
    bio: 'Leading educational reform with 30+ years of experience.'
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Vice-Chancellor',
    image: images.people.professor2,
    bio: 'Expert in academic administration and research development.'
  },
  {
    name: 'Dr. Emily Parker',
    role: 'Dean of Academics',
    image: images.people.professor3,
    bio: 'Pioneering innovative teaching methodologies.'
  },
  {
    name: 'Prof. David Williams',
    role: 'Dean of Research',
    image: images.people.professor4,
    bio: 'Leading groundbreaking research initiatives.'
  },
]

const milestones = [
  { year: '1948', event: 'University Founded', icon: '🏛️' },
  { year: '1960', event: 'Engineering College Established', icon: '⚙️' },
  { year: '1975', event: 'Medical School Inaugurated', icon: '🏥' },
  { year: '1990', event: 'Business School Launched', icon: '💼' },
  { year: '2010', event: 'Research Excellence Award', icon: '🏆' },
  { year: '2023', event: 'Global Top 50 Ranking', icon: '🌍' },
]

const values = [
  { icon: Target, title: 'Excellence', description: 'Striving for the highest standards in education and research.' },
  { icon: Heart, title: 'Integrity', description: 'Upholding ethical values in all our endeavors.' },
  { icon: Globe, title: 'Inclusivity', description: 'Embracing diversity and creating equal opportunities.' },
  { icon: Trophy, title: 'Innovation', description: 'Fostering creativity and breakthrough thinking.' },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src={images.hero.campus}
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A legacy of excellence spanning over 75 years of educational innovation and transformative impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Rich History of <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Founded in 1948 by visionary educators, Prestige University began as a small 
                college with a grand dream - to create an institution that would transform 
                lives through the power of education.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Over seven decades, we have grown from 50 students to over 25,000, while 
                maintaining our commitment to academic excellence, research innovation, 
                and community service.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Today, Prestige University stands as a beacon of knowledge, producing 
                leaders, innovators, and change-makers who shape the world.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={images.campus.building2}
                  alt="University Campus"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -left-8 bg-primary-600 text-white p-6 rounded-xl shadow-xl"
                >
                  <div className="text-5xl font-bold">75+</div>
                  <div className="text-sm">Years of Excellence</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 h-full border-l-4 border-primary-500 shadow-xl"
              >
                <Eye className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  To be a globally recognized institution that transforms lives through 
                  education, research, and innovation, creating leaders who shape a 
                  better world for future generations.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 h-full border-l-4 border-accent-500 shadow-xl"
              >
                <Target className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  To provide exceptional education that combines theoretical knowledge 
                  with practical skills, fostering critical thinking, creativity, and 
                  ethical values in a diverse and inclusive environment.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 text-center shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <value.icon className="w-8 h-8 text-primary-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-semibold mb-6">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Leadership
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
              Visionaries guiding our institution towards excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <AnimatedSection key={leader.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{leader.name}</h3>
                    <p className="text-primary-500 font-semibold mb-2">{leader.role}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">{leader.bio}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accreditations & Awards
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['NAAC A++', 'ABET Accredited', 'AACSB', 'QS 5-Star'].map((accreditation, index) => (
              <AnimatedSection key={accreditation} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 text-center shadow-lg"
                >
                  <Award className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                  <h4 className="font-bold text-neutral-900 dark:text-white">{accreditation}</h4>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}