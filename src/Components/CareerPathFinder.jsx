import React, { useState } from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CareerPathFinder = ({ onSearch, onFilter, activeFilters = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter options
  const categories = [
    'Technology', 'Healthcare', 'Business', 'Engineering',
    'Arts & Design', 'Science', 'Education', 'Trades'
  ];
  
  const salaryRanges = [
    'Under $40,000', '$40,000 - $70,000', 
    '$70,000 - $100,000', 'Over $100,000'
  ];
  
  const educationLevels = [
    'High School', 'Associate Degree', 
    "Bachelor's Degree", "Master's Degree", "Doctorate"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleFilter = (filterType, value) => {
    onFilter(filterType, value);
  };

  const clearAllFilters = () => {
    onFilter('clear');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <motion.div 
        className="bg-white rounded-xl text-center shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover Your <span className='bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent'>Career Path</span></h2>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search career paths, job titles, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 cursor-pointer text-white"
            >
              Search
            </motion.button>
          </div>
        </form>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600 mr-2 self-center">Filters:</span>
            {activeFilters.map((filter, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {filter.value}
                <button 
                  onClick={() => toggleFilter(filter.type, filter.value)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllFilters}
              className="ml-2 text-sm text-blue-600 hover:text-blue-800 self-center"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Filter Toggle Button */}
        <motion.button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-4"
          whileHover={{ x: 5 }}
        >
          {showFilters ? (
            <>
              <span className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">Hide filters</span>
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <Filter className="h-4 w-4 mr-1" />
              <span className='bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent'>Show filters</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </motion.button>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
                {/* Category Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          onChange={() => toggleFilter('category', category)}
                          checked={activeFilters.some(f => f.type === 'category' && f.value === category)}
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary Range Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
                  <div className="space-y-2">
                    {salaryRanges.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          onChange={() => toggleFilter('salary', range)}
                          checked={activeFilters.some(f => f.type === 'salary' && f.value === range)}
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Education Level Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Education Level</h4>
                  <div className="space-y-2">
                    {educationLevels.map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          onChange={() => toggleFilter('education', level)}
                          checked={activeFilters.some(f => f.type === 'education' && f.value === level)}
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CareerPathFinder;
