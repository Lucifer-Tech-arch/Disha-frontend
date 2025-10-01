import React, { useState, useEffect } from 'react';
import CareerPathFinder from '../Components/CareerPathFinder';
import CareerPathCard from '../Components/CareerPathCard';
import { motion } from 'framer-motion';

// Sample career data
const careerData = [
  {
    id: 1,
    title: 'Software Developer',
    category: 'Technology',
    description: 'Design and develop software applications for various platforms.',
    salary: '92,000',
    growth: 22,
    education: "Bachelor's Degree",
    demand: 'Very High',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
  },
  {
    id: 2,
    title: 'Data Scientist',
    category: 'Technology',
    description: 'Analyze and interpret complex data to help organizations make decisions.',
    salary: '98,000',
    growth: 31,
    education: "Master's Degree",
    demand: 'Very High',
    skills: ['Python', 'Machine Learning', 'Statistics', 'Data Visualization', 'SQL'],
  },
  {
    id: 3,
    title: 'Healthcare Administrator',
    category: 'Healthcare',
    description: 'Manage healthcare facilities and ensure efficient delivery of healthcare services.',
    salary: '76,000',
    growth: 18,
    education: "Bachelor's Degree",
    demand: 'High',
    skills: ['Healthcare Management', 'Leadership', 'Budgeting', 'Regulatory Compliance'],
  },
  {
    id: 4,
    title: 'Civil Engineer',
    category: 'Engineering',
    description: 'Design and supervise infrastructure projects like roads, bridges, and buildings.',
    salary: '88,000',
    growth: 7,
    education: "Bachelor's Degree",
    demand: 'Moderate',
    skills: ['AutoCAD', 'Structural Analysis', 'Project Management', 'Construction Methods'],
  },
  {
    id: 5,
    title: 'UX/UI Designer',
    category: 'Arts & Design',
    description: 'Create user-friendly interfaces and improve user experience for digital products.',
    salary: '85,000',
    growth: 16,
    education: "Bachelor's Degree",
    demand: 'High',
    skills: ['Figma', 'User Research', 'Prototyping', 'UI/UX Principles'],
  },
  {
    id: 6,
    title: 'Financial Analyst',
    category: 'Business',
    description: 'Analyze financial data and help businesses make investment decisions.',
    salary: '83,000',
    growth: 9,
    education: "Bachelor's Degree",
    demand: 'High',
    skills: ['Financial Modeling', 'Excel', 'Data Analysis', 'Market Research'],
  },
  {
    id: 7,
    title: 'High School Teacher',
    category: 'Education',
    description: 'Educate students in specific subject areas at the secondary school level.',
    salary: '62,000',
    growth: 5,
    education: "Bachelor's Degree",
    demand: 'Moderate',
    skills: ['Classroom Management', 'Curriculum Development', 'Student Assessment', 'Communication'],
  },
  {
    id: 8,
    title: 'Electrician',
    category: 'Trades',
    description: 'Install, maintain, and repair electrical power systems and equipment.',
    salary: '56,000',
    growth: 8,
    education: 'Apprenticeship',
    demand: 'High',
    skills: ['Electrical Systems', 'Troubleshooting', 'Blueprint Reading', 'Safety Procedures'],
  },
];

const CareerPaths = () => {
  const [filteredCareers, setFilteredCareers] = useState(careerData);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Apply filters and search
  useEffect(() => {
    let results = [...careerData];

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        career =>
          career.title.toLowerCase().includes(query) ||
          career.description.toLowerCase().includes(query) ||
          career.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply active filters
    if (activeFilters.length > 0) {
      results = results.filter(career => {
        return activeFilters.every(filter => {
          if (filter.type === 'category') return career.category === filter.value;
          if (filter.type === 'salary') {
            const [min, max] = filter.value
              .replace(/[^0-9\-]/g, '')
              .split('-')
              .map(Number);
            const careerSalary = Number(career.salary.replace(/[^0-9]/g, ''));
            
            if (filter.value.startsWith('Under')) return careerSalary < min;
            if (filter.value.startsWith('Over')) return careerSalary > min;
            return careerSalary >= min && careerSalary <= max;
          }
          if (filter.type === 'education') return career.education === filter.value;
          return true;
        });
      });
    }

    setFilteredCareers(results);
  }, [searchQuery, activeFilters]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (type, value) => {
    if (type === 'clear') {
      setActiveFilters([]);
      return;
    }

    setActiveFilters(prevFilters => {
      const filterExists = prevFilters.some(f => f.type === type && f.value === value);
      
      if (filterExists) {
        return prevFilters.filter(f => !(f.type === type && f.value === value));
      } else {
        return [...prevFilters, { type, value }];
      }
    });
  };

  // Animation variants for the list container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-12">
        <CareerPathFinder 
          onSearch={handleSearch} 
          onFilter={handleFilter}
          activeFilters={activeFilters}
        />
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career, index) => (
                <motion.div
                  key={career.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="h-full"
                >
                  <CareerPathCard career={career} index={index} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-xl font-medium text-gray-700 mb-2">No career paths found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CareerPaths;
