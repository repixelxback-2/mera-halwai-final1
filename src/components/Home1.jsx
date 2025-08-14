import React from 'react'
import Button from './Button'
import Available from './Available'
import OptimizedImage from './OptimizedImage'
import { ChevronDown } from 'lucide-react'

const Home1 = () => {
    return (
        <div className='w-full relative  md:h-[60vh] flex flex-col justify-center items-center'
        style={{
              marginTop: 'clamp(3rem,3vw,200rem)',
        }}
        >
            <div className="absolute left-0 -top-[12%]">
                <OptimizedImage
                    src="/bg-khana1.svg"
                    alt="Decorative food illustration"
                    width={300}
                    height={300}
                    priority
                    style={{
                        width: 'clamp(10rem,6vw,200rem)',
                        height: "auto"
                    }}
                />
            </div>

             <div className="absolute right-0 bottom-[0%]">
                <OptimizedImage
                    src="/bg-khana2.svg"
                    alt="Decorative food illustration"
                    width={300}
                    height={300}
                    priority
                    style={{
                        width: 'clamp(10rem,10vw,200rem)',
                        height: "auto"
                    }}
                />
            </div>
            <div className="flex relative flex-col items-center gap-7 w-[60%] md:w-[80%] h-fit ">



                <div className="absolute left-[10%] -top-[15%]">
                    <OptimizedImage
                        src="/khana1.svg"
                        alt="Food illustration"
                        width={200}
                        height={200}
                        priority
                        style={{
                            width: 'clamp(5rem,11vw,200rem)',
                            height: "auto"
                        }}
                    />
                </div>

                <div className="absolute"
                style={{
                    bottom: 'clamp(16rem,12vw,100rem)',
                    right: "clamp(0.0001rem,6vw,100rem)"

                }}
                >
                    <OptimizedImage
                        src="/khana2.webp"
                        alt="Food illustration"
                        width={200}
                        height={200}
                        loading="eager"
                        style={{
                            width: 'clamp(5rem,11vw,200rem)',
                            height: "auto"
                        }}
                    />
                </div>

                <div className="w-full">
                    <div className="text-4xl  sm:text-5xl md:text-6xl pixel text-center text-[#8A3E1D]"
                    style={{
                        fontSize: "clamp(2.25rem,4vw,200rem)"
                    }}
                    >
                        Your Perfect Event,
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl text-center pixel text-[#EC8A25]"
                     style={{
                        fontSize: "clamp(2.25rem,4vw,200rem)"
                    }}>
                        Catered to Perfection
                    </div>
                </div>

                <div className="text-[#8A3E1D] text-center text-xl inter font-semibold"
                 style={{
                        fontSize: "clamp(1rem,1vw,200rem)"
                    }}
                >
                    Seamless discovery of trusted vendors that match your taste, budget, and vibe.
                </div>
<div className="hidden md:block">
                <Button text="Get Started" bgcolor="#EC8A25" />
</div>
                <Available />

                <div className="border-4  border-[#EC8A25]  rounded-full"
            style={{
                padding: 'clamp(0.5rem,0.5vw,200rem)',
            }}
            >

                <ChevronDown color='#EC8A25' size={40}/>
            </div>
            </div>
            



        </div>
    )
}

export default Home1;