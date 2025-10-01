import { motion } from 'framer-motion';
import { BookOpen, Building, TrendingUp, ArrowRight } from 'lucide-react';

const RecommandedStreams = () => {
  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="flex mt-[50px] w-full items-center justify-center bg-slate-50 font-sans">
      <motion.div
        className="w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content Card */}
        <motion.div
          className="rounded-xl bg-white p-6 shadow-lg sm:p-8"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Recommended Academic Streams
            </h2>
          </div>

          {/* Recommended Stream Item */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-lg font-bold text-gray-900">Science Stream</h3>
              <span className="rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-bold text-white">
                BEST MATCH
              </span>
            </div>
            <p className="mt-1 text-base text-gray-600">
              Perfect for analytical minds interested in research, technology,
              healthcare, and innovation.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full items-center cursor-pointer justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] px-6 py-3 font-semibold text-white shadow-md transition-shadow hover:shadow-lg sm:w-auto"
          >
            <Building className="h-5 w-5" />
            Find Colleges
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full items-center justify-center cursor-pointer gap-2.5 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md sm:w-auto"
          >
            <TrendingUp className="h-5 w-5" />
            Explore Careers
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RecommandedStreams;