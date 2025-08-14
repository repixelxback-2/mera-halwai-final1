'use client'

import { AlignJustify, Menu, X, User, HelpCircle, Store, Mail, ChevronRight, Home } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },

    { icon: User, label: 'About Us', href: '/about' },
    { icon: HelpCircle, label: 'Help', href: 'https://wa.me/917300321034' },
    { icon: Store, label: 'Become a Vendor', href: 'https://wa.me/917300321034', highlighted: true },
    { icon: Mail, label: 'Contact Us', href: 'https://wa.me/917300321034' },
  ]

  // Additional footer links
  const footerLinks = [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ]

  return (
    <>
      <style jsx>{slideInRightAnimation}</style>
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
            <Link href="/about">
              <div
                style={{
                  padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
                }}
                className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
              >
                About Us
              </div>
            </Link>
            <Link href="#help">
              <div
                style={{
                  padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
                }}
                className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
              >
                Help
              </div>
            </Link>
            <Link href="#vendor">
              <div
                style={{
                  padding: 'clamp(0.25rem,0.25vw,1rem) clamp(0.8rem,0.75vw,1.5rem)'
                }}
                className="bg-[#F1EDE2] hover:bg-[#E8E1D1] text-[#8A3E1D] font-semibold rounded-xl cursor-pointer text-base xl:text-lg transition-colors"
              >
                Become a Vendor
              </div>
            </Link>
            <Link href="#contact">
              <div
                style={{
                  padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
                }}
                className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
              >
                Contact Us
              </div>
            </Link>
            <div className="flex items-center space-x-4 ml-4 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#8A3E1D]/70 hover:text-[#8A3E1D] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
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
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={closeMenu}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#EC8A25] via-[#F09735] to-[#E67E15] shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute top-20 right-10 w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-8 w-24 h-24 bg-white rounded-full opacity-20"></div>
          </div>

          <div className="relative flex flex-col h-full p-6">
            {/* Menu Header */}
            <div className="flex justify-between items-center pb-8 border-b border-white/20"
              style={{
                padding: "clamp(1rem,3vw,299rem)"
              }}
            >
              <div>
                <h2 className="text-3xl pixel  text-white mb-1">Menu</h2>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 hover:rotate-90"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1"

            >
              <nav className="flex flex-col"
                style={{
                  gap: "clamp(1rem,3vw,299rem)"
                }}
              >
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      href={item.href}
                      key={item.label}
                      onClick={closeMenu}
                      className={`group relative flex items-center justify-between p-4  transition-all duration-200 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg ${item.highlighted
                          ? 'bg-white text-[#EC8A25] shadow-md hover:shadow-xl'
                          : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
                        }`}
                      style={{
                        padding: "clamp(0.5rem,2vw,299rem) clamp(1rem,3vw,299rem)",
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center "
                      style={{
                        gap: "clamp(0.5rem,1vw,200rem)"
                      }}
                      >
                        <div className={`p-2 rounded-xl transition-colors ${item.highlighted
                            ? 'bg-[#EC8A25]/10'
                            : 'bg-white/10 group-hover:bg-white/20'
                          }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="inter font-semibold text-lg">{item.label}</span>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${item.highlighted ? 'text-[#EC8A25]/70' : 'text-white/60'
                        }`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/20">
             

             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Add the CSS animation for slideInRight
const slideInRightAnimation = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Navbar