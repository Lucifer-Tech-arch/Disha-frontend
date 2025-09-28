import React from 'react';
import { Search, Filter } from 'lucide-react';

const CollegeFinder = () => {
  // Data for the facility checkboxes
  const facilities = [
    'Library', 'Computer Lab', 'Science Lab', 'Wi-Fi',
    'Hostel', 'Transportation', 'Sports Complex', 'Cafeteria'
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Find Your Perfect <span className="bg-gradient-to-r from-[#2A65F5] font-sans to-[#19D7B5] bg-clip-text text-transparent">College</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 max-w-3xl mx-auto">
            Discover government colleges near you with detailed information about courses, facilities, and admissions.
          </p>
        </header>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search colleges, locations, or courses..."
            className="w-full p-4 pl-12 text-base border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
        </div>

        {/* Filter Section */}
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-4">
            <Filter className="h-5 w-5 mr-3 text-blue-600" />
            Filter Colleges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
            {/* State Dropdown */}
            <div>
              <label htmlFor="state" className="block mb-1.5 text-xs font-medium text-gray-600">State</label>
              <select id="state" className="w-full p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                <option selected>Select state</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="DL">Delhi</option>
                <option value="MH">Maharashtra</option>
              </select>
            </div>

            {/* District Dropdown */}
            <div>
              <label htmlFor="district" className="block mb-1.5 text-xs font-medium text-gray-600">District</label>
              <select id="district" className="w-full p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                <option selected>Select district</option>
              </select>
            </div>

            {/* Course/Stream Input */}
            <div>
              <label htmlFor="course" className="block mb-1.5 text-xs font-medium text-gray-600">Course/Stream</label>
              <input type="text" id="course" placeholder="e.g. B.Sc. Commerce" className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Required Facilities Checkboxes */}
            <div className="lg:col-span-1 md:col-span-2">
              <label className="block mb-2 text-xs font-medium text-gray-600">Required Facilities</label>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {facilities.map((facility) => (
                  <div key={facility} className="flex items-center">
                    <input
                      id={facility.toLowerCase().replace(' ', '')}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={facility.toLowerCase().replace(' ', '')} className="ml-2 text-xs text-gray-700">
                      {facility}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mt-8 text-sm text-gray-600">
          <p>Showing 2 of 2 colleges</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder;