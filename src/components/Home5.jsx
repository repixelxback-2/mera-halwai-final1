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
            <div className="flex flex-col  items-center w-[90%] gap-10 md:gap-10 h-full">

                <div className="text-[#FF0000] text-center md:text-left text-xl inter font-medium w-full translate-y-6 ">
                    How it works
                </div>
                <div className="text-2xl w-full sm:text-5xl leading-snug md:text-5xl pixel text-center md:text-left text-[#8A3E1D]"
                >
                    Your Event Journey, Simplified
                </div>


                <div className="w-full justify-center flex flex-col md:flex-row items-center gap-5 relative h-full md:h-[90%]">
                    <div className="flex absolute w-full z-10 justify-center  h-[100%]">

                        <Image
                            src="/arrow.svg"
                            alt="home3"
                            width={100}
                            height={100}
                            className=' w-[100%] rotate-90 md:w-[70%] md:rotate-0 md:h-[40vh] h-full'
                        />
                    </div>
                    <Image
                        src="/a11.svg"
                        alt="home3"
                        width={400}
                        height={400}
                        className='w-full md:w-1/3 relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-fit'
                    />
                    <Image
                        src="/a2.svg"
                        alt="home3"
                        width={400}
                        height={400}
                        className='w-full md:w-1/3 relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-fit'
                    />
                    <Image
                        src="/a3.svg"
                        alt="home3"
                        width={400}
                        height={400}
                        className='w-full md:w-1/3 relative z-20 bg-gradient-to-l from-[#F1EDE2] to-[#fffefc] rounded-4xl md:h-fit'
                    />
                </div>

                <Button text={"Get Started Now"} bgcolor={"#8A3E1D"} />

            </div>

        </div>
    )
}

export default Home5