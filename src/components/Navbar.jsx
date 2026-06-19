import React from 'react'

export default function Navbar() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <a href="/" className="font-bold text-lg">Hasaan Ahmad</a>
      <nav className="flex items-center gap-4">
        <a href="#contact" className="text-sm opacity-80 hover:text-teal-400 transition-colors">Contact</a>
        <a href="/Resume1.pdf" download className="text-sm opacity-80 hover:text-teal-400 transition-colors">Resume</a>
      </nav>
    </header>
  )
}
