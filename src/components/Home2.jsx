import Image from 'next/image'
import React from 'react'
import Available from './Available'
import Button from './Button'

const Home2 = () => {
    return (
        <div className="w-full h-full relative"
        style={{
            paddingTop: "clamp(0.5rem,8vh,200rem)"
        }}
        >
        <div className='w-full flex justify-end items-center flex-col 2xl:h-[80vh] xl:h-[85vh] h-fit md:min-h-[80vh] '
       
        >
            <Image
                src="/food.png"
                alt="hero"
                width={1000}
                height={1000}
                className='h-52 hidden xl:block absolute top-0 left-9 w-auto'
            />
            <div className="w-[85%] xl:flex relative h-full hidden justify-between rounded-4xl bg-[#EC8A25]">
                <div className="flex flex-col justify-between relative z-50"
                    style={{
                        padding: "clamp(0.5rem,3vw,200rem) 0 clamp(0.5rem,3vw,200rem) clamp(0.5rem,6vw,200rem) "

                    }}
                >


                    <div className="text-[#fff] 2xl:translate-y-5 text-center md:text-left text-xl inter font-medium">
                        What is Mera Halwai
                    </div>
                    <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-center md:text-left text-[#fff]"
                    >
                        The Smarter Way to{","} <br /> Sweeten Your Celebrations
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="text-[#fff] max-w-md text-left text-md inter font-semibold">
                            Mera Halwai is a smart platform that connects you with trusted sweet shops and catering vendors for any event.
                        </div>


                        <div className="text-[#fff] max-w-md text-left text-md inter font-semibold">
                            Whether you're planning a wedding, festival, or house party, we help you find the perfect match based on your needs and budget
                        </div>


                        <div className="text-[#fff] max-w-md text-left text-md inter font-semibold">
                            Track your orders live and enjoy doorstep delivery—all with just a few taps.
                        </div>
                    </div>
                    <Available />

                    <Button text={"Get Started"} bgcolor={"#8A3E1D"} />

                </div>
                <Image
                    src="/mpp.png"
                    alt="hero"
                    width={1000}
                    height={1000}
                    className='h-full absolute right-0 w-auto'
                />
            </div>
            <div className="xl:hidden relative  flex w-[98%] h-fit"
                style={{
                    padding: "clamp(0.5rem,3vw,200rem)"

                }}
            >
                <Image
                    src="/mobile-app.jpg"
                    alt="hero"
                    width={2000}
                    height={2000}
                    className='h-auto w-full'
                />

            </div>
            </div>
        </div>
    )
}

export default Home2