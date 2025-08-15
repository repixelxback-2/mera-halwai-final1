import Image from 'next/image'
import React, { useState } from 'react'

const Home6 = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const handlePlayVideo = () => {
        setIsVideoPlaying(true)
    }

    const handleCloseVideo = () => {
        setIsVideoPlaying(false)
    }

    return (
        <div className='w-full flex flex-col items-center justify-center h-[50vh] md:h-[45vh] bg-black gap-5 relative'>
            <Image
                src="/banner.webp"
                alt="home3"
                width={500}
                height={500}
                className='w-full absolute leading-0 opacity-40 object-cover h-[100%]'
            />
            
            {!isVideoPlaying && (
                <>
                    <div className="text-xl w-[70%] md:w-[40%] z-40 sm:text-3xl leading-snug md:text-4xl xl:text-5xl text-center pixel inline text-[#F1EDE2]">
                        Explore all features in Thirty seconds
                    </div>
                    <div className="cursor-pointer z-40" onClick={handlePlayVideo}>
                        <Image
                            src="/play.svg"
                            alt="play button"
                            width={500}
                            height={500}
                            className='w-28 md:w-32 h-fit hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                </>
            )}

            {isVideoPlaying && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4">
                    {/* Close button */}
                    <button
                        onClick={handleCloseVideo}
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl md:text-3xl hover:text-gray-300 transition-colors duration-200 z-[10000] bg-black bg-opacity-50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                    >
                        ✕
                    </button>
                    
                    <div className="fixed w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center animate-in fade-in zoom-in duration-300">
                        <video
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                            autoPlay
                            onEnded={handleCloseVideo}
                        >
                            <source src="/wed.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    {/* Optional: Click outside to close */}
                    <div 
                        className="absolute inset-0 -z-10" 
                        onClick={handleCloseVideo}
                    ></div>
                </div>
            )}
        </div>
    )
}

export default Home6