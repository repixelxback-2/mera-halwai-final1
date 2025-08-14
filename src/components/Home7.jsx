import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Home7 = () => {
    return (
        <div className='w-full h-full flex justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"
            }}
        >
            <div className="flex flex-col gap-10 items-center w-[100%] h-full">
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-[#FF0000] text-center md:text-right text-xl inter font-medium w-full">
                        Testimonials
                    </div>
                    <div className="text-xl w-full sm:text-5xl leading-snug md:text-5xl pixel text-center md:text-right text-[#8A3E1D]"
                    >
                        Sweet words from happy customers
                    </div>
                </div>


                <div className="w-full justify-center grid grid-row-3 md:grid-cols-3 items-center gap-5 relative h-full ">

                    <Image
                        src="/c1.svg"
                        alt="home3"
                        width={400}
                        height={400}
                        className='w-96 md:w-full  relative z-20 shadow-2xl   shadow-black/20  rounded-4xl h-full'
                    />
                    <Image
                        src="/c2.svg"
                        alt="hme3"
                        width={400}
                        height={400}
                        className='w-full relative z-20  shadow-2xl shadow-black/20  rounded-4xl h-full'
                    />
                    <Image
                        src="/c3.svg"
                        alt="home3"
                        width={400}
                        height={400}
                        className='w-full relative z-20 shadow-2xl  shadow-black/20  rounded-4xl h-fit'
                    />
                </div>

            </div>

        </div>
    )
}

export default Home7
