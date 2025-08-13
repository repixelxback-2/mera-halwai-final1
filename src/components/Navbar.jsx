'use client'

import { AlignJustify, Menu } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='w-full flex justify-center relative'
      style={{
        padding: 'clamp(2rem,2vw,2rem)'
      }}
    >
      <div className="w-full max-w-7xl flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            style={{
              width: 'clamp(8rem,12vw,12rem)',
              height: "auto"
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <div
            style={{
              padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
            }}
            className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
          >
            About Us
          </div>
          <div
            style={{
              padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
            }}
            className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
          >
            Help
          </div>
          <div
            style={{
              padding: 'clamp(0.25rem,0.25vw,1rem) clamp(0.8rem,0.75vw,1.5rem)'
            }}
            className="bg-[#F1EDE2] hover:bg-[#E8E1D1] text-[#8A3E1D] font-semibold rounded-xl cursor-pointer text-base xl:text-lg transition-colors"
          >
            Become a Vendor
          </div>
          <div
            style={{
              padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
            }}
            className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
          >
            Contact Us
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-[#EB8B23]  focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
            aria-label="Toggle menu"
          >

            {isMenuOpen ? (
              <Menu size={30} />
            ) : (
            <AlignJustify size={30} />

            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#8A3E1D]">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-[#8A3E1D] hover:text-[#6B2F15] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D] focus:ring-opacity-50 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6">
            <div className="space-y-2 px-6">
              <div
                onClick={closeMenu}
                className="block w-full text-left p-2 text-[#8A3E1D] hover:bg-[#F1EDE2] rounded-lg transition-colors cursor-pointer text-lg font-medium"
              >
                About Us
              </div>
              <div
                onClick={closeMenu}
                className="block w-full text-left p-2 text-[#8A3E1D] hover:bg-[#F1EDE2] rounded-lg transition-colors cursor-pointer text-lg font-medium"
              >
                Help
              </div>
              <div
                onClick={closeMenu}
                className="block w-full text-left py-2 px-2 bg-[#F1EDE2] text-[#8A3E1D] font-semibold rounded-lg hover:bg-[#E8E1D1] transition-colors cursor-pointer text-lg"
              >
                Become a Vendor
              </div>
              <div
                onClick={closeMenu}
                className="block w-full text-left p-2 text-[#8A3E1D] hover:bg-[#F1EDE2] rounded-lg transition-colors cursor-pointer text-lg font-medium"
              >
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar