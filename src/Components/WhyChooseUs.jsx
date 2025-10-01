import { SiTicktick } from "react-icons/si";

// SVG Icon for the graduation cap
const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.076 9.227m3.076-9.227l4.286 2.143m-4.286-2.143l4.286 2.143m11.196 0l4.286-2.143m-4.286 2.143l-4.286 2.143m0 0l-4.286 2.143m4.286-2.143l4.286 2.143" />
    </svg>
);

// SVG Icon for the arrow in the button
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const WhyChooseUs = () => {
  const features = [
    "Make informed decisions about your academic future",
    "Discover government colleges you never knew existed",
    "Understand career opportunities for each degree",
    "Get personalized recommendations based on your profile",
    "Access all information in one convenient platform",
    "Stay updated with important deadlines and dates",
  ];

  return (
    <section className="bg-white font-sans py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Disha?
          </h2>
          <p className="text-gray-600 text-lg">
            We're committed to helping students make informed decisions about their education and career paths.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <SiTicktick className="w-4 h-4 text-green-500" />
                </div>
                <span className="ml-3 text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card Section */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] text-white rounded-2xl shadow-xl p-8 max-w-md w-full">
            <GraduationCapIcon />
            <h3 className="text-3xl font-bold mt-6 mb-3">
              Ready to Get Started?
            </h3>
            <p className="opacity-90 mb-8">
              Take our comprehensive assessment and discover your ideal academic path in just 10 minutes.
            </p>
            <button className="bg-white cursor-pointer text-blue-600 font-bold py-3 px-6 rounded-lg flex items-center gap-3 transition-transform duration-300 ease-in-out hover:scale-105 shadow-md">
                <p className="bg-gradient-to-r from-[#2A65F5] font-sans to-[#19D7B5] bg-clip-text text-transparent">Begin Assessment</p>
              
              <ArrowRightIcon />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;