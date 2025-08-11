import Image from 'next/image'
import React from 'react'

const Home2 = () => {
    return (
        <div className='w-full flex justify-end items-center flex-col h-[80vh]'>

            <div className="w-[80%] relative h-[90%] flex justify-between rounded-4xl bg-[#EC8A25]">
                <div className="flex flex-col justify-between"
                style={{
                    padding: "clamp(0.5rem,3vw,200rem) 0 clamp(0.5rem,3vw,200rem) clamp(0.5rem,6vw,200rem) "

                }}
                >
                    <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-left text-[#fff]"
                    >
                        The Smarter Way to{","} <br /> Sweeten Your Celebrations
                    </div>

                </div>
                <Image
                    src="/mp.svg"
                    alt="hero"
                    width={100}
                    height={100}
                    className='h-full absolute right-0 w-auto'
                />
            </div>

        </div>
    )
}

export default Home2