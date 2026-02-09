'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/images/img-20260206-wa0010-3.jpg"
              alt="Great Kwame Nkrumah Memorial School Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-lg font-bold text-blue-900">Great Kwame Nkrumah</h1>
              <p className="text-xs text-blue-700">Memorial School</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            <li><Link href="#home" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link href="#admissions" className="hover:text-blue-600 transition">Admissions</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-blue-900 transition ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-blue-900 transition ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-blue-900 transition ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4">
            <li><Link href="#home" className="block hover:text-blue-600">Home</Link></li>
            <li><Link href="#about" className="block hover:text-blue-600">About</Link></li>
            <li><Link href="#admissions" className="block hover:text-blue-600">Admissions</Link></li>
            <li><Link href="#contact" className="block hover:text-blue-600">Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  )
}
