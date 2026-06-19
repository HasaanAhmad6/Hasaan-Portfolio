import React from 'react'

export default function Footer({ dark = true }) {
  return (
    <footer className={`border-t ${dark ? 'border-slate-800' : 'border-slate-200'} py-8`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60 text-center md:text-left">© {new Date().getFullYear()} Hasaan Ahmad. Built with React, Vite & Tailwind CSS.</p>
          <div className="flex items-center gap-6 text-sm opacity-60">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            <a href="/Resume1.pdf" download className="hover:text-teal-400 transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
