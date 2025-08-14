import React from 'react'

const Terms = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full gap-10'
            style={{
                padding: 'clamp(1rem, 6vw, 300rem) 0'
            }}
        >
            <div className="flex flex-col gap-8 w-[90%] md:w-[80%]">
                <div className="flex flex-col">
                    <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-center text-[#8A3E1D]">
                        TERMS AND CONDITIONS
                    </div>
                    <div className="text-[1rem] sm:text-xl leading-snug md:text-xl pixel text-center text-[#EB8B23]">
                        Last updated July 13, 2025
                    </div>
                </div>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium">
                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-3">AGREEMENT TO OUR LEGAL TERMS</h2>
                        <p className="mb-4">We are Re-Shagun hospitality private limited, doing business as Mera halwai.com ('Company', 'we', 'us', or 'our'), a company registered in India at House number 1034 mahaveer Nagar 2nd kota, Jaipur, Rajasthan 324005.</p>
                        <p>We operate the website <span className="text-[#EB8B23] font-semibold">https://www.merahalwai.com/</span> (the 'Site'), the mobile application merahalwai.com (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-3">USER SIDE</h2>
                        <p className="mb-4">Mera halwai.com is online platform for bulk food, you can book your catering service via India's online platform (mera halwai.com). You can customise your number of guest in this application. You can pay online (UPI, CREDIT CARD, DEBIT CARD OTHER PAYMENT PLATFORM).</p>
                        <p className="mb-4">You can choose your category according to your events bronze for the middle budget, silver for the upper middle budget and gold for the premium budget.</p>
                        <p className="mb-4">You can customise your menu according to your events like birthday party, wedding, baby shower, engagement retirement, corporate party, kitty parties, funeral and more ect ect.</p>
                        <p>You can choose your food catering vendor at your city location/ out side the location. You can set your meal items limit and price according to your event size.</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-3">VENDOR SIDE</h2>
                        <p className="mb-4">You can received online catering order and full fill. Catering vendor can received payment from merahalwai.com one day before of the event date but if any type of bank holidays, national holiday, war, any time of lockdown situation, so company will pay the payment according to bank open day / gov of India's T&C.</p>
                        <p>If vendor denies after the order acceptance reasonable percentage deduct from principal amount upto 1%-10%</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl pixel text-[#8A3E1D] mb-3">CONTACT US</h2>
                        <p className="mb-4">You can contact us by phone at <span className="text-[#EB8B23] font-semibold">7300321034</span>, email at <span className="text-[#EB8B23] font-semibold">merahalwai.com@gmail.com</span>, or by mail to House number 1034 mahaveer Nagar 2nd kota, Jaipur, Rajasthan 324005, India.</p>
                        <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Re-Shagun hospitality private limited, concerning your access to and use of the Services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms