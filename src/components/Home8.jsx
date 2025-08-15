import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Home8 = () => {
    return (
        <div id="become-vendor" className='w-full h-full flex md:flex-row flex-col justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"

            }}
        >
            <div className="flex md:flex-row flex-col justify-center  w-full md:w-[90%] h-fit">
                <div className="flex flex-col md:items-start items-center justify-center gap-5 md:gap-10 w-full md:w-[50%]">
                    <div className="text-xl w-[90%]  md:w-full sm:text-2xl leading-snug md:text-4xl pixel text-center md:text-left text-[#8A3E1D]"
                    >
                        Find the perfect caterer,{","} <br /> without the calls and chaos.
                    </div>


                    <div className="text-[#3C3C3C] w-[90%] max-w-md md:w-full text-center md:text-left text-lg inter font-semibold">
                        Everything you need for stress-free catering, right on your phone.
                    </div>
                    <div className="w-full md:w-[40%] flex md:hidden items-center  justify-center   h-full">
                        <Image
                            alt='h'
                            src="/qr-ph.svg"
                            width={400}
                            height={400}
                            className='w-fit md:w-full h-68 md:h-[60vh]'

                        />
                        <Image
                            alt='h'
                            src="/qr.svg"
                            width={400}
                            height={400}
                            className='w-42 md:w-full  md:h-[50vh]'

                        />

                    </div>

                    <Button text={"Let's Make You Happy"} bgcolor={"#8A3E1D"} />
                </div>

                <div className="hidden w-full md:w-[40%] md:flex items-center    h-full">
                    <Image
                        alt='h'
                        src="/qr.svg"
                        width={400}
                        height={400}
                        className='w-42 md:w-full  md:h-[50vh]'

                    />
                    <Image
                        alt='h'
                        src="/qr-ph.svg"
                        width={400}
                        height={400}
                        className='w-42 md:w-full h-68 md:h-[60vh]'

                    />
                </div>
            </div>
        </div>
    )
}

export default Home8