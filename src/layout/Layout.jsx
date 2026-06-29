import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Sun, Moon, ArrowUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PortfolioChatbot from '../components/PortfolioChatbot'

export default function Layout({ children }) {
  const [dark, setDark] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // If the child is a single React element, inject the `dark` prop so pages can adapt.
  const childWithProps = React.isValidElement(children)
    ? React.cloneElement(children, { dark })
    : children

  return (
    <div
      className={`${
        dark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      } } min-h-screen font-sans transition-colors duration-500`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Decorative animated backgrounds (kept minimal) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <Navbar />

      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDark(!dark)}
          className={`p-3 rounded-full ${
            dark ? 'bg-slate-800 text-yellow-400 border-slate-700' : 'bg-white text-slate-800 border-slate-200'
          } shadow-lg hover:scale-110 transition-all duration-300 border`}
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <main className="overflow-x-hidden">{childWithProps}</main>

      <PortfolioChatbot theme={dark ? 'dark' : 'light'} />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      <Footer dark={dark} />
    </div>
  )
}
