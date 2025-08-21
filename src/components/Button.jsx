import React, { useState } from 'react';
import Popup from './Popup';

const Button = ({ text, bgcolor }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
      setShowPopup(true);
  };

  return (
    <>
      <button
        style={{
          backgroundColor: bgcolor,
          padding: 'clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)',

        }}
        onClick={handleClick}

        className={` text-white inter text-xl sm:text-lg md:text-xl font-bold w-fit rounded-xl `}>{text}</button>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Button;