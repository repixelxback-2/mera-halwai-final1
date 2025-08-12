'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
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
    const detailsRef = useRef(null)
    const currentDetailRef = useRef(0)

    useEffect(() => {
        const container = containerRef.current
        const detailsContainer = detailsRef.current
        
        if (!container || !detailsContainer) return

        // Create timeline for the scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: detailsContainer,
                onUpdate: (self) => {
                    // Calculate which detail should be active based on scroll progress
                    const progress = self.progress
                    const newIndex = Math.min(Math.floor(progress * Details.length), Details.length - 1)
                    
                    if (newIndex !== currentDetailRef.current) {
                        currentDetailRef.current = newIndex
                        updateDetail(newIndex)
                    }
                }
            }
        })

        // Function to update the active detail with smooth transitions
        const updateDetail = (index) => {
            const detail = Details[index]
            
            // Animate out current content
            gsap.to(['.detail-icon', '.detail-title', '.detail-queue', '.detail-desc1', '.detail-desc2'], {
                opacity: 0,
                y: 20,
                duration: 0.3,
                stagger: 0.05,
                onComplete: () => {
                    // Update content
                    document.querySelector('.detail-icon').src = detail.icon
                    document.querySelector('.detail-title').textContent = detail.title
                    document.querySelector('.detail-queue').src = detail.queue
                    document.querySelector('.detail-desc1').textContent = detail.desc1
                    document.querySelector('.detail-desc2').textContent = detail.desc2
                    
                    // Animate in new content
                    gsap.fromTo(['.detail-icon', '.detail-title', '.detail-queue', '.detail-desc1', '.detail-desc2'], 
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 }
                    )
                }
            })
        }

        return () => {
            ScrollTrigger.killAll()
        }
    }, [])

    return (
        <div 
            ref={containerRef}
            className='w-full relative'
            style={{ height: '400vh' }} // Make container tall enough for scroll
        >
            <div className='w-full h-screen flex justify-center sticky top-0'>
                <div className="w-[80%] absolute flex">
                    <Image
                        src="/branch.svg"
                        alt="home3"
                        width={1000}
                        height={1000}
                        className='w-full h-full'
                    />
                </div>

                <div 
                    ref={detailsRef}
                    className="flex w-[80%] z-50 relative justify-end"
                >
                    <div className="w-1/2">
                        <div className="flex flex-col gap-20"
                            style={{
                                padding: "clamp(1rem,4vw,200rem)"
                            }}
                        >
                            <div className="text-2xl leading-snug sm:text-3xl md:text-5xl pixel text-left text-[#fff]">
                                How We Make Every Occasion Sweeter
                            </div>

                            <div className="flex gap-5">
                                <Image
                                    src="/point.svg"
                                    alt="home3"
                                    width={1000}
                                    height={1000}
                                    className='h-full w-auto'
                                />
                                <div className="flex gap-6 flex-col">
                                    {/* Dynamic detail content */}
                                    <div className="flex justify-between gap-3">
                                        <Image
                                            src={Details[0].icon}
                                            alt="detail icon"
                                            width={1000}
                                            height={1000}
                                            className='h-full w-auto detail-icon'
                                        />

                                        <div className="text-white text-3xl font-semibold inter detail-title">
                                            {Details[0].title}
                                        </div>

                                        <Image
                                            src={Details[0].queue}
                                            alt="detail queue"
                                            width={1000}
                                            height={1000}
                                            className='h-full w-auto detail-queue'
                                        />
                                    </div>

                                    <div className="text-white inter italic text-xl detail-desc1">
                                        {Details[0].desc1}
                                    </div>

                                    <div className="text-white inter italic text-xl detail-desc2">
                                        {Details[0].desc2}
                                    </div>
                                </div>
                            </div>

                            <Button text={"Join Waitlist"} bgcolor={"#8A3E1D"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3