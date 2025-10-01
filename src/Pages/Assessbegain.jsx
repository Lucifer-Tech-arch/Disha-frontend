import React from 'react';
import { motion } from 'framer-motion';
import AssessmentOverview from '../Components/AssessmentOverview';

// --- SVG Icons ---

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.5 18.75l1.188-.648a2.25 2.25 0 011.423-1.423L17.25 15l.648 1.188a2.25 2.25 0 011.423 1.423L20.5 18.75l-1.188.648a2.25 2.25 0 01-1.423 1.423z" />
    </svg>
);

const featureIcons = {
    Scientific: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21L15.75 15.75" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5m-3 0a3 3 0 106 0 3 3 0 10-6 0" />
        </svg>
    ),
    Personalized: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>
    ),
    Quick: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Trusted: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.512 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m7.512 2.72a8.97 8.97 0 01-7.512 0m7.512 0a8.97 8.97 0 00-7.512 0M12 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
};

const Assessbegain = () => {
    const features = [
        {
            icon: "Scientific",
            title: "Scientific Assessment",
            description: "Research-backed questions to identify your natural strengths and interests."
        },
        {
            icon: "Personalized",
            title: "Personalized Results",
            description: "Get tailored recommendations for academic streams and career paths."
        },
        {
            icon: "Quick",
            title: "Quick & Easy",
            description: "Complete the assessment in just 10-15 minutes."
        },
        {
            icon: "Trusted",
            title: "Trusted by Thousands",
            description: "Join students who've successfully found their academic direction."
        }
    ];

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // This will make cards appear one by one
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="bg-slate-50 font-sans px-4 mt-[30px]">
            <motion.div 
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Top Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-4  bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-2xl mt-[25px] shadow-lg">
                        <BrainIcon />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                    Discover Your <span className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">Perfect Path</span>
                </h2>

                {/* Subheading */}
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                    Take our comprehensive assessment to uncover your strengths, interests, and ideal academic direction. Get personalized recommendations for courses and careers that match your unique profile.
                </p>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Animation triggers when the grid scrolls into view
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start space-x-5 
                                       transition-transform duration-300 ease-in-out hover:scale-103 cursor-pointer" // Added hover effect
                            variants={itemVariants}
                        >
                            <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                                {featureIcons[feature.icon]}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg">{feature.title}</h3>
                                <p className="text-gray-600 mt-1">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <AssessmentOverview />
        </section>
    );
};

export default Assessbegain