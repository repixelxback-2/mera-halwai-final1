import Image from 'next/image'
import React from 'react'
import Available from './Available'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full flex items-center flex-col h-full'>
            <Image
                src="/paji.svg"
                width={1000}
                height={1000}
                alt='hey'
                className='w-40 h-full'

            />
            <div className="bg-gradient-to-l overflow-hidden relative from-[#8A3E1D] to-[#EC8A25] w-full rounded-t-[13rem] h-[60vh]">
                <Image
                    src="/chai.svg"
                    width={1000}
                    height={1000}
                    alt='hey'
                    className='w-[80%] right-0 top-52 absolute h-full'
                />

                <div className="flex flex-col justify-between items-center w-full h-full"
                    style={{
                        padding: "clamp(1rem,5vw,200rem)"
                    }}

                >
                    <div className="text-3xl sm:text-5xl leading-snug md:text-5xl pixel text-left text-[#ffffff]"
                    >
                        Celebrating Every Occasion, the Mera Halwai Way
                    </div>

                    <div className="flex justify-between w-[80%]">

                        <div className="flex flex-col gap-0 w-[30%]">
                            <Image
                                src="/logo-w.svg"
                                width={1000}
                                height={1000}
                                alt='hey'
                                className='w-72 h-full'
                            />
                            <Available />

                        </div>

                        <div className="flex justify-start w-[40%]">
                            <div className="flex justify-between w-[80%]">
                                <div className="flex flex-col gap-5 text-[#fff] inter">

                                    <div className="text-xl font-semibold">
                                        Quick Links
                                    </div>
                                    <div className="flex flex-col gap-3 font-normal">
                                        <Link href="/">Home</Link>
                                        <Link href="/">Contact</Link>
                                        <Link href="/">About</Link>
                                        <Link href="/">Privacy Policy</Link>
                                        <Link href="/">Terms & Condition</Link>


                                    </div>

                                </div>


                                <div className="flex flex-col gap-5 text-[#fff] inter">

                                    <div className="text-xl font-semibold">
                                        Contact With Us
                                    </div>
                                    <div className="flex flex-col gap-3 font-normal">
                                        <Link href="/">Email{": info@merahalwai.com"} </Link>
                                        <Link href="/">{"Contact No: +917448006475"}</Link>


                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/socials/yt.svg"
                                            width={1000}
                                            height={1000}
                                            alt='hey'
                                            className='w-10 h-full'
                                        />
                                        <Image
                                            src="/socials/insta.svg"
                                            width={1000}
                                            height={1000}
                                            alt='hey'
                                            className='w-fit h-full'
                                        />
                                        <Image
                                            src="/socials/fb.svg"
                                            width={1000}
                                            height={1000}
                                            alt='hey'
                                            className='w-fit h-full'
                                        />
                                        <Image
                                            src="/socials/x.svg"
                                            width={1000}
                                            height={1000}
                                            alt='hey'
                                            className='w-fit h-full'
                                        />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer