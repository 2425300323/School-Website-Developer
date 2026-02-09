'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Admissions from '@/components/Admissions'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Admissions />
      <Contact />
      <Footer />
    </main>
  )
}
