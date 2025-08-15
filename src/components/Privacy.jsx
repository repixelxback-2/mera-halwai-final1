'use client';

import React from 'react';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Privacy = () => {
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
                            PRIVACY POLICY
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            Last updated July 13, 2025
                        </div>
                    </div>
                </ScrollReveal>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium">
                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.3}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-4">COLLECTING AND USING YOUR PERSONAL DATA</h2>
                            <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-3">Types of Data Collected</h3>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.4}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-3">Personal Data</h3>
                            <p className="mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                            <ul className=" pl-8 mb-4 space-y-2">
                                <li>→ Email address</li>
                                <li>→ First name and last name</li>
                                <li>→ Phone number</li>
                                <li>→ Address, State, Province, ZIP/Postal code, City</li>
                                <li>→ Usage Data</li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.5}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-3">Usage Data</h3>
                            <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
                            <p className="mb-4">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                            <p className="mb-4">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                            <p className="mb-4">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.6}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-3">Information from Third-Party Social Media Services</h3>
                            <p className="mb-4">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                            <ul className=" pl-8 mb-4 space-y-2">
                                <li>→ Google</li>
                                <li>→ Facebook</li>
                                <li>→ Instagram</li>
                                <li>→ Twitter</li>
                                <li>→ LinkedIn</li>
                            </ul>
                            <p className="mb-4">If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                            <p className="mb-4">You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.7}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-3">Information Collected while Using the Application</h3>
                            <p className="mb-4">While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
                            <ul className=" pl-8 mb-4 space-y-2">
                                <li>→ Information regarding your location</li>
                                <li>→ Information from your Device's phone book (contacts list)</li>
                                <li>→ Pictures and other information from your Device's camera and photo library</li>
                            </ul>
                            <p className="mb-4">We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
                            <p className="mb-4">You can enable or disable access to this information at any time, through Your Device settings.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.8}>
                        <div className="mb-8 bg-[#FFF9F0] rounded-xl shadow-sm" style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>
                            <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-3">Use of Your Personal Data</h3>
                            <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
                            <ul className=" pl-8 mb-4 space-y-2">
                                <li> → To provide and maintain our Service, including to monitor the usage of our Service.</li>
                                <li>→ To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Privacy;