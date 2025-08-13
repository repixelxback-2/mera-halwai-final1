import React from 'react'
import Navbar from '../components/Navbar'
import Home1 from '@/components/Home1'
import Home2 from '@/components/Home2'
import Home3 from '@/components/Home3'
import Home5 from '@/components/Home5'
import Home6 from '@/components/Home6'
import Home7 from '@/components/Home7'
import Home8 from '@/components/Home8'
import Footer from '@/components/Footer'
import Strips from '@/components/Strips'

const Home = () => (
  <div className='w-full h-full min-h-screen'>
    <Navbar />
    <Home1 />
    <Home2 />
    <Home3 />
    <Home5 />
    <Home6 />
    {/* <Home7 /> */}
    {/* <Strips /> */}
    {/* <Home8 /> */}
    <Footer />
  </div>
)

export default Home
