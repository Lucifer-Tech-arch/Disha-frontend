import React, { useState } from 'react';
import { FiBookOpen, FiSearch, FiFilter, FiPlus } from 'react-icons/fi';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample courses data
  const courses = [
    { id: 1, title: 'Introduction to Computer Science', category: 'Computer Science', progress: 75, enrolled: '2023-10-01' },
    { id: 2, title: 'Web Development Fundamentals', category: 'Web Development', progress: 45, enrolled: '2023-10-10' },
    { id: 3, title: 'Data Science Basics', category: 'Data Science', progress: 20, enrolled: '2023-10-15' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Courses</h1>
          <p className="text-sm text-gray-500 mt-1">Track your learning progress</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-lg hover:bg-blue-700">
          <FiPlus className="w-4 h-4" />
          New Course
        </button>
      </header>

      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 ml-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <FiFilter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="flex space-x-2 mb-6 border-b border-gray-200">
        {['All', 'In Progress', 'Completed', 'Saved'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.toLowerCase()
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.category}</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{course.progress}% Complete</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Enrolled on {course.enrolled}</p>
                <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                  Continue Learning →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
