import React from 'react';
import Image from 'next/image';

const FooterContent: React.FC = () => {
  return (
    <div className="w-full mx-auto px-6 py-8 mb-5 flex flex-col md:flex-row items-center  bg-[#ECF5FE]">
      {/* Left Section: Mobile Image with Animation */}
      <div className="relative ml-20 w-full max-w-xs md:max-w-md flex items-center justify-center mb-8 md:mb-0 h-60 md:h-80">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-4/5 h-4/5 animate-bounce">
            <Image
              src="/mobile1.png"
              alt="Mobile"
              layout="fill"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
              className="relative"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Text and Button */}
      <div className="flex flex-col items-center ml-20 md:items-start text-center md:text-left space-y-4 md:space-y-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          Screening Like a Pro with <br />
          <span className="text-indigo-600">Nifty Trader</span>
        </h2>
        <p className="text-base text-gray-500 mb-4">
          Stop wasting time and start winning! Get access <br />
          to Nifty Trader's Stock Screeners today!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Start Free Trial Now
        </button>
      </div>
    </div>
  );
};

export default FooterContent;
