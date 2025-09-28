import React from 'react';

// Using a more standard SVG for the arrow icon
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Future = () => {
  return (
    // Add `relative` and `overflow-hidden` to contain the absolute positioned shapes
    <section className="relative bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] text-white font-sans py-20 px-4 text-center rounded-3xl overflow-hidden">

      {/* Animated Shapes Container */}
      <div className="absolute inset-0 z-0">
        <span className="absolute top-[10%] left-[5%] h-16 w-16 bg-white/10 rounded-full animate-float-slow"></span>
        <span className="absolute top-[20%] right-[10%] h-8 w-8 bg-white/10 rounded-full animate-float-medium"></span>
        <span className="absolute bottom-[5%] left-[20%] h-24 w-24 bg-white/5 rounded-2xl animate-float-fast"></span>
        <span className="absolute bottom-[15%] right-[15%] h-12 w-12 bg-white/10 rounded-full animate-float-slow"></span>
        <span className="absolute top-[40%] left-[45%] h-10 w-10 bg-white/5 rounded-lg animate-float-medium"></span>
      </div>
      
      {/* Main Content - Add `relative` and `z-10` to place it above the shapes */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Your Future Starts Today
        </h2>
        <p className="text-lg sm:text-xl opacity-90">
          Join thousands of students who have found their perfect academic path with AspireOne.
        </p>
        <div className="pt-4">
          <button 
            className="group bg-white font-bold py-3 px-8 rounded-full flex items-center justify-center mx-auto gap-3
                       transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 shadow-lg"
          >
            {/* The text color will transition on parent hover */}
            <p className='bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent font-semibold group-hover:text-white group-hover:bg-none transition-colors'>
              Start Your Journey Now
            </p>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Future;