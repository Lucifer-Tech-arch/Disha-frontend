import React from 'react';
import { GoTrophy } from "react-icons/go";
import { LuBrain } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { IoBulbOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import RecommandedStreams from '../Components/RecommandStreams';

// --- Data for Strengths ---
const strengthsData = [
    {
        name: 'Analytical',
        description: 'You excel at logical reasoning, problem-solving, and working with data and numbers.',
        score: 7,
        isStrongest: true,
        icon: <LuBrain className="h-6 w-6 text-gray-500" />,
    },
    {
        name: 'Creative',
        description: 'You have a natural talent for artistic expression, innovation, and thinking outside the box.',
        score: 1,
        isStrongest: false,
        icon: <IoBulbOutline  className='h-6 w-6 text-gray-500' />
    },
    {
        name: 'Technical',
        description: 'You enjoy building, fixing, and working with technology and mechanical systems.',
        score: 4,
        isStrongest: false,
        icon: <HiOutlineWrenchScrewdriver className="h-6 w-6 text-gray-500" />,
    },
    {
        name: 'Social',
        description: 'You thrive when working with people, helping others, and in collaborative environments.',
        score: 2,
        isStrongest: false,
        icon: <FiUsers className="h-6 w-6 text-gray-500" />,
    },
    {
        name: 'Business & Leadership',
        description: 'You have strong leadership skills, enjoy strategic planning, and understand commerce.',
        score: 5,
        isStrongest: false,
        icon: <IoMdTrendingUp className="h-6 w-6 text-gray-500" />,
    },
];

// --- Strength Item Component ---
const StrengthItem = ({ name, description, score, isStrongest, icon }) => {
    // Max score is 10 for calculating percentage
    const maxScore = 10;
    const widthPercentage = (score / maxScore) * 100;

    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">{icon}</div>
            <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-md font-semibold text-gray-800">{name}</h3>
                    {isStrongest && (
                        <span className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] text-white text-xs font-semibold px-2 py-0.5 rounded-full">STRONGEST</span>
                    )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] h-2 rounded-full"
                        style={{ width: `${widthPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <span className="text-lg font-bold text-gray-800">{score}</span>
            </div>
        </div>
    );
};

// --- Main Recommandations Component ---
const Recommandations = () => {
    return (
        <div className="min-h-screen bg-gray-50 mt-[100px] font-sans flex flex-col items-center justify-center p-4">
            <main className="max-w-4xl w-full mx-auto">
                {/* Header Section */}
                <header className="text-center mb-10">
                    <div className="inline-block p-3 bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-2xl mb-4 shadow-lg">
                        <GoTrophy className='h-8 w-8 text-white' />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Your Personalized <span className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">Results</span></h1>
                    <p className="mt-3 text-lg text-gray-600">Based on your responses, here's your academic and career guidance</p>
                </header>

                {/* Strengths Profile Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Your Strengths Profile</h2>
                    <div className="divide-y divide-gray-200">
                        {strengthsData.map((strength, index) => (
                            <StrengthItem
                                key={index}
                                name={strength.name}
                                description={strength.description}
                                score={strength.score}
                                isStrongest={strength.isStrongest}
                                icon={strength.icon}
                            />
                        ))}
                    </div>
                </div>
                 <RecommandedStreams />
            </main>
        </div>
    );
};

export default Recommandations;