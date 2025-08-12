import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Home8 = () => {
    return (
        <div className='w-full h-full flex justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"

            }}
        >
            <div className="flex justify-center w-[80%] h-fit">
                <div className="flex flex-col justify-center gap-10 w-[50%]">
                    <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-left text-[#8A3E1D]"
                    >
                        Find the perfect caterer,{","} <br /> without the calls and chaos.
                    </div>


                    <div className="text-[#3C3C3C] max-w-md text-left text-xl inter font-semibold">
                        Everything you need for stress-free catering, right on your phone.
                    </div>

                    <Button text={"Let's Make You Happy"} bgcolor={"#8A3E1D"} />
                </div>

                <div className="w-[50%] flex items-center    h-full">
                    <Image
                        alt='h'
                        src="/qr.svg"
                        width={1000}
                        height={1000}
                        className='w-fit  h-[50vh]'

                    />
                    <Image
                        alt='h'
                        src="/qr-ph.svg"
                        width={1000}
                        height={1000}
                        className='w-fit h-[60vh]'

                    />
                </div>
            </div>
        </div>
    )
}

export default Home8