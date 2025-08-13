import Image from 'next/image'
import React from 'react'

const Available = () => {
  return (
    <div className='flex md:flex-row flex-col  gap-4'>
        <div className="text-black text-center font-semibold md:text-left text-md sm:text-lg md:text-xl">
Available On
        </div>
        <div className="flex gap-2">
            <Image src="/google.svg" alt="google" width={100} height={100} />
            <Image src="/apple.svg" alt="apple" width={100} height={100} />
        </div>

    </div>
  )
}

export default Available    