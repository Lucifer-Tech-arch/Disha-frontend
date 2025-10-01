import React from 'react';
import { Search, Filter } from 'lucide-react';

const CollegeFinder = () => {
  // Data for the facility checkboxes
  const facilities = [
    'Library', 'Computer Lab', 'Science Lab', 'Wi-Fi',
    'Hostel', 'Transportation', 'Sports Complex', 'Cafeteria'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl text-center shadow-md p-6 mb-8">
        <div className='mb-16'>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Your Perfect <span className='bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent'>College</span></h2>
        <p className='text-sm text-gray-500'>Discover government colleges near you with detailed information about courses, facilities and admissions.</p>
        </div>
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by college name, location, or course..."
          />
        </div>

        {/* Filters */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-700">Filter by Facilities:</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <Filter className="h-4 w-4 mr-1" />
              Reset Filters
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {facilities.map((facility, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{facility}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder;
