import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="bottom-shade"></div>

      <Navbar />

      <div className="body-layout">
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className='components'>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/home" element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
              <Route path="/about-me" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="/contact-me" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default App