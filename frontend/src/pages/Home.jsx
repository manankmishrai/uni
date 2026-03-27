import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, animate, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  ArrowRight,
  Play,
  ChevronDown,
  Star,
  Quote,
  Microscope,
  Briefcase,
  Palette,
  Cpu,
  MessageCircle,
  X,
  Send,
  MapPin
} from 'lucide-react'

// Reusable Counter Component
function Counter({ from = 0, to, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        delay: delay / 1000,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0)
          }
        }
      })
      return () => controls.stop()
    }
  }, [isInView, from, to, delay])

  return <span ref={ref}>{from}</span>
}

// Data Arrays 
const statsData = [
  { count: 25000, suffix: '+', label: 'Students Worldwide', icon: Users, delay: 0 },
  { count: 1500, suffix: '+', label: 'Expert Faculty', icon: GraduationCap, delay: 200 },
  { count: 47, suffix: '', label: 'Global Ranking', icon: Award, delay: 400 },
  { count: 75, suffix: '', label: 'Years of Excellence', icon: BookOpen, delay: 600 }
];

const programsData = [
  { icon: Microscope, title: 'Science & Research', count: '45+ Programs', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80' },
  { icon: Briefcase, title: 'Business & Management', count: '30+ Programs', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
  { icon: Palette, title: 'Arts & Humanities', count: '35+ Programs', image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=800&q=80' },
  { icon: Cpu, title: 'Engineering & Tech', count: '40+ Programs', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' }
];

const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'Computer Science, Class of 2023',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    quote: 'Prestige University transformed my career. The faculty support and research opportunities are unmatched anywhere.'
  },
  {
    name: 'Michael Chen',
    role: 'MBA, Class of 2022',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    quote: 'The global network I built here opened doors I never imagined. Choosing this university was the best decision of my life.'
  },
  {
    name: 'Emily Parker',
    role: 'Medicine, Class of 2024',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'World-class facilities and mentorship that deeply prepared me for a rigorous and rewarding career in healthcare.'
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.5], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Video Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Prestige University. How can I help you today?", sender: "bot" }
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!chatMessage.trim()) return

    setMessages(prev => [...prev, { text: chatMessage, sender: "user" }])
    setChatMessage("")

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for reaching out! A member of our admissions team will be able to assist you with that shortly. You can also check our Admissions page for FAQs.", 
        sender: "bot" 
      }])
    }, 1000)
  }

  // Prevent background scrolling when video modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVideoOpen]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-red-800 selection:text-white overflow-hidden relative">

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax, opacity: heroOpacity }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful University Campus"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-red-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/60 to-red-950/95" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-red-900/40 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/20 shadow-xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-200"></span>
              </span>
              <span className="text-stone-50 text-sm font-medium tracking-wide uppercase">Admissions Open for Fall 2024</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Where <span className="text-stone-200 italic">Excellence</span> <br className="hidden md:block"/> Meets Opportunity
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-stone-300 max-w-2xl mb-10 font-light leading-relaxed"
            >
              Join a world-class institution where innovation, research, and leadership converge to shape tomorrow's visionaries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/admissions">
                <button className="w-full sm:w-auto bg-red-800 hover:bg-red-700 text-stone-50 text-lg font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(153,27,27,0.3)] hover:shadow-[0_0_30px_rgba(153,27,27,0.5)] border border-red-700">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto border border-stone-300/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-stone-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-stone-200/20 flex items-center justify-center group-hover:bg-red-800 transition-colors">
                  <Play className="w-4 h-4 text-stone-50 ml-0.5" />
                </div>
                Take a Virtual Tour
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-300/50"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl shadow-red-950/5 p-8 md:p-12 border border-stone-200/50"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-stone-100">
              {statsData.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center px-4 border-none lg:border-solid">
                    <Icon className="w-8 h-8 mx-auto text-red-800 mb-4" />
                    <div className="text-4xl md:text-5xl font-bold text-red-950 mb-2 font-serif">
                      <Counter to={stat.count} delay={stat.delay} />{stat.suffix}
                    </div>
                    <div className="text-stone-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== ACCREDITATION LOGOS ========== */}
      <section className="py-16 bg-stone-100 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-stone-500 text-sm font-semibold uppercase tracking-widest mb-8">
            Internationally Accredited & Recognized By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['NAAC A++', 'ABET', 'AACSB', 'QS 5 Star', 'UNESCO', 'IAU'].map((badge) => (
              <div key={badge} className="text-xl font-bold text-stone-800 font-serif">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROGRAMS ========== */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-800 font-bold tracking-wider uppercase text-sm mb-3 block">Academic Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-red-950 font-serif">
              Our Schools of <span className="italic text-red-700">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to="/academics" className="group block relative h-96 rounded-2xl overflow-hidden shadow-lg bg-red-950">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-red-900/50 to-transparent" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <Icon className="w-10 h-10 text-stone-200 mb-4" />
                      <h3 className="text-2xl font-bold text-stone-50 mb-2 font-serif">{program.title}</h3>
                      <p className="text-stone-300 text-sm font-medium">{program.count}</p>
                    </div>
                    
                    <div className="absolute top-6 right-6 w-12 h-12 bg-red-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 shadow-lg">
                      <ArrowRight className="w-6 h-6 text-stone-50" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CAMPUS TOUR VIDEO SECTION ========== */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                Campus Life
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-950 font-serif mb-6 leading-tight">
                Experience the Heart of <span className="italic text-red-800">Prestige</span>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Take a stunning visual journey through our historic 300-acre campus. Discover state-of-the-art research labs, vibrant student centers, and the breathtaking architecture where your future will unfold.
              </p>
              
              <ul className="space-y-4 mb-8 text-stone-700 font-medium">
                {['Guided tours available 6 days a week', 'Interactive 360° virtual maps', 'Explore student dorms & dining'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-800" />
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsVideoOpen(true)}
                className="bg-red-950 text-stone-50 px-8 py-4 rounded-lg font-bold hover:bg-red-800 transition-colors flex items-center gap-3 shadow-lg shadow-red-950/20"
              >
                Watch Campus Tour
                <Play className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="absolute inset-0 bg-red-900 rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80" 
                  alt="Students on Campus" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-red-950/30 group-hover:bg-red-950/40 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-stone-50/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <Play className="w-8 h-8 text-red-900 ml-1 fill-red-900" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-24 bg-red-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FAFAF9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Quote className="w-12 h-12 text-red-800/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
              What Our <span className="text-stone-200 italic">Students Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-stone-200 leading-relaxed mb-8 text-lg font-light">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-stone-300/50"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-stone-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 relative overflow-hidden bg-red-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            alt="Graduation"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto bg-red-950/60 backdrop-blur-lg p-12 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-stone-300 mb-10 font-light leading-relaxed">
              Join thousands of students who have transformed their lives. Your future starts right here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="w-full sm:w-auto bg-stone-100 hover:bg-white text-red-950 text-lg font-bold px-10 py-4 rounded-lg transition-all duration-300">
                  Start Application
                </button>
              </Link>
              <Link to="/contact">
                <button className="w-full sm:w-auto border-2 border-stone-300/50 text-stone-100 hover:bg-stone-100 hover:text-red-950 text-lg font-bold py-4 px-10 rounded-lg transition-all duration-300">
                  Contact Admissions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== VIDEO MODAL POPUP ========== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-red-950/90 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-stone-300 hover:text-white transition-colors p-2 z-10"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-700 flex items-center justify-center"
            >
              {/* Here is the updated video tag mapping to your local file! */}
              <video 
                src="/University_Campus_Tour_Video_Generated.mp4" 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== FLOATING CHATBOT ========== */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-80 sm:w-96 bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
              style={{ height: '450px' }}
            >
              <div className="bg-red-900 px-4 py-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-red-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">University Assistant</h3>
                    <p className="text-xs text-red-200">Online & Ready to help</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-red-800 rounded-full transition-colors">
                  <X className="w-5 h-5 text-stone-200" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-stone-200 text-red-950 rounded-br-sm' : 'bg-red-800 text-stone-50 rounded-bl-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-stone-200 flex gap-2">
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-stone-100 text-stone-800 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-800/50 transition-shadow text-sm"
                />
                <button type="submit" disabled={!chatMessage.trim()} className="bg-red-900 text-white p-2 rounded-full hover:bg-red-800 transition-colors disabled:opacity-50">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-red-900 text-white p-4 rounded-full shadow-xl shadow-red-900/30 flex items-center justify-center border-2 border-red-800"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </div>

    </div>
  )
}