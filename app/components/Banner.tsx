import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gray-300 text-center py-8 px-4 md:px-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">THE ULTIMATE DESTINATION FOR STOCK MARKET INSIGHT</h1>
      <p className="text-base md:text-lg mb-6">Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.</p>
      <a href="#features" className="inline-block bg-gray-300 text-black font-bold py-3 px-6 rounded-lg border border-black">
  Explore Features →
</a>
    </div>
  );
};

export default Banner;
