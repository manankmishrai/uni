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
  MessageCircle,
  X,
  Send,
  Calculator
} from 'lucide-react'

// Counter Component for Stats
function Counter({ from = 0, to, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        delay: delay / 1000,
        ease: "easeOut",
        onUpdate(value) { if (ref.current) ref.current.textContent = value.toFixed(0) }
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

  // --- STATES ---
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [messages, setMessages] = useState([{ text: "Welcome to Prestige! How can I help?", sender: "bot" }])
  const [marks, setMarks] = useState({ math: '', physics: '' })
  const [recommendation, setRecommendation] = useState(null)
  const messagesEndRef = useRef(null)

  // --- LOGIC ---
  const handleRecommendation = () => {
    const m = parseInt(marks.math); const p = parseInt(marks.physics)
    if (!m || !p) return
    if (m >= 90 && p >= 90) setRecommendation("Quantum Computing & Advanced Mathematics")
    else if (m >= 80) setRecommendation("Electronics & Communication Engineering")
    else if (m >= 60) setRecommendation("Information Science & Technology")
    else setRecommendation("Applied Sciences & Research Foundation")
  }

  const handleSendMessage = (e) => {
    e.preventDefault(); if (!chatMessage.trim()) return
    setMessages(p => [...p, { text: chatMessage, sender: "user" }])
    setChatMessage("")
    setTimeout(() => setMessages(p => [...p, { text: "Our team will contact you soon!", sender: "bot" }]), 1000)
  }

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-red-800 selection:text-white relative">

      {/* ========== HERO SECTION (REDUCED REDNESS) ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax, opacity: heroOpacity }} className="absolute inset-0">
          <img 
            src="/main-hero.jpg" 
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          {/* Neutral overlay to show natural image colors but keep text readable */}
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 text-stone-200 text-xs font-bold tracking-widest uppercase">
            Est. 1950 • Academic Excellence
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Future <span className="italic font-light text-stone-300">Starts</span> Here
          </motion.h1>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-900/20">Apply Now</Link>
            <button onClick={() => setIsVideoOpen(true)} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">Virtual Tour</button>
          </div>
        </div>
      </section>

      {/* ========== COURSE NAVIGATOR ========== */}
      <section className="relative z-30 px-4 -mt-16 mb-20">
        <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden grid md:grid-cols-5">
          <div className="md:col-span-2 bg-red-900 p-8 text-white flex flex-col justify-center">
            <Calculator className="w-8 h-8 mb-4 opacity-50" />
            <h3 className="text-2xl font-serif font-bold mb-2">Course Finder</h3>
            <p className="text-sm text-red-100 font-light">Get a personalized recommendation based on your academic performance.</p>
          </div>
          <div className="md:col-span-3 p-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Mathematics %</label>
                <input type="number" placeholder="eg. 85" onChange={(e)=>setMarks({...marks, math: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-red-800" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Physics %</label>
                <input type="number" placeholder="eg. 80" onChange={(e)=>setMarks({...marks, physics: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-red-800" />
              </div>
            </div>
            <button onClick={handleRecommendation} className="w-full bg-red-800 text-white font-bold py-3 rounded-lg hover:bg-red-900 transition-all shadow-lg shadow-red-900/10 uppercase tracking-widest text-xs">Analyze Profile</button>
            <AnimatePresence>
              {recommendation && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 p-4 bg-stone-50 border border-red-100 text-red-900 rounded-lg text-center font-bold italic text-sm">
                  Recommended: {recommendation}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-10 mb-20">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          {[
            { count: 25000, label: 'Students', icon: Users },
            { count: 1500, label: 'Faculty', icon: GraduationCap },
            { count: 47, label: 'Global Rank', icon: Award },
            { count: 75, label: 'Years', icon: BookOpen }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto text-red-800 mb-4 opacity-80" />
              <div className="text-4xl font-serif font-bold text-red-950"><Counter to={stat.count} />+</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-[0.2em] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== VIDEO MODAL ========== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-sm p-4" onClick={() => setIsVideoOpen(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative w-full max-w-5xl shadow-2xl overflow-hidden rounded-2xl border border-white/10" onClick={(e)=>e.stopPropagation()}>
              <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white z-10"><X /></button>
              <video src="/University_Campus_Tour_Video_Generated.mp4" autoPlay controls className="w-full h-full aspect-video bg-black"></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== CHATBOT ========== */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col h-[400px]">
              <div className="bg-red-900 p-4 text-white font-bold flex justify-between items-center">
                <span className="text-sm font-serif">University Assistant</span>
                <button onClick={() => setIsChatOpen(false)}><X className="w-4 h-4" /></button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-2 rounded-xl text-[11px] leading-relaxed ${m.sender === 'user' ? 'bg-stone-100 text-stone-800' : 'bg-red-800 text-white'}`}>{m.text}</div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-3 border-t bg-stone-50 flex gap-2">
                <input type="text" value={chatMessage} onChange={(e)=>setChatMessage(e.target.value)} className="flex-1 text-xs bg-white border border-stone-200 p-2 rounded-md outline-none" placeholder="Ask about admissions..." />
                <button type="submit" className="bg-red-900 text-white p-2 rounded-md hover:bg-red-800"><Send className="w-4 h-4" /></button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-red-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}