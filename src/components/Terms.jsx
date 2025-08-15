'use client';

import React from 'react';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Terms = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full'
            style={{
                padding: 'clamp(3rem, 8vw, 6rem) 0',
                gap: 'clamp(2.5rem, 5vw, 4rem)'
            }}
        >
            <div className="flex flex-col w-[90%] md:w-[80%]" style={{ gap: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.2}>
                    <div className="flex flex-col" style={{ gap: 'clamp(0.8rem, 1.5vw, 1.2rem)' }}>
                        <div className="text-2xl sm:text-3xl leading-snug md:text-5xl pixel text-center text-[#8A3E1D]">
                            TERMS OF SERVICE
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            Last updated July 13, 2025
                        </div>
                    </div>
                </ScrollReveal>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium" 
                    style={{ gap: 'clamp(2rem, 3vw, 2.5rem)' }}
                >
                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.3}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                            >
                                AGREEMENT TO OUR LEGAL TERMS
                            </h2>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    We are Mera Halwai ('Company', 'we', 'us', or 'our').
                                </p>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    We operate the website merahalwai.com (the 'Site'), the mobile application Mera Halwai (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
                                </p>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    You can contact us by email at info@merahalwai.com or by mail to 123 Main Street, New Delhi, Delhi 110001, India.
                                </p>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Mera Halwai, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
                                </p>
                                <div className="bg-[#EB8B23]/10 rounded-lg border-l-4 border-[#EB8B23]" 
                                    style={{ padding: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                                >
                                    <p className="font-semibold text-[#8A3E1D]">
                                        <strong>IMPORTANT:</strong> IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.4}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                            >
                                USER REGISTRATION
                            </h2>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password.
                                </p>
                                <p>
                                    We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.5}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                            >
                                PROHIBITED ACTIVITIES
                            </h2>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    You may not access or use the Services for any purpose other than that for which we make the Services available.
                                </p>
                                <p>
                                    The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.6}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                            >
                                CONTACT INFORMATION
                            </h2>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    If you have any questions about these Terms of Service, you can contact us:
                                </p>
                                <div className="flex flex-col" style={{ gap: 'clamp(0.6rem, 1vw, 0.8rem)' }}>
                                    <div className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full"></div>
                                        <span>By email: info@merahalwai.com</span>
                                    </div>
                                    <div className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full"></div>
                                        <span>By mail: 123 Main Street, New Delhi, Delhi 110001, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Terms;