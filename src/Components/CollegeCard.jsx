import React from 'react';
import {
  MapPin, Book, Building2, LayoutList, Calendar, CheckCircle, Phone, Mail, Globe, Users,
  Laptop, Wifi, Coffee, School, Bus, Medal
} from 'lucide-react';
import { motion } from 'framer-motion';

// Helper component for Facility Icons (used internally)
const FacilityIcon = ({ name }) => {
  const iconMap = {
    Library: <Book className="h-5 w-5" />,
    'Computer Lab': <Laptop className="h-5 w-5" />,
    'Wi-Fi': <Wifi className="h-5 w-5" />,
    Cafeteria: <Coffee className="h-5 w-5" />,
    Hostel: <Building2 className="h-5 w-5" />,
    'Sports Complex': <Medal className="h-5 w-5" />,
    Transportation: <Bus className="h-5 w-5" />,
  };
  return (
    <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
      {iconMap[name] || <School className="h-5 w-5" />}
      <span className="mt-2 text-xs font-medium text-gray-700">{name}</span>
    </div>
  );
};

// Internal component for rendering a single card's UI (The Template)
const CardTemplate = ({ college }) => {
  if (!college) return null;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="p-6">
        {/* Header */}
        <h3 className="text-xl font-bold text-gray-800 flex items-center">{college.name}</h3>
        <p className="flex items-center text-sm text-gray-500 mt-1">
          <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
          {college.location}
        </p>
        <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Government</span>

        {/* Available Courses */}
        <div className="mt-5">
          <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-2">
            <Book className="h-4 w-4 mr-2 text-blue-600" /> Available Courses
          </h4>
          <div className="flex flex-wrap gap-2">
            {college.courses.map((course, index) => (
              <span key={index} className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200">{course}</span>
            ))}
            {college.moreCourses && (
              <span className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200">+{college.moreCourses} more</span>
            )}
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-6">
          <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Building2 className="h-4 w-4 mr-2 text-blue-600" /> Facilities
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {college.facilities.map((facility, index) => (
              <FacilityIcon key={index} name={facility} />
            ))}
          </div>
        </div>

        {/* Admission Details & Contact Info would go here, same as before */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="flex items-center text-sm font-semibold text-blue-800 mb-3"><LayoutList className="h-4 w-4 mr-2" /> Admission Details</h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
            <div className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Cutoff: <span className="font-medium ml-1">{college.admission.cutoff}</span></div>
            <div className="flex items-center"><Users className="h-4 w-4 mr-2 text-purple-500" /> Total Seats: <span className="font-medium ml-1">{college.admission.totalSeats}</span></div>
            <div className="flex items-center"><Book className="h-4 w-4 mr-2 text-yellow-600" /> Exam: <span className="font-medium ml-1">{college.admission.exam}</span></div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-2 text-red-500" /> Deadline: <span className="font-medium ml-1">{college.admission.deadline}</span></div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100 border-t border-gray-200 text-center">
        <button className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">View Full Details</button>
      </div>
    </motion.div>
  );
};


// MAIN COMPONENT THAT DISPLAYS EVERYTHING
const CollegeCard = () => {
  
  // Data for all colleges is now inside this single component
  const colleges = [
    {
      id: 1,
      name: 'Government College of Arts & Science',
      location: 'Delhi, Delhi, Delhi',
      courses: ['B.A. English', 'B.A. History', 'B.Sc. Mathematics', 'B.Sc. Physics'],
      moreCourses: 1,
      facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Cafeteria', 'Sports Complex'],
      admission: { cutoff: '75%', totalSeats: 1200, exam: 'Merit Based', deadline: '7/15/2024' },
    },
    {
      id: 2,
      name: 'State College of Commerce',
      location: 'Mumbai, Mumbai, Maharashtra',
      courses: ['B.Com', 'BBA', 'B.A. Economics', 'B.Sc. CS'],
      moreCourses: 3,
      facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Hostel', 'Transportation'],
      admission: { cutoff: '80%', totalSeats: 800, exam: 'CET', deadline: '8/1/2024' },
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {colleges.map((college) => (
          <CardTemplate key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;