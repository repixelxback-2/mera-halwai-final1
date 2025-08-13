import React from 'react'

const Button = ({text, bgcolor}) => {
  return (
    <button
      style={{ backgroundColor: bgcolor,
        padding: 'clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)',

       }}
    className={` text-white inter text-xl sm:text-lg md:text-xl font-bold w-fit rounded-xl `}>{text}</button>
  )
}

export default Button