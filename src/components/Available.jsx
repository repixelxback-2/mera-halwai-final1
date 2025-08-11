import Image from 'next/image'
import React from 'react'

const Available = () => {
  return (
    <div className='flex gap-4'>
        <div className="text-black text-md sm:text-lg md:text-xl">
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