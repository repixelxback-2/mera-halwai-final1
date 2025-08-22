import React from 'react';

const Popup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[9999] md:scale-125 flex items-center justify-center text-white bg-opacity-50">
            <div className="bg-[#EC8A25] flex flex-col gap-2 rounded-3xl shadow-xl shadow-black/40 text-center"
                style={{
                    padding: "clamp(0.5rem,3vw,200rem)"
                }}
            >
                <h2
                 style={{
                    fontSize: "clamp(2rem,2vw,200rem)"
                }}
                className="text-4xl pixel ">App Coming Soon</h2>
                <button
                    onClick={onClose}
                    style={{
                        padding: "clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,0.75vw,200rem)"
                    }}
                    className="px-4 py-2 helvetica rounded-4xl bg-white text-[#EC8A25] font-bold tracking-wider cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;