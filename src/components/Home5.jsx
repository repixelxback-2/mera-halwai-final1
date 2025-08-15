'use client';

import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { ScrollReveal } from '@/utils/scrollAnimations'

const Home5 = () => {
    return (
        <div className='w-full h-full md:h-[90vh] flex justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"
            }}
        >
            <div className="flex flex-col items-center w-[90%] gap-10 md:gap-10 h-full">
                <ScrollReveal direction="up" distance={30} duration={0.7} delay={0.2}>
                    <div className="text-[#FF0000] text-center md:text-left text-xl inter font-medium w-full translate-y-6 ">
                        How it works
                    </div>
                </ScrollReveal>
                
                <ScrollReveal direction="up" distance={40} duration={0.8} delay={0.3}>
                    <div className="text-2xl w-full sm:text-5xl leading-snug md:text-5xl pixel text-center md:text-left text-[#8A3E1D]">
                        Your Event Journey, Simplified
                    </div>
                </ScrollReveal>

                <div className="w-full justify-center flex flex-col md:flex-row items-center gap-5 relative h-full md:h-[90%]">
                    <div className="flex absolute w-full z-10 justify-center h-[100%]">
                        <ScrollReveal direction="right" distance={60} duration={1} delay={0.4}>
                            <Image
                                src="/arrow.svg"
                                alt="home3"
                                width={100}
                                height={100}
                                className=' w-[100%] rotate-90 md:w-[70%] md:rotate-0 md:h-[40vh] h-full'
                            />
                        </ScrollReveal>
                    </div>
                    
                    <ScrollReveal direction="up" distance={40} duration={0.7} className='w-full md:w-1/3' delay={0.5}>
                        <Image
                            src="/a1.svg"
                            alt="home3"
                            width={400}
                            height={400}
                            className='w-full md:w-full relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-fit'
                        />
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" distance={40} duration={0.7} className='w-full md:w-1/3' delay={0.7}>
                        <Image
                            src="/a2.svg"
                            alt="home3"
                            width={400}
                            height={400}
                            className='w-full md:w-full relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-fit'
                        />
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" distance={40} duration={0.7} className='w-full md:w-1/3' delay={0.9}>
                        <Image
                            src="/a3.svg"
                            alt="home3"
                            width={400}
                            height={400}
                            className='w-full md:w-full relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-fit'
                        />
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" distance={30} duration={0.6} delay={1}>
                    <Button text={"Get Started Now"} bgcolor={"#8A3E1D"} />
                </ScrollReveal>
            </div>
        </div>
    )
}

export default Home5