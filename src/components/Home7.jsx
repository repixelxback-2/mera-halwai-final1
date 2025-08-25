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
                    <div className="text-[#FF0000] text-center xl:text-right text-xl inter font-medium w-full">
                        Testimonials
                    </div>
                    <div className="text-xl w-full sm:text-5xl leading-snug xl:text-5xl pixel text-center xl:text-right text-[#8A3E1D]"
                    >
                        Sweet words from happy customers
                    </div>
                </div>


                <div className="w-full justify-center grid grid-row-3 xl:grid-cols-3 items-center gap-5 relative h-full ">

                    <Image
                        src="/c1.png"
                        alt="home3"
                        width={400}
                        height={400}
                        className='w-full xl:w-full  relative z-20 shadow-2xl   shadow-black/20  rounded-4xl h-full'
                    />
                    <Image
                        src="/c2.png"
                        alt="hme3"
                        width={400}
                        height={400}
                        className='w-full relative z-20  shadow-2xl shadow-black/20  rounded-4xl h-full'
                    />
                    <Image
                        src="/c3.png"
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
