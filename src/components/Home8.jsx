import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Home8 = () => {
    return (
        <div id="become-vendor" className='w-full h-full flex xl:flex-row flex-col justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"

            }}
        >
            <div className="flex xl:flex-row flex-col justify-center  w-full xl:w-[90%] h-fit">
                <div className="flex flex-col xl:items-start items-center justify-center gap-5 xl:gap-10 w-full xl:w-[50%]">
                    <div className="text-xl w-[90%]  xl:w-full sm:text-5xl leading-snug xl:text-5xl pixel text-center xl:text-left text-[#8A3E1D]"
                    >
                        Find the perfect caterer,{","} <br /> without the calls and chaos.
                    </div>


                    <div className="text-[#3C3C3C] w-[90%] max-w-md xl:w-full text-center xl:text-left text-lg md:text-2xl inter font-semibold">
                        Everything you need for stress-free catering, right on your phone.
                    </div>
                    <div className="w-full xl:w-[50%] flex xl:hidden items-center  justify-center   h-full">
                        <Image
                            alt='h'
                            src="/qr-ph.svg"
                            width={400}
                            height={400}
                            className='w-fit xl:w-full h-68 md:h-96 xl:h-[60vh]'

                        />
                        <Image
                            alt='h'
                            src="/qr.svg"
                            width={400}
                            height={400}
                            className='w-42 xl:w-full md:h-96  xl:h-[50vh]'

                        />

                    </div>

                    <Button text={"Let's Make You Happy"} bgcolor={"#8A3E1D"} />
                </div>

                <div className="hidden w-full xl:w-[40%] xl:flex items-center    h-full">
                    <Image
                        alt='h'
                        src="/qr.svg"
                        width={400}
                        height={400}
                        className='w-42 xl:w-full  xl:h-[50vh]'

                    />
                    <Image
                        alt='h'
                        src="/qr-ph.svg"
                        width={400}
                        height={400}
                        className='w-42 xl:w-full h-68 xl:h-[60vh]'

                    />
                </div>
            </div>
        </div>
    )
}

export default Home8