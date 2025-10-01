import React from 'react';
import { motion } from 'framer-motion';

// SVG Icon Components (from your code)
const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V2.25m0 19.5V19.5m-4.5-5.25v-1.5m9 1.5v-1.5M5.25 12v-1.5m13.5 1.5v-1.5" />
    </svg>
);

const CollegeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
);

const CareerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
);

const TimelineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 14.25h.008v.008H12v-.008z" />
    </svg>
);

// Array of feature data for easier mapping
const features = [
    {
        icon: <BrainIcon />,
        title: "Smart Assessment",
        description: "Take our scientifically designed quiz to discover your strengths, interests, and ideal academic path.",
    },
    {
        icon: <CollegeIcon />,
        title: "College Directory",
        description: "Find nearby government colleges with detailed information about courses, facilities, and admission requirements.",
    },
    {
        icon: <CareerIcon />,
        title: "Career Mapping",
        description: "Explore career opportunities for each degree program with salary insights and growth prospects.",
    },
    {
        icon: <TimelineIcon />,
        title: "Timeline Tracker",
        description: "Never miss important admission dates, scholarship deadlines, or entrance exam schedules.",
    },
];

const FeatureSection = () => {
    // Duplicate the features array for a seamless loop
    const duplicatedFeatures = [...features, ...features];

    return (
        <section className="bg-gray-50/50 w-full py-20 overflow-x-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Everything You Need to <span className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">Succeed</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                        Our comprehensive platform guides you through every step of your educational journey.
                    </p>
                </div>
            </div>

            {/* Features Scroller */}
            <div className="relative w-full">
                 {/* Gradient fades for the edges */}
                 <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-gray-50/50 to-transparent"></div>
                 <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-gray-50/50 to-transparent"></div>

                <motion.div
                    className="flex gap-8" // Increased gap to match grid gap
                    animate={{
                        x: ['0%', '-100%'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 35, // Adjust duration to control speed
                        repeat: Infinity,
                    }}
                >
                    {duplicatedFeatures.map((feature, index) => (
                        <div
                            key={index}
                            // Restored hover effects, transition, and fixed width
                            className="flex-shrink-0 w-73 relative rounded-2xl cursor-pointer p-[2px] bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(42,101,245,0.4),0_0_40px_rgba(25,215,181,0.3)]"
                        >
                            <div className="bg-white rounded-2xl p-6 h-full transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#2A65F5]/10 hover:to-[#19D7B5]/10">
                                <div className="bg-blue-100/70 inline-block p-3 rounded-xl mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureSection;