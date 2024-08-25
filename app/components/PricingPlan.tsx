import React from 'react';

const PricingPlan: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Pricing Plan</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            {/* Table Header */}
            <thead className="bg-white">
              <tr>
                <th className="p-4 text-left text-gray-500 font-semibold border-b border-gray-300">
                  <div className="flex flex-col items-start">
                    <span>Compare plans</span>
                    <span className="inline-flex items-center bg-green-200 text-green-700 text-xs font-medium px-2 py-1 rounded-full mt-2">
                      60% Off
                    </span>
                    <p className="text-xs text-gray-400 mt-2">
                      Choose your workspace plan according to your organizational plan
                    </p>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold border border-gray-300">
                  Free <br />
                  <span className="text-xs text-gray-500">/Lifetime</span>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Create Free Account</button>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold border border-gray-300">
                  ₹849 <br />
                  <span className="text-xs text-gray-500">/Month</span>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Login to Buy</button>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold border border-gray-300">
                  ₹4310 <br />
                  <span className="text-xs text-gray-500">/Year</span>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Login to Buy</button>
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {/* First Row */}
              <tr className="bg-white border-b">
                <td className="p-4 text-gray-500 border border-gray-300">
                  Number of Users
                </td>
                <td className="p-4 text-center border border-gray-300">
                  1
                </td>
                <td className="p-4 text-center border border-gray-300">
                  3
                </td>
                <td className="p-4 text-center border border-gray-300">
                  1
                </td>
              </tr>
              {/* Second Row */}
              <tr className="bg-white border-b">
                <td className="p-4 text-gray-500 border border-gray-300">
                  Users Per Page
                </td>
                <td className="p-4 text-center border border-gray-300">
                  5 Pages
                </td>
                <td className="p-4 text-center border border-gray-300">
                  50 Pages
                </td>
                <td className="p-4 text-center border border-gray-300">
                  Unlimited
                </td>
              </tr>
              {/* Third Row */}
              <tr className="bg-white border-b">
                <td className="p-4 text-gray-500 border border-gray-300">
                  Includes essential features to get started
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
              </tr>
              {/* Fourth Row */}
              <tr className="bg-white border-b">
                <td className="p-4 text-gray-500 border border-gray-300">
                  More advanced features for increased productivity
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ❌
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
              </tr>
              {/* Fifth Row */}
              <tr className="bg-white border-b">
                <td className="p-4 text-gray-500 border border-gray-300">
                  Designing & Development
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ❌
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
                <td className="p-4 text-center border border-gray-300">
                  ✅
                </td>
              </tr>
              {/* Additional rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
