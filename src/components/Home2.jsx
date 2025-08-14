import Image from 'next/image'
import React from 'react'
import Available from './Available'
import Button from './Button'

const Home2 = () => {
    return (
        <div className='w-full flex justify-end items-center flex-col md:h-[80vh] min-h-[80vh] '>

            <div className="w-[90%] md:flex relative h-full hidden justify-between rounded-4xl bg-[#EC8A25]">
                <div className="flex flex-col justify-between"
                    style={{
                        padding: "clamp(0.5rem,3vw,200rem) 0 clamp(0.5rem,3vw,200rem) clamp(0.5rem,6vw,200rem) "

                    }}
                >


                    <div className="text-[#fff] text-center md:text-left text-xl inter font-medium">
                        What is Mera Halwai
                    </div>
                    <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-center md:text-left text-[#fff]"
                    >
                        The Smarter Way to{","} <br /> Sweeten Your Celebrations
                    </div>


                    <div className="text-[#fff] max-w-md text-left text-md inter font-semibold">
                        Mera Halwai is a smart platform that connects you with trusted sweet shops and catering vendors for any event.
                    </div>


                    <div className="text-[#fff] max-w-md text-left text-md inter font-semibold">
                        Whether you're planning a wedding, festival, or house party, we help you find the perfect match based on your needs and budget
                    </div>


                    <div className="text-[#fff] max-w-md text-left text-md inter font-semibold">
                        Track your orders live and enjoy doorstep delivery—all with just a few taps.
                    </div>

                    <Available />

                    <Button text={"Get Started"} bgcolor={"#8A3E1D"} />

                </div>
                <Image
                    src="/mp.webp"
                    alt="hero"
                    width={100}
                    height={100}
                    className='h-full absolute right-0 w-auto'
                />
            </div>
            <div className=" md:hidden relative  flex w-[98%] h-full"
            style={{
                padding: "clamp(0.5rem,3vw,200rem)"

            }}
            >
            <Image
                    src="/mobile-app.webp"
                    alt="hero"
                    width={100}
                    height={100}
                    className='h-full w-full'
                />
                <div className="w-full absolute justify-center flex bottom-12">
                    <Button text={"Get Started"} bgcolor={"#8A3E1D"} />
                </div>
                </div>

        </div>
    )
}

export default Home2