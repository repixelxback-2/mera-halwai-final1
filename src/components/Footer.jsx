import Image from 'next/image'
import React from 'react'
import Available from './Available'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full flex items-center flex-col h-full'>
            <Image
                src="/paji.svg"
                width={100}
                height={100}
                alt='hey'
                className='w-40 h-full'

            />
            <div className="bg-gradient-to-l overflow-hidden relative from-[#8A3E1D] to-[#EC8A25] w-full rounded-t-4xl  xl:rounded-t-[8rem]  2xl:rounded-t-[13rem]  h-full md:h-[70vh]">
                <Image
                    src="/chai.svg"
                    width={100}
                    height={100}
                    alt='hey'
                    className='w-[80%] right-0 top-52 z-10 absolute h-full'
                />

                <div className="flex flex-col relative z-40 justify-between items-center gap-5 md:gap-10 w-full h-full"
                    style={{
                        padding: "clamp(2.5rem,5vw,200rem)"
                    }}

                >
                    <div className="text-2xl sm:text-3xl leading-snug md:text-5xl pixel text-center xl:text-left text-[#ffffff]"

                    style={{
                        fontSize: "clamp(1.75rem,2.85vw,200rem)"

                    }}
                    >
                        Celebrating Every Occasion, the Mera Halwai Way
                    </div>

                    <div className="flex gap-5 md:gap-1 flex-col md:flex-row justify-between w-full md:w-[90%]">

                        <div className="flex items-center md:items-start justify-center md:justify-end flex-col  gap-5 md:gap-10 w-full md:w-[30%]">
                            <Image
                                src="/logo-w.svg"
                                width={100}
                                height={100}
                                alt='hey'
                                className='w-[80%] md:w-62 h-fit'
                            />
                            <Available />

                        </div>

                        <div className="flex justify-start w-full md:w-[40%]">
                            <div className="flex justify-between w-full md:w-[90%]">
                                <div className="flex flex-col text-sm sm:text-lg md:text-xl  gap-5 text-[#fff] inter">

                                    <div className="  font-semibold">
                                        Quick Links
                                    </div>
                                    <div className="flex flex-col gap-3 font-normal">
                                        <Link className='cursor-pointer' href="/">Home</Link>
                                        <Link className='cursor-pointer' href="/contact">Contact</Link>
                                        <Link className='cursor-pointer' href="/about">About</Link>
                                        <Link className='cursor-pointer' href="/privacy">Privacy Policy</Link>
                                        <Link className='cursor-pointer' href="/terms">Terms & Condition</Link>


                                    </div>

                                </div>


                                <div className="flex flex-col text-sm sm:text-lg md:text-xl  gap-5 text-[#fff] inter">

                                    <div className=" font-semibold">
                                        Contact With Us
                                    </div>
                                    <div className="flex flex-col gap-3 font-normal">
                                        <Link href="/">Email{': merahalwai.com@gmail.com '} </Link>
                                        <Link href="/">{'Contact No: +917300321034'}</Link>


                                    </div>

                                    <div className="items-center flex gap-3">

                                       <div className="flex">Follow us  on</div>
                                        <Link href={"https://www.instagram.com/merahalwai?igsh=ZmRuMDJ5b2Rpb2gw"} className='h-full'>
                                        <Image
                                            src="/socials/insta.svg"
                                            width={100}
                                            height={100}
                                            alt='hey'
                                            className='w-12  h-full'
                                        />
                                        </Link>
                                    

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='border-t-2 w-[100%] md:w-[90%] border-white/70' />
                    <div className="flex w-[100%] md:w-[90%] text-black text-sm md:text-xl"> MeraHalwai © 2025. All Rights Reserved</div>
                </div>

            </div>

        </div>
    )
}

export default Footer