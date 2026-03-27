import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight, Filter } from 'lucide-react'
import axios from 'axios'
import AnimatedSection from '../components/AnimatedSection'
import LoadingSpinner from '../components/LoadingSpinner'
import images from '../data/images'

const categories = ['All', 'Technology', 'Cultural', 'Career', 'Academic', 'Sports', 'Alumni']

export default function Events() {
  const [events, setEvents] = useState({ upcoming: [], past: [] })
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events')
      setEvents(response.data)
    } catch (error) {
      console.error('Failed to fetch events:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredEvents = events.upcoming.filter(event => 
    activeCategory === 'All' || event.category === activeCategory
  )

  const EventCard = ({ event, index, isPast = false }) => {
    const date = new Date(event.date)
    
    return (
      <AnimatedSection delay={index * 0.1}>
        <motion.div 
          whileHover={{ y: -5 }} 
          className={`bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl ${isPast ? 'opacity-75' : ''}`}
        >
          <div className="flex flex-col md:flex-row">
            {/* Date Box */}
            <div className="flex-shrink-0 bg-gradient-to-br from-primary-500 to-primary-600 text-white p-6 flex flex-col items-center justify-center min-w-[140px]">
              <span className="text-4xl font-bold">{date.getDate()}</span>
              <span className="text-sm uppercase">{date.toLocaleString('default', { month: 'short' })}</span>
              <span className="text-xs opacity-80">{date.getFullYear()}</span>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  isPast 
                    ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                    : 'bg-accent-500/10 text-accent-600'
                }`}>
                  {event.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {event.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
              </div>

              {!isPast && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="mt-4 text-primary-600 font-semibold flex items-center gap-2 group"
                >
                  Register Now 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <LoadingSpinner size="lg" text="Loading events..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src={images.events.conference}
            alt="Events"
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
              What's Happening
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Events & Happenings
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with campus activities and celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white dark:bg-neutral-900 sticky top-20 z-30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-neutral-100 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Upcoming Events
            </h2>
          </AnimatedSection>

          {filteredEvents.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-500 py-12">
              No events found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {events.past.length > 0 && (
        <section className="py-20 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Past Events
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {events.past.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} isPast />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}