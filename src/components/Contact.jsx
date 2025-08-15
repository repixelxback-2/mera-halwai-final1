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
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        alert('Thank you for your message! We will get back to you soon.');
    };

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
                            CONTACT US
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            We'd love to hear from you
                        </div>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row gap-10 w-full">
                    {/* Contact Information */}
                    <ScrollReveal direction="left" distance={30} duration={0.8} delay={0.3} className="w-full lg:w-1/2">
                        <div className="bg-[#FFF9F0] rounded-xl shadow-sm h-full" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-6">GET IN TOUCH</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#EB8B23] p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]">Phone</h3>
                                        <p className="text-[#8A3E1D] inter">+91 7300321034</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#EB8B23] p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]">Email</h3>
                                        <p className="text-[#8A3E1D] inter">merahalwai.com@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#EB8B23] p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]">Address</h3>
                                        <p className="text-[#8A3E1D] inter">House number 1034, Mahaveer Nagar 2nd, Kota, Rajasthan 324005, India</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-10">
                                <h3 className="text-lg pixel text-[#8A3E1D] mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="bg-[#EB8B23] p-3 rounded-full hover:bg-[#8A3E1D] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-[#EB8B23] p-3 rounded-full hover:bg-[#8A3E1D] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-[#EB8B23] p-3 rounded-full hover:bg-[#8A3E1D] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="right" distance={30} duration={0.8} delay={0.4} className="w-full lg:w-1/2">
                        <div className="bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-6">SEND US A MESSAGE</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-[#8A3E1D] mb-2 inter font-medium">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D]" 
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-[#8A3E1D] mb-2 inter font-medium">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D]" 
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-[#8A3E1D] mb-2 inter font-medium">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D]" 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-[#8A3E1D] mb-2 inter font-medium">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5" 
                                        className="w-full px-4 py-3 rounded-lg border border-[#EB8B23] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D]" 
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    style={{
                                        padding: "clamp(0.6rem,0.75vw,200rem) clamp(1rem,1vw,200rem)"
                                    }}
                                    className="bg-[#EB8B23] text-white  rounded-lg hover:bg-[#8A3E1D] transition-colors duration-300 pixel text-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Map Section */}
                <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.5}>
                    <div className="bg-[#FFF9F0] rounded-xl shadow-sm mt-8" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                        <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-6">FIND US</h2>
                        <div className="w-full h-[400px] rounded-lg overflow-hidden">
                            {/* Replace with actual map embed code */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-500">Google Maps will be embedded here</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default Contact;