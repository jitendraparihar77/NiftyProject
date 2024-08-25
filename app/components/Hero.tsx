// import React from 'react';
// import { FaPlay } from 'react-icons/fa'; // Import play icon from react-icons

// const Hero: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-gradient-to-r from-[#FFC7C7] to-[#0AA6D7] text-white">
//       <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
//         <h2 className="text-2xl md:text-4xl font-bold mb-4">STOCK SCREENING SIMPLIFIED!</h2>
//         <p className="mb-6 text-sm md:text-base">Find Winning Stock Faster with Nifty Trader's Advanced Stock Screening Tool</p>
//         <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition">
//           Free Trial
//         </button>
//       </div>
//       <div className="w-full md:w-1/2 relative flex justify-center items-center mt-6 md:mt-0">
//         <img
//           src="/video-thumbnail.png"
//           alt="Video Thumbnail"
//           className="w-full max-w-md rounded-lg shadow-lg"
//         />
//         {/* Overlay play button */}
//         <div className="absolute flex items-center justify-center inset-0">
//           <button className="bg-[#ED93B7] text-white p-4 rounded-full flex items-center justify-center shadow-lg">
//             <FaPlay size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Import play icon from react-icons

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-gradient-to-r from-[#FFC7C7] to-[#0AA6D7] text-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">STOCK SCREENING SIMPLIFIED!</h2>
        <p className="mb-6 text-sm md:text-base">Find Winning Stock Faster with Nifty Trader's Advanced Stock Screening Tool</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition">
            Free Trial
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative flex justify-center items-center mt-6 md:mt-0">
        <img
          src="/video-thumbnail.png"
          alt="Video Thumbnail"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
        {/* Overlay play button */}
        <div className="absolute flex items-center justify-center inset-0">
          <button className="bg-[#ED93B7] text-white p-4 rounded-full flex items-center justify-center shadow-lg">
            <FaPlay size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

