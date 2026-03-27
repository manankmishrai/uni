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
  MapPin,
  Calculator
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

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.5], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // --- STATE MANAGEMENT ---
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Prestige University. How can I help you today?", sender: "bot" }
  ])
  
  // Course Recommendation State
  const [marks, setMarks] = useState({ math: '', physics: '' })
  const [recommendation, setRecommendation] = useState(null)

  const messagesEndRef = useRef(null)

  // --- LOGIC ---
  const handleRecommendation = () => {
    const m = parseInt(marks.math)
    const p = parseInt(marks.physics)
    if (!m || !p) return;

    if (m >= 90 && p >= 90) setRecommendation("Quantum Computing & Advanced Mathematics")
    else if (m >= 80 && p >= 70) setRecommendation("Electronics & Communication Engineering")
    else if (m >= 70 && p >= 85) setRecommendation("Applied Physics & Laser Technology")
    else setRecommendation("General Engineering & Research Foundation")
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!chatMessage.trim()) return
    setMessages(prev => [...prev, { text: chatMessage, sender: "user" }])
    setChatMessage("")
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Our admissions team will contact you shortly!", sender: "bot" }])
    }, 1000)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-red-800 selection:text-white overflow-hidden relative">

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax, opacity: heroOpacity }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
            alt="University Campus"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-red-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/60 to-red-950/95" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-red-900/40 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/20 shadow-xl inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-300 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-stone-200"></span></span>
              <span className="text-stone-50 text-sm font-medium uppercase tracking-wide">Admissions Open 2024</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              Where <span className="text-stone-200 italic font-light">Excellence</span> <br/> Meets Opportunity
            </motion.h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg md:text-2xl text-stone-300 max-w-2xl mb-10 font-light">
              Join a world-class institution designed for tomorrow's visionaries.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/admissions" className="bg-red-800 hover:bg-red-700 text-stone-50 text-lg font-bold px-10 py-4 rounded-lg flex items-center justify-center gap-3 transition-all border border-red-700">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <button onClick={() => setIsVideoOpen(true)} className="border border-stone-300/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-stone-50 font-semibold py-4 px-10 rounded-lg flex items-center justify-center gap-3 group">
                <Play className="w-4 h-4" /> Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SMART COURSE NAVIGATOR ========== */}
      <section className="relative z-40 px-4 -mt-20 mb-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden grid md:grid-cols-5">
            <div className="md:col-span-2 bg-red-950 p-8 text-white flex flex-col justify-center">
              <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center mb-4"><Calculator className="w-5 h-5 text-stone-200" /></div>
              <h3 className="text-2xl font-serif font-bold mb-2 leading-tight">AI Course Recommender (exclusive feature)</h3>
              <p className="text-xs text-red-200 font-light uppercase tracking-widest">Discover your ideal career path based on your strengths</p>
            </div>
            <div className="md:col-span-3 p-8 bg-white">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="number" placeholder="Maths %" onChange={(e)=>setMarks({...marks, math: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-red-800 transition-all" />
                <input type="number" placeholder="Physics %" onChange={(e)=>setMarks({...marks, physics: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-red-800 transition-all" />
              </div>
              <button onClick={handleRecommendation} className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 rounded-lg transition-all text-sm uppercase tracking-widest mb-4">Get Recommendation</button>
              
              <AnimatePresence>
                {recommendation && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="p-4 bg-red-50 rounded-lg border border-red-100 text-center">
                    <p className="text-xs font-bold text-red-900 uppercase mb-1">Recommended Stream:</p>
                    <p className="text-sm font-serif font-bold text-red-800 italic">{recommendation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative z-20 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white p-12 rounded-2xl border border-stone-100 shadow-xl">
            {[
              { count: 25000, suffix: '+', label: 'Students', icon: Users, d: 0 },
              { count: 1500, suffix: '+', label: 'Faculty', icon: GraduationCap, d: 200 },
              { count: 47, suffix: '', label: 'Global Rank', icon: Award, d: 400 },
              { count: 75, suffix: '', label: 'Years', icon: BookOpen, d: 600 }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 mx-auto text-red-800 mb-4" />
                <div className="text-4xl font-serif font-bold text-red-950 mb-1"><Counter to={stat.count} delay={stat.d} />{stat.suffix}</div>
                <div className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CAMPUS TOUR VIDEO SECTION ========== */}
      <section className="py-24 bg-stone-100 border-y border-stone-200">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Campus Experience</div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-950 font-serif mb-6 leading-tight">Explore the Heart of <span className="italic text-red-800">Innovation</span></h2>
            <p className="text-stone-600 mb-8 leading-relaxed">Take a journey through our 300-acre smart campus. From matrix-calculus research centers to state-of-the-art laser labs.</p>
            <button onClick={() => setIsVideoOpen(true)} className="bg-red-950 text-stone-50 px-10 py-4 rounded-lg font-bold flex items-center gap-3">Watch Campus Tour <Play className="w-4 h-4" /></button>
          </motion.div>
          <div onClick={() => setIsVideoOpen(true)} className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl aspect-video border border-stone-200">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="Tour" />
            <div className="absolute inset-0 bg-red-950/40 flex items-center justify-center"><div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center"><Play className="w-6 h-6 text-red-950 ml-1 fill-red-950" /></div></div>
          </div>
        </div>
      </section>

      {/* ========== VIDEO MODAL ========== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-red-950/95 backdrop-blur-md" onClick={() => setIsVideoOpen(false)}>
            <button className="absolute top-8 right-8 text-stone-300 hover:text-white transition-colors" onClick={() => setIsVideoOpen(false)}><X className="w-8 h-8" /></button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e)=>e.stopPropagation()} className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-700">
              <video src="/University_Campus_Tour_Video_Generated.mp4" autoPlay controls className="w-full h-full object-cover"></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== FLOATING CHATBOT ========== */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="absolute bottom-20 right-0 w-80 sm:w-96 bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col h-[450px]">
              <div className="bg-red-900 px-4 py-4 flex justify-between items-center text-white font-serif">
                <span className="font-bold text-sm tracking-wide">University Assistant</span>
                <button onClick={() => setIsChatOpen(false)}><X className="w-4 h-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-xs ${msg.sender === 'user' ? 'bg-stone-200 text-red-950 rounded-br-none' : 'bg-red-800 text-stone-50 rounded-bl-none'}`}>{msg.text}</div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-stone-200 flex gap-2">
                <input type="text" value={chatMessage} onChange={(e)=>setChatMessage(e.target.value)} placeholder="Type here..." className="flex-1 bg-stone-50 px-4 py-2 rounded-full outline-none text-xs" />
                <button type="submit" className="bg-red-900 text-white p-2 rounded-full"><Send className="w-4 h-4" /></button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-red-900 text-white p-4 rounded-full shadow-2xl border-2 border-red-800">
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  )
}