import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Home5 = () => {
    return (
        <div className='w-full h-full md:h-[90vh]  flex justify-center'
            style={{
                padding: "clamp(1rem,5vw,200rem)"
            }}
        >
            <div className="flex flex-col  items-center w-[90%] gap-10 md:gap-0 h-full">

                <div className="text-[#FF0000] text-center md:text-left text-xl inter font-medium w-full translate-y-5">
                    How it works
                </div>
                <div className="text-2xl w-full sm:text-5xl leading-snug md:text-5xl pixel text-center md:text-left text-[#8A3E1D]"
                >
                    Your Event Journey, Simplified
                </div>


                <div className="w-full justify-center grid grid-rows-3 md:grid-cols-3 items-center gap-5 relative h-full md:h-[90%]">
                    <div className="flex absolute w-full z-10 justify-center  h-[100%]">

                        <Image
                            src="/arrow.svg"
                            alt="home3"
                            width={1000}
                            height={1000}
                            className=' w-[100%] rotate-90 md:w-[70%]  h-full'
                        />
                    </div>
                    <Image
                        src="/a1.svg"
                        alt="home3"
                        width={1000}
                        height={1000}
                        className='w-full relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-[40%]'
                    />
                    <Image
                        src="/a2.svg"
                        alt="home3"
                        width={1000}
                        height={1000}
                        className='w-full relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-[40%]'
                    />
                    <Image
                        src="/a3.svg"
                        alt="home3"
                        width={1000}
                        height={1000}
                        className='w-full relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-[40%]'
                    />
                </div>

                <Button text={"Get Started Now"} bgcolor={"#8A3E1D"} />

            </div>

        </div>
    )
}

export default Home5