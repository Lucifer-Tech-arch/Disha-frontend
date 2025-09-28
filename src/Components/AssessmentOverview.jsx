import React from 'react';
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; 

// --- SVG Icons ---

// Arrow Right Icon for the button
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);



const AssessmentOverview = ({ userName = "Krishna Goswami" }) => {
    const navigate = useNavigate(); // 2. Initialize the hook

    const handleNavigate = () => {
        navigate('/assessment/questions'); // 3. Define the navigation function
    };

    const steps = [
        {
            number: 1,
            title: "Answer Questions",
            description: "Respond to carefully crafted questions about your interests, preferences, and goals.",
            bgColor: "bg-blue-500"
        },
        {
            number: 2,
            title: "AI Analysis",
            description: "Our system analyzes your responses to identify your unique strengths and interests.",
            bgColor: "bg-green-500"
        },
        {
            number: 3,
            title: "Get Results",
            description: "Receive personalized recommendations for academic streams and career paths.",
            bgColor: "bg-purple-500"
        },
    ];

    // Framer Motion variants for the overall section
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    // Framer Motion variants for individual step cards
    const stepItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Framer Motion variants for the bottom card
    const bottomCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5, // Delay this card's animation slightly
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-slate-50 font-sans py-20 px-4">
            <motion.div
                className="max-w-4xl mx-auto space-y-12"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible" // Animate when section comes into view
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* What to Expect Card */}
                <motion.div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100" variants={stepItemVariants}>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                        What to Expect
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.number} 
                                className="flex flex-col items-center text-center p-4"
                                variants={stepItemVariants} // Each step animates individually
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 ${step.bgColor} shadow-md`}>
                                    {step.number}
                                </div>
                                <h3 className="font-semibold text-gray-800 text-lg mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Ready to Start Card */}
                <motion.div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100" variants={bottomCardVariants}>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                        Ready to Start, {userName}?
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                        This assessment will help you make informed decisions about your academic future. Your progress will be saved to your account.
                    </p>

                    <div className="flex justify-center mb-8">
                        <button onClick={handleNavigate} className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] cursor-pointer text-white font-bold py-3 px-8 rounded-full flex items-center gap-3 
                                           transition-transform duration-300 ease-in-out hover:scale-105 shadow-md">
                            Start Assessment
                            <ArrowRightIcon />
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-700 text-sm">
                        <div className="flex items-center gap-2">
                            <IoMdCheckmarkCircleOutline className='h-4 w-4 text-green-500' />
                            <span>Free Forever</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMdCheckmarkCircleOutline className='h-4 w-4 text-green-500' />
                            <span>10-15 Minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMdCheckmarkCircleOutline className='h-4 w-4 text-green-500' />
                            <span>Instant Results</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AssessmentOverview;