import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the icon you want to use

interface TestimonialProps {
  name: string;
  feedback: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, feedback }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-6 shadow-sm w-auto h-auto overflow-hidden">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full mr-4">
          <FaUserCircle size={24} className="text-gray-600" /> {/* Display icon */}
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      {/* Truncated feedback text */}
      <p className="text-gray-700 overflow-hidden text-ellipsis">{feedback}</p>
    </div>
  );
};

export default Testimonial;
