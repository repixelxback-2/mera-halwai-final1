'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Details = [
    {
        icon: "/icons/1.svg",
        title: "Curated Menus, Fully Customizable",
        queue: "/icons/d1.svg",
        desc1: "→ No more starting from scratch—just pick, personalize, and book.",
        desc2: "Choose pre-set meal packages and tweak them to match your guest count, event type, or dietary needs.",
    },
    {
        icon: "/icons/2.svg",
        title: "Smart Filters to Find the Right Fit",
        queue: "/icons/d2.svg",
        desc1: "→ No scrolling endlessly—just set your filters and go.",
        desc2: "Sort vendors by date, cuisine, guest size, or occasion to get exactly what you need—fast.",
    },
    {
        icon: "/icons/3.svg",
        title: "Pay Your Way, With Transparency",
        queue: "/icons/d3.svg",
        desc1: "→ More control, less stress.",
        desc2: "Split or pay in full—flexible payment options for any budget or group plan.",
    },
    {
        icon: "/icons/4.svg",
        title: "Live Booking Updates & In-App Support",
        queue: "/icons/d4.svg",
        desc1: "→ Stay informed, stay confident.",
        desc2: "Track your order in real-time and chat with support right from the app.",
    },
]

const Home3 = () => {
    const containerRef = useRef(null)
    const stickyRef = useRef(null)
    const [currentDetail, setCurrentDetail] = useState(0)

 useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflowX
    
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overflowX = 'hidden'

    const container = containerRef.current
    const sticky = stickyRef.current

    if (!container || !sticky) return

    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
            trigger.kill()
        }
    })

    const createScrollTrigger = () => {
        ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            pin: sticky,
            pinSpacing: false,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const progress = self.progress
                
                // Add debugging
                console.log('Progress:', progress)
                
                let newIndex
                if (progress <= 0.1) { // Give more room for the first item
                    newIndex = 0
                } else if (progress >= 0.9) { // Give more room for the last item
                    newIndex = Details.length - 1
                } else {
                    // Divide the remaining progress (0.1 to 0.9) among middle items
                    const adjustedProgress = (progress - 0.1) / 0.8
                    newIndex = Math.round(adjustedProgress * (Details.length - 2)) + 1
                }

                console.log('New index:', newIndex)

                // Use callback form to avoid stale closure
                setCurrentDetail(prev => {
                    console.log('Previous detail:', prev, 'New index:', newIndex)
                    if (newIndex !== prev) {
                        console.log('Updating to index:', newIndex)
                        return newIndex
                    }
                    return prev
                })
            },
            onRefresh: () => {
                document.body.style.overflowX = 'hidden'
                document.documentElement.style.overflowX = 'hidden'
            }
        })
    }

    const timeoutId = setTimeout(() => {
        createScrollTrigger()
        ScrollTrigger.refresh()
    }, 100)

    return () => {
        clearTimeout(timeoutId)
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.trigger === container) {
                trigger.kill()
            }
        })
        document.body.style.overflow = originalBodyOverflow
        document.documentElement.style.overflowX = originalHtmlOverflow
    }
}, []) // Remove currentDetail from dependencies

    // Animate detail changes
    useEffect(() => {
        const detailElements = ['.detail-icon', '.detail-title', '.detail-queue', '.detail-desc1', '.detail-desc2']

        gsap.fromTo(detailElements,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }
        )
    }, [currentDetail])

    return (
        <div
            ref={containerRef}
            className='w-full h-full md:h-[450vh] relative overflow-x-hidden'
        >
            <div
                ref={stickyRef}
                className='w-full hidden h-screen md:flex justify-center items-start relative overflow-x-hidden'
            >
                {/* Background Image - Full container size */}
                <div className="absolute inset-0 w-full h-full flex justify-center items-start overflow-hidden">
                    <Image
                        src="/branch.webp"
                        alt="home3"
                        width={100}
                        height={100}
                        className='w-[80%] h-auto max-w-none'
                        priority // Add priority for initial load
                    />
                </div>

                <div className="flex w-[80%] max-w-7xl mx-auto px-4 lg:px-8 z-50 relative justify-end items-center h-[90%]">
                    <div className="w-[50%] h-fit ml-auto overflow-hidden">
                        <div 
                            className="flex h-full text-white flex-col gap-8 lg:gap-20 overflow-hidden"
                            style={{
                                padding: "clamp(1rem,1vw,200rem) clamp(1rem,4vw,200rem) clamp(1rem,1vw,200rem)"
                            }}
                        >
                            <div className="text-xl
                            sm:text-xl leading-snug md:text-2xl lg:text-3xl xl:text-4xl pixel text-center lg:text-left text-[#ffffff]">
                                How We Make Every Occasion Sweeter
                            </div>

                            {/* Content Section */}
                            <div className="flex gap-4 lg:gap-5 justify-center lg:justify-start overflow-hidden">
                                <Image
                                    src="/point.svg"
                                    alt="home3"
                                    width={50}
                                    height={50}
                                    className='h-[60%] w-auto flex-shrink-0'
                                />
                                <div className="flex gap-4 lg:gap-6 flex-col flex-1 min-w-0 overflow-hidden">
                                    {/* Dynamic detail content */}
                                    <div className="flex justify-between w-full gap-3 items-center overflow-hidden">
                                        <Image
                                            src={Details[currentDetail].icon}
                                            alt="detail icon"
                                            width={60}
                                            height={60}
                                            className='h-10 lg:h-16 w-auto detail-icon flex-shrink-0'
                                        />

                                        <div className="text-white text-lg w-[50%] lg:text-2xl xl:text-2xl font-semibold inter detail-title flex-1 px-2 lg:px-4 text-center lg:text-left overflow-hidden">
                                            {Details[currentDetail].title}
                                        </div>

                                        <Image
                                            src={Details[currentDetail].queue}
                                            alt="detail queue"
                                            width={60}
                                            height={60}
                                            className='h-10 lg:h-12 w-auto detail-queue flex-shrink-0'
                                        />
                                    </div>

                                    <div className="text-white inter italic text-base lg:text-lg xl:text-xl detail-desc1 text-center lg:text-left overflow-hidden">
                                        {Details[currentDetail].desc1}
                                    </div>

                                    <div className="text-white inter italic text-base lg:text-lg xl:text-xl detail-desc2 text-center lg:text-left overflow-hidden">
                                        {Details[currentDetail].desc2}
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center lg:justify-start">
                                <Button text={"Join Waitlist"} bgcolor={"#8A3E1D"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex w-full md:hidden relative h-fit overflow-x-hidden">
                <div className="w-full bg-black py-20 flex justify-center">
                    <div 
                        className="absolute w-full h-full bg-cover z-10 opacity-30"
                        style={{
                            padding: "clamp(5rem,4vw,200rem) clamp(1rem,4vw,200rem)",
                            backgroundImage: "url('/mb.webp')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                    />

                    <div 
                        className="flex flex-col z-50 relative items-center w-[80%] gap-12 "
                        style={{
                            padding: "clamp(5rem,2vw,200rem) 0"
                        }}
                    >
                        <div className="text-xl max-w-52 leading-snug sm:text-3xl md:text-3xl pixel md:text-left text-[#fff] text-center">
                            The Smarter Way to Sweeten Your Celebrations
                        </div>

                        {Details.map((detail, index) => (
                            <div key={index} className="flex gap-5 w-full max-w-full ">
                                <Image
                                    src="/point.svg"
                                    alt="home3"
                                    width={50}
                                    height={50}
                                    className='h-42 w-auto flex-shrink-0'
                                />
                                <div className="flex gap-6 flex-col flex-1 min-w-0">
                                    <div className="flex justify-start gap-3 ">
                                        <div className="flex gap-3 flex-1 min-w-0">
                                            <Image
                                                src={detail.icon}
                                                alt="detail icon"
                                                width={40}
                                                height={40}
                                                className='h-10 w-auto flex-shrink-0'
                                            />

                                            <div className="text-white text-sm font-semibold inter max-w-[35vw] leading-tight">
                                                {detail.title}
                                            </div>
                                        </div>

                                        <Image
                                            src={detail.queue}
                                            alt="detail queue"
                                            width={36}
                                            height={36}
                                            className='h-9  w-auto flex-shrink-0'
                                        />
                                    </div>

                                    <div className="text-white w-72 inter italic text-sm ">
                                        {detail.desc1}
                                    </div>

                                    <div className="text-white w-72 inter italic text-sm ">
                                        {detail.desc2}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex w-full justify-center">
                            <Button text={"Join Waitlist"} bgcolor={"#8A3E1D"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3