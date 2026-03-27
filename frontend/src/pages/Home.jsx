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
  Star,
  MessageCircle,
  X,
  Send,
  Calculator,
  CheckCircle2
} from 'lucide-react'

// Reusable Counter Component
function Counter({ from = 0, to, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2, delay: delay / 1000, ease: "easeOut",
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
  const [messages, setMessages] = useState([{ text: "Welcome to the University Portal. How can I help?", sender: "bot" }])
  const [marks, setMarks] = useState({ math: '', physics: '' })
  const [recommendation, setRecommendation] = useState(null)
  const [showEligibility, setShowEligibility] = useState(false)
  const messagesEndRef = useRef(null)

  // --- LOGIC ---
  const handleRecommendation = () => {
    const m = parseInt(marks.math); const p = parseInt(marks.physics)
    if (!m || !p) { alert("Please enter marks first!"); return; }
    setShowEligibility(true);
    if (m >= 90 && p >= 90) setRecommendation("Quantum Computing & AI Research")
    else if (m >= 80) setRecommendation("Robotics & Electronics Engineering")
    else setRecommendation("Information Technology & Applied Sciences")
  }

  const handleSendMessage = (e) => {
    e.preventDefault(); if (!chatMessage.trim()) return
    setMessages(prev => [...prev, { text: chatMessage, sender: "user" }])
    setChatMessage("")
    setTimeout(() => setMessages(p => [...p, { text: "Admissions will contact you soon!", sender: "bot" }]), 1000)
  }

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-red-800 selection:text-white overflow-hidden relative">

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax, opacity: heroOpacity }} className="absolute inset-0">
          <img src="/main-hero.jpg" alt="University" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/40 to-stone-950/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Academic <span className="text-stone-200 italic font-light">Excellence</span>
          </motion.h1>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="bg-red-800 hover:bg-red-700 text-stone-50 text-lg font-bold px-10 py-4 rounded-lg flex items-center gap-3 transition-all">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <button onClick={() => setIsVideoOpen(true)} className="bg-white/10 backdrop-blur-md text-stone-50 font-semibold py-4 px-10 rounded-lg flex items-center gap-3 border border-white/20 hover:bg-white/20 transition-all"><Play className="w-4 h-4" /> Virtual Tour</button>
          </div>
        </div>
      </section>

      {/* ========== MARKS & ELIGIBILITY BOX ========== */}
      <section className="relative z-40 px-4 -mt-20 mb-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden grid lg:grid-cols-12">
            <div className="lg:col-span-4 bg-red-950 p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight">Pathfinder</h3>
              <div className="space-y-4">
                <input type="number" placeholder="Maths %" onChange={(e)=>setMarks({...marks, math: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm outline-none focus:border-red-400 text-white placeholder:text-white/40" />
                <input type="number" placeholder="Physics %" onChange={(e)=>setMarks({...marks, physics: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm outline-none focus:border-red-400 text-white placeholder:text-white/40" />
                <button onClick={handleRecommendation} className="w-full bg-white text-red-950 font-bold py-4 rounded-xl hover:bg-stone-100 transition-all uppercase tracking-widest text-xs">Check Eligibility</button>
              </div>
            </div>
            <div className="lg:col-span-8 p-10 bg-white">
              <AnimatePresence mode="wait">
                {!showEligibility ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <Star className="w-12 h-12 text-stone-200 mb-4" />
                    <p className="text-stone-400 font-serif italic text-lg">Enter marks to see standards <br/> and stream recommendations.</p>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                      <div className="flex items-center gap-2 mb-4 border-b pb-3 border-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-red-800" />
                        <span className="text-[10px] font-bold text-red-900 uppercase tracking-[0.2em]">Admission Standards 2026</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div><span className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Nationality</span><p className="text-stone-800 text-xs font-semibold">Indian / NRI</p></div>
                        <div><span className="block text-[10px] font-bold text-stone-400 uppercase mb-1">PCM Aggregate</span><p className="text-stone-800 text-xs font-semibold">Min 60%</p></div>
                        <div><span className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Age Bracket</span><p className="text-stone-800 text-xs font-semibold">17 - 21 Yrs</p></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-red-50 rounded-2xl border border-red-100">
                      <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-red-900/20">✓</div>
                      <div>
                        <h5 className="text-[10px] font-bold text-red-800 uppercase tracking-widest mb-1">Recommended Stream</h5>
                        <p className="text-xl font-serif font-bold text-red-950">{recommendation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-10 mb-20">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          {[
            { count: 25000, label: 'Students', icon: Users, d: 0 },
            { count: 1500, label: 'Faculty', icon: GraduationCap, d: 200 },
            { count: 47, label: 'Global Rank', icon: Award, d: 400 },
            { count: 75, label: 'Years', icon: BookOpen, d: 600 }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto text-red-800 mb-4 opacity-70" />
              <div className="text-4xl font-serif font-bold text-red-950"><Counter to={stat.count} delay={stat.d} />+</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CAMPUS TOUR SECTION (THE BUILDING BOX) ========== */}
      <section className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase tracking-widest">Global Campus</div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-950 font-serif mb-6 leading-tight">The Heart of <br/><span className="italic text-red-800">Learning</span></h2>
            <p className="text-stone-600 mb-8 leading-relaxed">Experience our world-class infrastructure, from digital libraries to research labs.</p>
            <button onClick={() => setIsVideoOpen(true)} className="bg-red-950 text-stone-50 px-10 py-4 rounded-lg font-bold flex items-center gap-3 shadow-lg hover:bg-stone-800 transition-all">Watch Campus Tour <Play className="w-4 h-4" /></button>
          </motion.div>
          <div onClick={() => setIsVideoOpen(true)} className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl aspect-video border-8 border-white ring-1 ring-stone-200">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="Building" />
            <div className="absolute inset-0 bg-red-950/20 group-hover:bg-red-950/40 transition-all duration-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform"><Play className="w-8 h-8 text-red-950 ml-1 fill-red-950" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-stone-950 text-stone-500 py-16 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-white font-serif text-2xl font-bold mb-4 tracking-widest uppercase tracking-tighter">UNIVERSITY PORTAL</h3>
            <div className="text-[10px] uppercase tracking-[0.4em] opacity-50">© 2026 Institute of Excellence • All Rights Reserved</div>
        </div>
      </footer>

      {/* ========== VIDEO MODAL ========== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-950/95 backdrop-blur-md" onClick={() => setIsVideoOpen(false)}>
            <button className="absolute top-8 right-8 text-stone-300 hover:text-white z-10" onClick={() => setIsVideoOpen(false)}><X className="w-8 h-8" /></button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e)=>e.stopPropagation()} className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video src="/University_Campus_Tour_Video_Generated.mp4" autoPlay controls className="w-full h-full object-cover"></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== CHATBOT ========== */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col h-[400px]">
              <div className="bg-red-900 px-4 py-4 flex justify-between items-center text-white text-xs font-bold uppercase tracking-widest">
                <span>Assistant</span>
                <button onClick={() => setIsChatOpen(false)}><X className="w-4 h-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-[10px] ${msg.sender === 'user' ? 'bg-stone-100 text-stone-900' : 'bg-red-800 text-white'}`}>{msg.text}</div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-4 bg-stone-50 border-t flex gap-2">
                <input type="text" value={chatMessage} onChange={(e)=>setChatMessage(e.target.value)} placeholder="Type here..." className="flex-1 bg-white border border-stone-200 px-4 py-2 rounded-full outline-none text-[10px]" />
                <button type="submit" className="bg-red-900 text-white p-2 rounded-full shadow-md"><Send className="w-3 h-3" /></button>
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