'use client';

import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { ScrollReveal } from '@/utils/scrollAnimations'

const Home8 = () => {
    return (
        <div className='w-full h-full flex md:flex-row flex-col justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"

            }}
        >
            <div className="flex md:flex-row flex-col justify-center w-full md:w-[90%] h-fit">
                <div className="flex flex-col md:items-start items-center justify-center gap-5 md:gap-10 w-full md:w-[50%]">
                    <ScrollReveal direction="left" distance={40} duration={0.8} delay={0.3}>
                        <div className="text-xl w-[90%] md:w-full sm:text-2xl leading-snug md:text-4xl pixel text-center md:text-left text-[#8A3E1D]">
                            Find the perfect caterer,{','} <br /> without the calls and chaos.
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="left" distance={30} duration={0.7} delay={0.5}>
                        <div className="text-[#3C3C3C] w-[90%] max-w-md md:w-full text-center md:text-left text-lg inter font-semibold">
                            Everything you need for stress-free catering, right on your phone.
                        </div>
                    </ScrollReveal>
                    
                    <div className="w-full md:w-[40%] flex md:hidden items-center justify-center h-full">
                        <ScrollReveal direction="up" distance={30} duration={0.7} delay={0.4}>
                            <Image
                                alt='h'
                                src="/qr-ph.svg"
                                width={400}
                                height={400}
                                className='w-fit md:w-full h-68 md:h-[60vh]'
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="up" distance={30} duration={0.7} delay={0.6}>
                            <Image
                                alt='h'
                                src="/qr.svg"
                                width={400}
                                height={400}
                                className='w-42 md:w-full md:h-[50vh]'
                            />
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.7}>
                        <Button text={"Let's Make You Happy"} bgcolor={"#8A3E1D"} />
                    </ScrollReveal>
                </div>

                <div className="hidden w-full md:w-[40%] md:flex items-center h-full">
                    <ScrollReveal direction="right" distance={30} duration={0.7} delay={0.4}>
                        <Image
                            alt='h'
                            src="/qr.svg"
                            width={400}
                            height={400}
                            className='w-42 md:w-full md:h-[50vh]'
                        />
                    </ScrollReveal>
                    <ScrollReveal direction="right" distance={30} duration={0.7} delay={0.6}>
                        <Image
                            alt='h'
                            src="/qr-ph.svg"
                            width={400}
                            height={400}
                            className='w-42 md:w-full h-68 md:h-[60vh]'
                        />
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Home8