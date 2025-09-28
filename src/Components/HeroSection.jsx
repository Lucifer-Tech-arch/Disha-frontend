import { Building, BookOpen, BarChart3, Users, MoveRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

// --- Custom Components to Remove Dependencies ---

const SlBadgeIcon = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M12 3L5 7.5V16.5L12 21L19 16.5V7.5L12 3Z"></path>
        <path d="M12 8L15 9.5"></path>
        <path d="M12 8V13"></path>
        <path d="M12 8L9 9.5"></path>
        <path d="M9 14L12 15.5L15 14"></path>
    </svg>
);

const CustomTypeAnimation = ({ sequence, speed = 50, cursor = true }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typingSpeed = isDeleting ? speed / 2 : speed;
    
    const textSequence = sequence.filter(item => typeof item === 'string');

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % textSequence.length;
            const fullText = textSequence[i];
            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                const delayIndex = sequence.indexOf(fullText) + 1;
                const delay = (delayIndex < sequence.length && typeof sequence[delayIndex] === 'number') 
                              ? sequence[delayIndex] 
                              : 1500;
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, sequence, textSequence, typingSpeed]);

    return (
        <span>
            {text}
            {cursor && <span className="animate-pulse">|</span>}
        </span>
    );
};

// --- Updated StatCard with Repeating Animation ---
const StatCard = ({ icon, end, suffix, label }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.5,
        // Removed triggerOnce to allow re-triggering
    });

    useEffect(() => {
        // If the component is not in view, reset the count and exit.
        if (!inView) {
            setCount(0);
            return;
        }

        // This function contains the animation logic.
        const startAnimation = () => {
            let start = 0;
            const duration = 2500; // Animation duration in milliseconds
            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const progress = Math.min(1, (now - startTime) / duration);
                const easedProgress = 1 - Math.pow(1 - progress, 5); // Ease-out effect
                const currentCount = Math.floor(easedProgress * (end - start) + start);
                
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };

        // Start the animation immediately when it comes into view.
        startAnimation();

        // Set up an interval to repeat the animation every 5 seconds.
        const intervalId = setInterval(startAnimation, 5000);

        // The cleanup function clears the interval when the component
        // goes out of view or unmounts. This is crucial for performance.
        return () => clearInterval(intervalId);

    }, [inView, end]); // Rerun the effect if `inView` or `end` value changes.

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#c3d4fc] to-[#c7fbf1]">
                {icon}
            </div>
            <p className="text-4xl font-bold text-gray-900">
                {count.toLocaleString()}
                {suffix}
            </p>
            <p className="mt-1 text-base text-gray-600">{label}</p>
        </div>
    );
};


const HeroSection = () => {
    const stats = [
        {
            icon: <Building size={32} className="text-blue-600" />,
            end: 500,
            suffix: "+",
            label: "Government Colleges",
        },
        {
            icon: <BookOpen size={32} className="text-blue-600" />,
            end: 100,
            suffix: "+",
            label: "Degree Programs",
        },
        {
            icon: <BarChart3 size={32} className="text-blue-600" />,
            end: 50,
            suffix: "+",
            label: "Career Paths",
        },
        {
            icon: <Users size={32} className="text-blue-600" />,
            end: 10,
            suffix: "K+",
            label: "Students Guided",
        },
    ];

    return (
        <div className="relative w-full bg-white pt-16 pb-20 text-center lg:py-28">
            <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
                <div className="h-56 bg-gradient-to-br from-blue-500 to-purple-400 blur-3xl lg:h-96"></div>
                <div className="h-56 bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl lg:h-96"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                        <SlBadgeIcon className='mr-2' />
                        Your Path to Educational Success
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 font-sans sm:text-6xl">
                        Find Your Perfect{" "}
                        <br />
                        <span className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent text-2xl font-sans sm:text-4xl">
                            <CustomTypeAnimation
                                sequence={[
                                    "Academic Journey", 1500,
                                    "Career Path", 1500,
                                    "Degree Program", 1500,
                                ]}
                                speed={50}
                                cursor={true}
                            />
                        </span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Stop guessing about your future. Our AI-powered platform helps you
                        choose the right degree, find the best government colleges, and map
                        your career path with confidence.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/assessment"
                            className="inline-flex cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 items-center justify-center transform hover:translate-x-1 gap-x-2 rounded-lg bg-gradient-to-r from-[#2A65F5] to-[#19D7B5]  px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Start Free Assessment <MoveRight size={20} />
                        </a>
                        <a
                            href="#"
                            className="rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                        >
                            Explore Colleges
                        </a>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:mt-28">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            end={stat.end}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
