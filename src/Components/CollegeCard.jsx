import React from 'react';
import {
  MapPin, Book, Building2, LayoutList, Calendar, CheckCircle, Users,
  Laptop, Wifi, Coffee, School, Bus, Medal
} from 'lucide-react';
import { motion } from 'framer-motion';

// Helper component for Facility Icons
const FacilityIcon = ({ name }) => {
  const iconMap = {
    Library: <Book className="h-5 w-5" />,
    'Computer Lab': <Laptop className="h-5 w-5" />,
    'Science Lab': <Laptop className="h-5 w-5" />,
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

// Internal component for rendering a single college card
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
        <h3 className="text-xl font-bold text-gray-800">{college.name}</h3>
        <p className="flex items-center text-sm text-gray-500 mt-1">
          <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
          {college.location}
        </p>
        <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
          {college.type || 'Government'}
        </span>

        {/* Available Courses */}
        <div className="mt-5">
          <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-2">
            <Book className="h-4 w-4 mr-2 text-blue-600" /> Available Courses
          </h4>
          <div className="flex flex-wrap gap-2">
            {college.courses.slice(0, 3).map((course, index) => (
              <span key={index} className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                {course}
              </span>
            ))}
            {college.courses.length > 3 && (
              <span className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                +{college.courses.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-6">
          <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Building2 className="h-4 w-4 mr-2 text-blue-600" /> Facilities
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {college.facilities.slice(0, 4).map((facility, index) => (
              <FacilityIcon key={index} name={facility} />
            ))}
            {college.facilities.length > 4 && (
              <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg bg-gray-50">
                <span className="text-xs font-medium text-gray-500">+{college.facilities.length - 4} more</span>
              </div>
            )}
          </div>
        </div>

        {/* Admission Details */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="flex items-center text-sm font-semibold text-blue-800 mb-3">
            <LayoutList className="h-4 w-4 mr-2" /> Admission Details
          </h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              Cutoff: <span className="font-medium ml-1">{college.admission.cutoff}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-purple-500" />
              Seats: <span className="font-medium ml-1">{college.admission.totalSeats}</span>
            </div>
            <div className="flex items-center">
              <Book className="h-4 w-4 mr-2 text-yellow-600" />
              Exam: <span className="font-medium ml-1">{college.admission.exam}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-red-500" />
              Deadline: <span className="font-medium ml-1">{college.admission.deadline}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100 border-t border-gray-200 text-center">
        <button
          onClick={() => window.open(college.website || "https://colart.delhi.gov.in/", "_blank")}
          className="w-full py-2.5 bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          View Full Details
        </button>
      </div>
    </motion.div>
  );
};

// Main component that displays all college cards
const CollegeCard = () => {
  // Sample college data
  const colleges = [
  {
    id: 1,
    name: 'Government College of Arts & Science',
    location: 'Delhi, Delhi, Delhi',
    courses: ['B.A. English', 'B.A. History', 'B.Sc. Mathematics', 'B.Sc. Physics'],
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
  {
    id: 3,
    name: 'National Institute of Technology',
    location: 'Bangalore, Karnataka',
    courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech ME', 'B.Tech Civil'],
    facilities: ['Library', 'Hostel', 'Wi-Fi', 'Cafeteria', 'Laboratories'],
    admission: { cutoff: '85%', totalSeats: 1500, exam: 'JEE', deadline: '6/30/2024' },
  },
  {
    id: 4,
    name: 'City College of Science',
    location: 'Chennai, Tamil Nadu',
    courses: ['B.Sc Physics', 'B.Sc Chemistry', 'B.Sc Botany', 'B.Sc Zoology'],
    facilities: ['Library', 'Computer Lab', 'Sports Complex', 'Wi-Fi'],
    admission: { cutoff: '70%', totalSeats: 1000, exam: 'Merit Based', deadline: '7/20/2024' },
  },
  {
    id: 5,
    name: 'Premier College of Engineering',
    location: 'Pune, Maharashtra',
    courses: ['B.Tech CSE', 'B.Tech IT', 'B.Tech EEE', 'B.Tech Civil'],
    facilities: ['Library', 'Hostel', 'Wi-Fi', 'Cafeteria', 'Laboratories', 'Transport'],
    admission: { cutoff: '78%', totalSeats: 1200, exam: 'JEE', deadline: '6/25/2024' },
  },
  {
    id: 6,
    name: 'Modern Arts College',
    location: 'Kolkata, West Bengal',
    courses: ['B.A. English', 'B.A. History', 'B.A. Sociology', 'B.A. Political Science'],
    facilities: ['Library', 'Cafeteria', 'Wi-Fi', 'Auditorium'],
    admission: { cutoff: '72%', totalSeats: 900, exam: 'Merit Based', deadline: '7/10/2024' },
  },
  {
    id: 7,
    name: 'Institute of Commerce & Management',
    location: 'Hyderabad, Telangana',
    courses: ['B.Com', 'BBA', 'BCA', 'B.A. Economics'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Hostel', 'Sports Complex'],
    admission: { cutoff: '76%', totalSeats: 850, exam: 'CET', deadline: '8/5/2024' },
  },
  {
    id: 8,
    name: 'Tech Valley Institute',
    location: 'Noida, Uttar Pradesh',
    courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech ME', 'B.Tech Civil'],
    facilities: ['Library', 'Laboratories', 'Hostel', 'Cafeteria', 'Wi-Fi'],
    admission: { cutoff: '82%', totalSeats: 1100, exam: 'JEE', deadline: '6/28/2024' },
  },
  {
    id: 9,
    name: 'Central College of Education',
    location: 'Jaipur, Rajasthan',
    courses: ['B.Ed', 'M.Ed', 'B.A. Education', 'B.Sc. Education'],
    facilities: ['Library', 'Wi-Fi', 'Auditorium', 'Cafeteria'],
    admission: { cutoff: '70%', totalSeats: 600, exam: 'Merit Based', deadline: '7/15/2024' },
  },
  {
    id: 10,
    name: 'Global Institute of Management',
    location: 'Bhubaneswar, Odisha',
    courses: ['BBA', 'MBA', 'B.Com', 'M.Com'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Hostel', 'Transport'],
    admission: { cutoff: '78%', totalSeats: 700, exam: 'CET', deadline: '8/10/2024' },
  },
  {
    id: 11,
    name: 'Heritage College of Arts',
    location: 'Lucknow, Uttar Pradesh',
    courses: ['B.A. English', 'B.A. History', 'B.A. Fine Arts', 'B.A. Philosophy'],
    facilities: ['Library', 'Cafeteria', 'Wi-Fi', 'Auditorium', 'Art Studio'],
    admission: { cutoff: '74%', totalSeats: 950, exam: 'Merit Based', deadline: '7/18/2024' },
  },
  {
    id: 12,
    name: 'Sunrise Engineering College',
    location: 'Chandigarh, Punjab',
    courses: ['B.Tech CSE', 'B.Tech EEE', 'B.Tech Civil', 'B.Tech ME'],
    facilities: ['Library', 'Laboratories', 'Hostel', 'Cafeteria', 'Wi-Fi', 'Sports Complex'],
    admission: { cutoff: '80%', totalSeats: 1000, exam: 'JEE', deadline: '6/30/2024' },
  },
  {
    id: 13,
    name: 'Eastern College of Science',
    location: 'Patna, Bihar',
    courses: ['B.Sc Physics', 'B.Sc Chemistry', 'B.Sc Mathematics', 'B.Sc Botany'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Cafeteria'],
    admission: { cutoff: '72%', totalSeats: 850, exam: 'Merit Based', deadline: '7/22/2024' },
  },
  {
    id: 14,
    name: 'Western Commerce Academy',
    location: 'Ahmedabad, Gujarat',
    courses: ['B.Com', 'BBA', 'B.A. Economics', 'BCA'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Hostel', 'Auditorium'],
    admission: { cutoff: '77%', totalSeats: 900, exam: 'CET', deadline: '8/2/2024' },
  },
  {
    id: 15,
    name: 'Northern Institute of Technology',
    location: 'Gurgaon, Haryana',
    courses: ['B.Tech CSE', 'B.Tech IT', 'B.Tech ECE', 'B.Tech ME'],
    facilities: ['Library', 'Hostel', 'Wi-Fi', 'Cafeteria', 'Laboratories'],
    admission: { cutoff: '83%', totalSeats: 1200, exam: 'JEE', deadline: '6/27/2024' },
  },
  {
    id: 16,
    name: 'Southern College of Arts & Commerce',
    location: 'Coimbatore, Tamil Nadu',
    courses: ['B.A. English', 'B.A. History', 'B.Com', 'BBA'],
    facilities: ['Library', 'Cafeteria', 'Wi-Fi', 'Auditorium', 'Sports Complex'],
    admission: { cutoff: '71%', totalSeats: 800, exam: 'Merit Based', deadline: '7/12/2024' },
  },
  {
    id: 17,
    name: 'Metro College of Engineering',
    location: 'Kochi, Kerala',
    courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech ME', 'B.Tech Civil'],
    facilities: ['Library', 'Laboratories', 'Hostel', 'Wi-Fi', 'Transport'],
    admission: { cutoff: '79%', totalSeats: 950, exam: 'JEE', deadline: '6/29/2024' },
  },
  {
    id: 18,
    name: 'Himalaya College of Science',
    location: 'Shimla, Himachal Pradesh',
    courses: ['B.Sc Physics', 'B.Sc Chemistry', 'B.Sc Mathematics', 'B.Sc Zoology'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Cafeteria'],
    admission: { cutoff: '73%', totalSeats: 700, exam: 'Merit Based', deadline: '7/16/2024' },
  },
  {
    id: 19,
    name: 'Coastal Institute of Management',
    location: 'Visakhapatnam, Andhra Pradesh',
    courses: ['BBA', 'MBA', 'B.Com', 'M.Com'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Hostel', 'Sports Complex'],
    admission: { cutoff: '78%', totalSeats: 650, exam: 'CET', deadline: '8/8/2024' },
  },
  {
    id: 20,
    name: 'Capital College of Arts & Science',
    location: 'Bhopal, Madhya Pradesh',
    courses: ['B.A. English', 'B.A. History', 'B.Sc Mathematics', 'B.Sc Physics'],
    facilities: ['Library', 'Computer Lab', 'Wi-Fi', 'Cafeteria', 'Sports Complex'],
    admission: { cutoff: '75%', totalSeats: 900, exam: 'Merit Based', deadline: '7/14/2024' },
  },
];

  return (
    <div className="bg-slate-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {colleges.map((college) => (
            <CardTemplate key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
