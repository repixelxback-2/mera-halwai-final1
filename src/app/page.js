import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Home1 from '@/components/Home1'
import Footer from '@/components/Footer'

// Dynamically import non-critical components
const Home2 = dynamic(() => import('@/components/Home2'), { ssr: true })
const Home3 = dynamic(() => import('@/components/Home3'), { ssr: true })
const Home5 = dynamic(() => import('@/components/Home5'), { ssr: true })
const Home6 = dynamic(() => import('@/components/Home6'), { ssr: true })
const Home7 = dynamic(() => import('@/components/Home7'), { ssr: true })
const Home8 = dynamic(() => import('@/components/Home8'), { ssr: true })
const Strips = dynamic(() => import('@/components/Strips'), { ssr: true })

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-md w-full max-w-md h-24"></div>
  </div>
)

const Home = () => (
  <div className='w-full h-full min-h-screen'>
    <Navbar />
    <Home1 />
    <Home2 />
    <Home3 />
    <Home5 />
    <Home6 />
    <Home7 />
    <Strips />
    <Home8 />
    <Footer />
  </div>
)

export default Home
