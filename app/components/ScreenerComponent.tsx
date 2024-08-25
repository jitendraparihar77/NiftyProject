import React from "react";
import { FaChartLine, FaRegClock, FaListAlt, FaBoxOpen } from "react-icons/fa";

const ScreenerSection: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {/* Icon */}
        <div className="text-blue-500 mr-2">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ScreenerComponent: React.FC = () => {
  return (
    <>
      {/* Responsive Grid for Screener Sections */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScreenerSection
          title="Advanced Stock Screener"
          description="Access advanced filters like volume, price action, range breakout, opening price, clues, and more for efficient stock screening."
          icon={<FaChartLine size={24} />}
        />
        <ScreenerSection
          title="Live Market Screener"
          description="Access advanced filters like volume, price action, range breakout, opening price, clues, and more for efficient stock screening."
          icon={<FaRegClock size={24} />}
        />
        <ScreenerSection
          title="Options Screener"
          description="Access advanced filters like volume, price action, range breakout, opening price, clues, and more for efficient stock screening."
          icon={<FaListAlt size={24} />}
        />
        <ScreenerSection
          title="Advanced Option Chain"
          description="Access advanced filters like volume, price action, range breakout, opening price, clues, and more for efficient stock screening."
          icon={<FaBoxOpen size={24} />}
        />
      </div>

      {/* Responsive Banner Section */}
      <div className="relative w-full max-w-[1800px] h-[200px] mx-auto mt-8 bg-white flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1 px-4 md:px-8 text-center md:text-left sm:grid-cols-2">
          <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Missing Trades Because of Outdated Data?
          </h1>
          <p className="text-sm md:text-base mb-4">
            Get the Live Market Screening with Dynamic Data
          </p>
        </div>

        {/* Button and Background Image Section */}
        <div className="relative w-full md:w-[884px] h-[150px] md:h-full flex justify-center items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-right bg-no-repeat md:bg-none"
            style={{ backgroundImage: "url('/Screener.png')" }}
          ></div>

          {/* Button */}
          <button className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#537E95] to-[#004063] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Free Trial
          </button>
        </div>
      </div>
    </>
  );
};

export default ScreenerComponent;
