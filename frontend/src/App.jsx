import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Research from './pages/Research'
import CampusLife from './pages/CampusLife'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/:departmentId" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/research" element={<Research />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App