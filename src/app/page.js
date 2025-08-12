import React from 'react'
import Navbar from '../components/Navbar'
import Home1 from '@/components/Home1'
import Home2 from '@/components/Home2'
import Home3 from '@/components/Home3'
import Home5 from '@/components/Home5'

const Home = () => {
  return (
    <div className='w-full h-full min-h-screen'>
        <Navbar />
        <Home1 />
        <Home2 />
        <Home3 />
        <Home5 />
    
    </div>
  )
}

export default Home
