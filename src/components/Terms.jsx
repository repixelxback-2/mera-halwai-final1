'use client';

import React from 'react';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Terms = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full gap-10'
            style={{
                padding: 'clamp(2rem, 8vw, 300rem) 0'
            }}
        >
            <div className="flex flex-col gap-10 w-[90%] md:w-[80%]">
                <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.2}>
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl sm:text-3xl leading-snug md:text-5xl pixel text-center text-[#8A3E1D]">
                            TERMS OF SERVICE
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            Last updated July 13, 2025
                        </div>
                    </div>
                </ScrollReveal>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium">
                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.3}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
                            <p className="mb-4">We are Mera Halwai ('Company', 'we', 'us', or 'our').</p>
                            <p className="mb-4">We operate the website merahalwai.com (the 'Site'), the mobile application Mera Halwai (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').</p>
                            <p className="mb-4">You can contact us by email at info@merahalwai.com or by mail to 123 Main Street, New Delhi, Delhi 110001, India.</p>
                            <p className="mb-4">These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Mera Halwai, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.4}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-4">USER REGISTRATION</h2>
                            <p className="mb-4">You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.5}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-4">PROHIBITED ACTIVITIES</h2>
                            <p className="mb-4">You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Terms;