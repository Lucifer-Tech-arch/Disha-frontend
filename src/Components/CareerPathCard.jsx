import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, DollarSign, TrendingUp, Clock, Users, BarChart2, ArrowRight } from 'lucide-react';

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const CareerPathCard = ({ career, index }) => {
  // Calculate animation delay based on index for staggered effect
  const delay = index * 0.1;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      variants={{
        ...cardVariants,
        hover: hoverVariants.hover
      }}
      whileHover="hover"
    >
      <div className="p-6">
        {/* Header with icon and title */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
            <Briefcase className="h-6 w-6" />
          </div>
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
            {career.category}
          </span>
        </div>

        {/* Career Title and Description */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{career.title}</h3>
        <p className="text-gray-600 mb-6">{career.description}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-green-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Avg. Salary</p>
              <p className="font-medium text-gray-800">${career.salary}/year</p>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Growth</p>
              <p className="font-medium text-gray-800">{career.growth}% (2024-2030)</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-amber-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Education</p>
              <p className="font-medium text-gray-800">{career.education}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-purple-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Demand</p>
              <p className="font-medium text-gray-800">{career.demand}</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {career.skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ x: 5 }}
          className="w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Explore Career Path
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CareerPathCard;
