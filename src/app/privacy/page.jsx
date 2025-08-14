import Privacy from '@/components/Privacy'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Privacy/>
        <Footer/>
    </div>
  )
}

export default page