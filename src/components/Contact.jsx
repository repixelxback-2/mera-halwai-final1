'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create email content
        const subject = `Contact Form Submission from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
        `.trim();
        
        // Create mailto URL
        const mailtoUrl = `mailto:merahalwai.com@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.location.href = mailtoUrl;
        
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

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
                            CONTACT US
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            We'd love to hear from you
                        </div>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row w-full"
                    style={{
                        gap: "clamp(2rem, 3vw, 3rem)"
                    }}
                >
                    {/* Contact Information */}
                    <ScrollReveal direction="left" distance={30} duration={0.8} delay={0.3} className="w-full lg:w-1/2">
                        <div className="bg-[#FFF9F0] rounded-xl flex flex-col shadow-lg h-full" 
                            style={{ 
                                gap: "clamp(1.5rem, 2.5vw, 2rem)", 
                                padding: 'clamp(2rem, 5vw, 3rem)' 
                            }}
                        >
                            <h2 className="text-2xl md:text-4xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}
                            >
                                GET IN TOUCH
                            </h2>
                            
                            <div className="flex flex-col"
                                style={{
                                    gap: "clamp(1.8rem, 2.5vw, 2.2rem)"
                                }}
                            >
                                <div className="flex items-start" style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    <div className="rounded-full" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#EB8B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div style={{ gap: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>
                                        <h3 className="text-lg pixel text-[#8A3E1D]" style={{ marginBottom: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>Phone</h3>
                                        <p className="text-[#8A3E1D] inter">+91 7300321034</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    <div className="rounded-full" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#EB8B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]" style={{ marginBottom: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>Email</h3>
                                        <p className="text-[#8A3E1D] inter">merahalwai.com@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    <div className="rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#EB8B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]" style={{ marginBottom: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>Address</h3>
                                        <p className="text-[#8A3E1D] inter">House number 1034, Mahaveer Nagar 2nd, Kota, Rajasthan 324005, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="right" distance={30} duration={0.8} delay={0.4} className="w-full lg:w-1/2">
                        <div className="bg-[#FFF9F0] flex flex-col rounded-xl shadow-lg" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)', 
                                gap: "clamp(1.5rem, 2.5vw, 2rem)" 
                            }}
                        >
                            <h2 className="text-2xl md:text-4xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}
                            >
                                SEND US A MESSAGE
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="flex flex-col"
                                style={{
                                    gap: "clamp(1.5rem, 2vw, 1.8rem)"
                                }}
                            >
                                <div>
                                    <label htmlFor="name" className="block text-[#8A3E1D] inter font-medium"
                                        style={{
                                            marginBottom: "clamp(0.6rem, 1vw, 0.8rem)"
                                        }}
                                    >
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        style={{
                                            padding: "clamp(0.8rem, 1.2vw, 1rem) clamp(1rem, 1.5vw, 1.2rem)"
                                        }}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D] focus:border-[#8A3E1D] transition-all duration-300" 
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-[#8A3E1D] inter font-medium"
                                        style={{
                                            marginBottom: "clamp(0.6rem, 1vw, 0.8rem)"
                                        }}
                                    >
                                        Your Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        style={{
                                            padding: "clamp(0.8rem, 1.2vw, 1rem) clamp(1rem, 1.5vw, 1.2rem)"
                                        }}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D] focus:border-[#8A3E1D] transition-all duration-300" 
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-[#8A3E1D] inter font-medium"
                                        style={{
                                            marginBottom: "clamp(0.6rem, 1vw, 0.8rem)"
                                        }}
                                    >
                                        Phone Number
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        style={{
                                            padding: "clamp(0.8rem, 1.2vw, 1rem) clamp(1rem, 1.5vw, 1.2rem)"
                                        }}
                                        name="phone" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D] focus:border-[#8A3E1D] transition-all duration-300" 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-[#8A3E1D] inter font-medium"
                                        style={{
                                            marginBottom: "clamp(0.6rem, 1vw, 0.8rem)"
                                        }}
                                    >
                                        Your Message
                                    </label>
                                    <textarea 
                                        id="message" 
                                        style={{
                                            padding: "clamp(0.8rem, 1.2vw, 1rem) clamp(1rem, 1.5vw, 1.2rem)",
                                            minHeight: "clamp(8rem, 12vw, 10rem)"
                                        }}
                                        name="message" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5" 
                                        className="w-full rounded-lg border-2 border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D] focus:border-[#8A3E1D] transition-all duration-300 resize-vertical" 
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    style={{
                                        padding: "clamp(1rem, 1.5vw, 1.2rem) clamp(2rem, 3vw, 2.5rem)",
                                        marginTop: "clamp(0.5rem, 1vw, 0.8rem)"
                                    }}
                                    className="text-[#fff] rounded-lg bg-[#8A3E1D] hover:bg-[#7A341A] transition-all duration-300 pixel text-lg font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Contact;