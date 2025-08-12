'use client'
import React from 'react'

const Strips = () => {
  return (
    <div className="relative w-full pixel h-[30vh] overflow-hidden">
      {/* Blurred Background Strip */}
      <div className="absolute inset-0 opacity-30">
        <div className="strip-container blur-sm">
          <div className="strip bg-[#EC8A25] text-white font-bold text-4xl py-0 px-8 whitespace-nowrap animate-slide-left transform -rotate-2">
            <span className="strip-text">
              BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • 
            </span>
            <span className="strip-text">
              BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • 
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="strip-container">
          <div className="strip bg-[#EC8A25] text-white font-bold text-4xl py-0 px-8 whitespace-nowrap animate-slide-right transform rotate-2 shadow-lg">
            <span className="strip-text">
              BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • 
            </span>
            <span className="strip-text">
              BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • BECOME A VENDOR • WORK WITH US • 
            </span>
          </div>
        </div>
      </div>

    

        
      <style jsx>{`
        .strip-container {
          width: 200%;
          height: 70px;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }

        .strip {
          display: flex;
          align-items: center;
          height: 100%;
          width: 100%;
        }

        .strip-text {
          display: inline-block;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0) rotate(-2deg);
          }
          100% {
            transform: translateX(-50%) rotate(-2deg);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%) rotate(2deg);
          }
          100% {
            transform: translateX(0) rotate(2deg);
          }
        }

        @keyframes slide-left-slow {
          0% {
            transform: translateX(0) rotate(-1deg);
          }
          100% {
            transform: translateX(-50%) rotate(-1deg);
          }
        }

        @keyframes slide-right-slow {
          0% {
            transform: translateX(-50%) rotate(1deg);
          }
          100% {
            transform: translateX(0) rotate(1deg);
          }
        }

        .animate-slide-left {
          animation: slide-left 20s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 20s linear infinite;
        }

        .animate-slide-left-slow {
          animation: slide-left-slow 30s linear infinite;
        }

        .animate-slide-right-slow {
          animation: slide-right-slow 25s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Strips