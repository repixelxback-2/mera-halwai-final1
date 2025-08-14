import React from 'react'

const Privacy = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full gap-10'
            style={{
                padding: 'clamp(1rem, 6vw, 300rem) 0'
            }}
        >
            <div className="flex flex-col gap-8 w-[90%] md:w-[80%]">
                <div className="flex flex-col">
                    <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-center text-[#8A3E1D]">
                        PRIVACY POLICY
                    </div>
                    <div className="text-[1rem] sm:text-xl leading-snug md:text-xl pixel text-center text-[#EB8B23]">
                        Last updated July 13, 2025
                    </div>
                </div>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium">
                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-3">COLLECTING AND USING YOUR PERSONAL DATA</h2>
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Types of Data Collected</h3>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Personal Data</h3>
                        <p className="mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Usage Data</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Usage Data</h3>
                        <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
                        <p className="mb-4">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                        <p className="mb-4">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                        <p className="mb-4">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Information from Third-Party Social Media Services</h3>
                        <p className="mb-4">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Google</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                        <p className="mb-4">If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                        <p className="mb-4">You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Information Collected while Using the Application</h3>
                        <p className="mb-4">While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Information regarding your location</li>
                            <li>Information from your Device's phone book (contacts list)</li>
                            <li>Pictures and other information from your Device's camera and photo library</li>
                        </ul>
                        <p className="mb-4">We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
                        <p className="mb-4">You can enable or disable access to this information at any time, through Your Device settings.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Tracking Technologies and Cookies</h3>
                        <p className="mb-4">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li><span className="font-semibold">Cookies or Browser Cookies:</span> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                            <li><span className="font-semibold">Web Beacons:</span> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
                        </ul>
                        <p className="mb-4">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
                        <p className="mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-3">
                            <li>
                                <span className="font-semibold">Necessary / Essential Cookies</span><br/>
                                Type: Session Cookies<br/>
                                Administered by: Us<br/>
                                Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                            </li>
                            <li>
                                <span className="font-semibold">Cookies Policy / Notice Acceptance Cookies</span><br/>
                                Type: Persistent Cookies<br/>
                                Administered by: Us<br/>
                                Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                            </li>
                            <li>
                                <span className="font-semibold">Functionality Cookies</span><br/>
                                Type: Persistent Cookies<br/>
                                Administered by: Us<br/>
                                Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl pixel text-[#EB8B23] mb-2">Use of Your Personal Data</h3>
                        <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                            <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy