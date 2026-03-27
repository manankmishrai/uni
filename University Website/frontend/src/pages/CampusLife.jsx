import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  Trophy, 
  Home, 
  Coffee, 
  Camera,
  Wifi,
  Shield,
  Heart,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Utensils
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

// All reliable images - 100% working!
const img = {
  hero: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920',
  campus1: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
  students: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
  library: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800',
  graduation: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
  lab: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
  sports: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
  basketball: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800',
  swimming: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
  running: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800',
  event: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  music: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=800',
  art: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
  photography: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
  drama: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
  robotics: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
  debate: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=800',
  hostel: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
  cafeteria: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
  gym: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
  coffee: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
  concert: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
  festival: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
}

const clubs = [
  { 
    name: 'Robotics Club', 
    icon: '🤖', 
    members: 150, 
    color: 'from-blue-500 to-blue-600',
    image: img.robotics,
    description: 'Build innovative robots and compete in national championships'
  },
  { 
    name: 'Music Society', 
    icon: '🎵', 
    members: 200, 
    color: 'from-purple-500 to-purple-600',
    image: img.music,
    description: 'Express yourself through melody, rhythm, and harmony'
  },
  { 
    name: 'Photography Club', 
    icon: '📸', 
    members: 180, 
    color: 'from-pink-500 to-pink-600',
    image: img.photography,
    description: 'Capture moments and master the art of visual storytelling'
  },
  { 
    name: 'Drama Society', 
    icon: '🎭', 
    members: 120, 
    color: 'from-red-500 to-red-600',
    image: img.drama,
    description: 'Discover your inner actor and bring stories to life'
  },
  { 
    name: 'Art & Design', 
    icon: '🎨', 
    members: 90, 
    color: 'from-orange-500 to-orange-600',
    image: img.art,
    description: 'Unleash creativity through painting, sculpture, and digital art'
  },
  { 
    name: 'Debate Club', 
    icon: '🎤', 
    members: 75, 
    color: 'from-green-500 to-green-600',
    image: img.debate,
    description: 'Sharpen your mind and master the art of persuasion'
  },
]

const sports = [
  { name: 'Football', icon: '⚽', teams: 8, image: img.sports, achievements: '3x National Champions' },
  { name: 'Basketball', icon: '🏀', teams: 6, image: img.basketball, achievements: 'State Winners 2024' },
  { name: 'Swimming', icon: '🏊', teams: 4, image: img.swimming, achievements: '15 University Records' },
  { name: 'Athletics', icon: '🏃', teams: 5, image: img.running, achievements: '8 Olympic Qualifiers' },
]

const facilities = [
  { name: 'Modern Hostels', icon: Home, description: 'Comfortable AC rooms with attached bathrooms & study areas', image: img.hostel },
  { name: 'Food Courts', icon: Utensils, description: 'Multi-cuisine cafeterias serving healthy & delicious meals', image: img.cafeteria },
  { name: 'Sports Complex', icon: Trophy, description: 'Olympic-standard facilities for 20+ sports', image: img.gym },
  { name: 'Recreation Center', icon: Coffee, description: 'Gaming zones, cafés, and relaxation lounges', image: img.coffee },
]

const gallery = [
  { image: img.campus1, title: 'Historic Main Campus', category: 'Campus' },
  { image: img.students, title: 'Vibrant Student Life', category: 'Students' },
  { image: img.event, title: 'Annual Cultural Fest', category: 'Events' },
  { image: img.library, title: 'World-Class Library', category: 'Facilities' },
  { image: img.graduation, title: 'Graduation Day 2024', category: 'Ceremony' },
  { image: img.concert, title: 'Live Music Night', category: 'Entertainment' },
  { image: img.lab, title: 'Advanced Research Labs', category: 'Academics' },
  { image: img.sports, title: 'Championship Sports Day', category: 'Sports' },
]

const stats = [
  { value: '50+', label: 'Student Clubs', icon: Users },
  { value: '25+', label: 'Sports Teams', icon: Trophy },
  { value: '10+', label: 'Hostels', icon: Home },
  { value: '100+', label: 'Events/Year', icon: Star },
]

// Image Card Component
function ImageCard({ image, title, subtitle, category, onClick, className = '', size = 'md' }) {
  const sizes = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80',
    xl: 'h-96',
    full: 'h-full min-h-[200px]'
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${sizes[size]} ${className}`}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full shadow-lg">
            {category}
          </span>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/80 text-sm md:text-base line-clamp-2">
            {subtitle}
          </p>
        )}
        
        <motion.div 
          className="absolute bottom-6 right-6 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState('clubs')
  const [selectedImage, setSelectedImage] = useState(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openLightbox = (index) => {
    setGalleryIndex(index)
    setSelectedImage(gallery[index])
  }

  const closeLightbox = () => setSelectedImage(null)

  const nextImage = () => {
    const newIndex = (galleryIndex + 1) % gallery.length
    setGalleryIndex(newIndex)
    setSelectedImage(gallery[newIndex])
  }

  const prevImage = () => {
    const newIndex = (galleryIndex - 1 + gallery.length) % gallery.length
    setGalleryIndex(newIndex)
    setSelectedImage(gallery[newIndex])
  }

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/95" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Experience Campus Life
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
              Where <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Memories</span>
              <br />Are Made
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Discover a vibrant community filled with opportunities for growth, 
              friendship, and unforgettable experiences.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 165, 22, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-4 px-10 rounded-full text-lg flex items-center gap-3 mx-auto shadow-xl"
            >
              <Play className="w-5 h-5" />
              Take a Virtual Tour
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-t-3xl border border-white/20 p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center text-white"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-gold-400" />
                    <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="py-8 bg-white dark:bg-navy-950 sticky top-20 z-30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { id: 'clubs', label: 'Student Clubs', icon: Users },
              { id: 'sports', label: 'Sports', icon: Trophy },
              { id: 'facilities', label: 'Facilities', icon: Home },
              { id: 'gallery', label: 'Photo Gallery', icon: Camera },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/30'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC CONTENT SECTIONS */}
      <AnimatePresence mode="wait">
        {/* CLUBS SECTION */}
        {activeTab === 'clubs' && (
          <motion.section
            key="clubs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-gray-50 dark:bg-navy-900"
          >
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-600 rounded-full text-sm font-semibold mb-4">
                  50+ Active Clubs
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-4">
                  Find Your <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Tribe</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join passionate communities and pursue your interests beyond academics
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clubs.map((club, index) => (
                  <AnimatedSection key={club.name} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="group bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img 
                          src={club.image} 
                          alt={club.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <span className="text-4xl drop-shadow-lg">{club.icon}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white drop-shadow-lg">{club.name}</h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                          {club.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{club.members} Members</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2 rounded-full bg-gradient-to-r ${club.color} text-white text-sm font-semibold shadow-lg`}
                          >
                            Join Now
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                >
                  View All 50+ Clubs
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* SPORTS SECTION */}
        {activeTab === 'sports' && (
          <motion.section
            key="sports"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-gray-50 dark:bg-navy-900"
          >
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-600 rounded-full text-sm font-semibold mb-4">
                  Champions League
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-4">
                  Sports & <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Athletics</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  World-class facilities and coaching for aspiring athletes
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {sports.map((sport, index) => (
                  <AnimatedSection key={sport.name} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative h-80 rounded-2xl overflow-hidden group shadow-xl"
                    >
                      <img 
                        src={sport.image} 
                        alt={sport.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-5xl drop-shadow-lg">{sport.icon}</span>
                          <div>
                            <h3 className="text-3xl font-bold text-white drop-shadow-lg">{sport.name}</h3>
                            <p className="text-gold-400 font-semibold">{sport.achievements}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/70">{sport.teams} Teams Active</span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors"
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Sports Achievements Banner */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 rounded-3xl p-10 md:p-14 shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Our Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: '25+', label: 'National Titles', icon: '🏆' },
                    { value: '100+', label: 'University Records', icon: '📊' },
                    { value: '50+', label: 'Pro Athletes', icon: '⭐' },
                    { value: '15', label: 'Olympic Qualifiers', icon: '🥇' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-white"
                    >
                      <span className="text-4xl block mb-2">{stat.icon}</span>
                      <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">{stat.value}</div>
                      <div className="text-white/70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* FACILITIES SECTION */}
        {activeTab === 'facilities' && (
          <motion.section
            key="facilities"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-gray-50 dark:bg-navy-900"
          >
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-600 rounded-full text-sm font-semibold mb-4">
                  World-Class Amenities
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-4">
                  Campus <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Facilities</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Everything you need for a comfortable and enriching campus life
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {facilities.map((facility, index) => (
                  <AnimatedSection key={facility.name} delay={index * 0.1}>
                    <ImageCard
                      image={facility.image}
                      title={facility.name}
                      subtitle={facility.description}
                      size="lg"
                    />
                  </AnimatedSection>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Wifi, label: 'High-Speed WiFi', desc: 'Campus-wide coverage' },
                  { icon: Shield, label: '24/7 Security', desc: 'Safe & secure environment' },
                  { icon: Heart, label: 'Health Center', desc: 'On-campus medical care' },
                  { icon: Coffee, label: 'Cafés & Lounges', desc: 'Relax & recharge' },
                ].map((feature, i) => (
                  <AnimatedSection key={feature.label} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white dark:bg-navy-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-bold text-navy-900 dark:text-white mb-1">{feature.label}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* GALLERY SECTION */}
        {activeTab === 'gallery' && (
          <motion.section
            key="gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-gray-50 dark:bg-navy-900"
          >
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-600 rounded-full text-sm font-semibold mb-4">
                  Captured Moments
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-4">
                  Photo <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Gallery</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A glimpse into life at Prestige University — Click any image to view
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.map((item, index) => (
                  <AnimatedSection 
                    key={index} 
                    delay={index * 0.05}
                    className={index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}
                  >
                    <ImageCard
                      image={item.image}
                      title={item.title}
                      category={item.category}
                      size={index === 0 || index === 5 ? 'full' : 'md'}
                      onClick={() => openLightbox(index)}
                      className="h-full"
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <motion.div
              key={galleryIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-xl">
                <span className="px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">{selectedImage.title}</h3>
              </div>
            </motion.div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full">
                {galleryIndex + 1} / {gallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Experience Campus Life?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Schedule a campus visit and discover what makes Prestige University special.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 165, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-xl"
              >
                Schedule a Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}