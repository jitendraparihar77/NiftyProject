import React from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import an icon for the expand/collapse indicator

const FAQ: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">FAQ</h2>
        <div className="space-y-4 max-w-2xl mx-auto"> {/* Centering the FAQ content */}
          {/* FAQ Item */}
          <details className="bg-white p-4 rounded-lg border-b border-gray-300">
            <summary className="flex items-center font-semibold text-gray-800 cursor-pointer focus:outline-none">
              <span className="flex-1">What is the Nifty Trader Prime Plan?</span>
              <FaChevronDown className="text-gray-500 ml-2" />
            </summary>
            <p className="text-gray-600 mt-2">
              The Nifty Trader Prime Plan is designed for advanced traders who want additional features.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg border-b border-gray-300">
            <summary className="flex items-center font-semibold text-gray-800 cursor-pointer focus:outline-none">
              <span className="flex-1">How can I sign up for the Prime Plan?</span>
              <FaChevronDown className="text-gray-500 ml-2" />
            </summary>
            <p className="text-gray-600 mt-2">
              You can sign up for the Prime Plan by visiting our website and choosing the Prime Plan option under the pricing section.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg border-b border-gray-300">
            <summary className="flex items-center font-semibold text-gray-800 cursor-pointer focus:outline-none">
              <span className="flex-1">What are the benefits of the Prime Plan?</span>
              <FaChevronDown className="text-gray-500 ml-2" />
            </summary>
            <p className="text-gray-600 mt-2">
              The Prime Plan offers a range of advanced features such as premium tools, exclusive market insights, and faster support.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg border-b border-gray-300">
            <summary className="flex items-center font-semibold text-gray-800 cursor-pointer focus:outline-none">
              <span className="flex-1">Is there a trial period for the Prime Plan?</span>
              <FaChevronDown className="text-gray-500 ml-2" />
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, we offer a 14-day free trial for the Prime Plan. You can cancel anytime within the trial period without any charges.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg border-b border-gray-300">
            <summary className="flex items-center font-semibold text-gray-800 cursor-pointer focus:outline-none">
              <span className="flex-1">Can I cancel my subscription at any time?</span>
              <FaChevronDown className="text-gray-500 ml-2" />
            </summary>
            <p className="text-gray-600 mt-2">
              Absolutely. You can cancel your subscription at any time through your account settings.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
