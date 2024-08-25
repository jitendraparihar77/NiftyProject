import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      {/* Container to hold both social icons and company link */}
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-red-600 hover:text-red-700">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-blue-800 hover:text-blue-900">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <i className="fab fa-telegram"></i>
          </a>
        </div>

        {/* Company link */}
        <div className="text-white">
          <a href="https://www.niftytrader.in" className="hover:underline">
            <u>www.niftytrader.in</u>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
