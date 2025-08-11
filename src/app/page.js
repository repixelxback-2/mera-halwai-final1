import React from 'react'
import Navbar from '../components/Navbar'
import Home1 from '@/components/Home1'
import Home2 from '@/components/Home2'

const Home = () => {
  return (
    <div className='w-full h-full min-h-screen'>
        <Navbar />
        <Home1 />
        <Home2 />
    </div>
  )
}

export default Home
