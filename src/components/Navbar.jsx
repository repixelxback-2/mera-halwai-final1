import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center'
      style={{
        padding: 'clamp(1rem,2vw,200rem)'

      }}
    >
      <div className="w-[80%] flex justify-between  items-center">
      <div className="w-[20%] flex justify-start">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          style={{
            width: 'clamp(1rem,10vw,200rem)',
            height: "auto"
          }}

        />
      </div>

      <div className="flex w-[40%] relative text-xl helvetica text-[#8A3E1D] justify-evenly">
        <div
          style={{
            padding: ' clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)'
          }}
          className="px-2 py-2">About Us</div>
        <div
          style={{
            padding: ' clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)'
          }}
          className="px-2 py-2">Help</div>
        <div
          style={{
            padding: ' clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)'
          }}
          className="bg-[#F1EDE2] font-semibold rounded-2xl">Become a Vendor</div>
        <div
          style={{
            padding: ' clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)'
          }}
          className="px-2 py-2">Contact Us</div>


      </div>

</div>
    </div>
  )
}

export default Navbar
