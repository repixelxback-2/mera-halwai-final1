import React from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full gap-32'
            style={{
                padding: 'clamp(1rem, 6vw, 300rem) 0'
            }}
        >

            <div className="flex w-[80%] justify-between">
                <div className="flex flex-col gap-10 w-[60%]"
                >
                    <div className="flex flex-col">
                        <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-left text-[#8A3E1D]"
                        >
                            Merahalwai began with a simple idea
                        </div>
                        <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-left text-[#EB8B23]"
                        >
                            catering shouldn’t be complicated.
                        </div>
                    </div>


                    <div className="text-[#8A3E1D] text-left text-xl inter font-semibold">
                        When Vijay  struggled to find trustworthy, budget-friendly sweets for a family event, it sparked a mission to change how people discover halwais. Today, Merahalwai connects you with curated, high-quality caterers across India—so your celebrations can be as joyful and stress-free as they deserve to be.
                    </div>

                    <Button text="Get Started" bgcolor={"#EC8A25"} />
                </div>

                <div className="w-[30%]">
                    <Image
                        src="/sir.svg"
                        alt="about"
                        width={100}
                        height={100}

                        className='aspect-square w-full h-auto'
                    />
                </div>
            </div>




            <div className="flex w-full justify-center">
                <div className="w-[80%] rounded-2xl overflow-hidden h-[40vh] flex">
                    <div className="w-1/2 flex flex-col justify-between items-end bg-[#8A3E1D] h-full"
                        style={{
                            padding: "clamp(1rem,3vw,300rem)"
                        }}
                    >
                        <div className="text-white text-right text-2xl max-w-lg">
                            To become India's most trusted and comprehensive catering network—empowering hosts to celebrate effortlessly and allowing halwais to flourish across every neighborhood.
                        </div>
                        <div className="text-4xl sm:text-5xl leading-snug md:text-6xl pixel text-right text-[#EB8B23]"
                        >
                            Vision
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col justify-between items-start bg-[#EC8A25] h-full"
                      style={{
                            padding: "clamp(1rem,3vw,300rem)"
                        }}
                    >
                        <div className="text-white text-left text-2xl max-w-lg">
                           To simplify event catering by offering a seamless platform that matches customers with trusted local halwai vendors, ensuring memorable experiences tailored to every budget and taste.
                        </div>
                        <div className="text-4xl sm:text-5xl leading-snug md:text-6xl pixel text-left text-[#8A3E1D]"
                        >
                            Mission
                        </div>
                    
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About