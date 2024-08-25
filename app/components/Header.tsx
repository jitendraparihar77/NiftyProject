import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap justify-between items-center py-4 px-4 md:px-8 bg-[#111111] bg-opacity-30 text-white">
      <div className="flex items-center">
        {/* Replace this with the actual logo */}
        <img src="/logo.png" alt="NiftyTrader Logo" className="h-8 md:h-10" />
        {/* <h1 className="ml-2 text-lg md:text-xl font-bold">NiftyTrader</h1> */}
      </div>
      <a href="#visit" className="mt-2 md:mt-0 text-sm md:text-base border px-3 py-2 md:px-4 md:py-3 rounded hover:bg-white hover:text-black transition">
        Visit Website
      </a>
    </header>
  );
};

export default Header;
