'use client';

import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { ScrollReveal } from '@/utils/scrollAnimations'

const AboutPageClient = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <ScrollReveal direction="up" distance={50} duration={0.8} delay={0.2}>
          <About/>
        </ScrollReveal>
        <Footer/>
    </div>
  )
}

export default AboutPageClient
