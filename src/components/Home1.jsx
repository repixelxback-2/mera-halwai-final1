import React from 'react'
import Button from './Button'
import Available from './Available'
import Image from 'next/image'
import { ArrowDown, ArrowDownAZ, ChevronDown } from 'lucide-react'

const Home1 = () => {
    return (
        <div className='w-full relative  h-[60vh] flex flex-col justify-center items-center'>
            <div className="absolute left-0 -top-[12%]">
                <Image
                    src="/bg-khana1.svg"
                    alt="hero"
                    width={100}
                    height={100}
                    style={{
                        width: 'clamp(10rem,6vw,200rem)',
                        height: "auto"
                    }}
                />
            </div>

             <div className="absolute right-0 bottom-[0%]">
                <Image
                    src="/bg-khana2.svg"
                    alt="hero"
                    width={100}
                    height={100}
                    style={{
                        width: 'clamp(10rem,10vw,200rem)',
                        height: "auto"
                    }}
                />
            </div>
            <div className="flex relative flex-col items-center gap-7 w-[80%] h-fit ">



                <div className="absolute left-[16%] -top-[12%]">
                    <Image
                        src="/khana1.svg"
                        alt="hero"
                        width={100}
                        height={100}
                        style={{
                            width: 'clamp(5rem,9vw,200rem)',
                            height: "auto"
                        }}
                    />
                </div>

                <div className="absolute right-[14%] -top-[12%]">
                    <Image
                        src="/khana2.svg"
                        alt="hero"
                        width={100}
                        height={100}
                        style={{
                            width: 'clamp(5rem,9vw,200rem)',
                            height: "auto"
                        }}
                    />
                </div>

                <div className="">
                    <div className="text-2xl sm:text-4xl md:text-6xl pixel text-center text-[#8A3E1D]"
                    >
                        Your Perfect Event,
                    </div>
                    <div className="text-2xl sm:text-4xl md:text-6xl text-center pixel text-[#EC8A25]">
                        Catered to Perfection
                    </div>
                </div>

                <div className="text-[#8A3E1D] text-center text-xl inter font-medium">
                    Seamless discovery of trusted vendors that match your taste, budget, and vibe.
                </div>

                <Button text="Get Started" bgcolor="#EC8A25" />

                <Available />
            </div>
            <div className="border-4 absolute bottom-0 border-[#EC8A25]  rounded-full"
            style={{
                padding: 'clamp(0.5rem,0.5vw,200rem)',
            }}
            >

                <ChevronDown color='#EC8A25' size={40}/>
            </div>



        </div>
    )
}

export default Home1;