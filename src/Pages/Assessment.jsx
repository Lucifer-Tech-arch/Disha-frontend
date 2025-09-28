import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiTicktick } from "react-icons/si";
import { LuBrain } from "react-icons/lu";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // 5 questions
  const MOCK_QUESTIONS = [
    {
      id: 1,
      text: "Which type of activity excites you the most?",
      options: [
        "Solving puzzles, coding, or analyzing data",
        "Designing, creating content, or artistic work",
        "Leading teams, starting businesses, or making strategies",
        "Helping people, teaching, or healthcare support",
        "Exploring new ideas, experimenting, or doing research",
      ]
    },
    {
      id: 2,
      text: "What environment do you see yourself thriving in?",
      options: [
        "Working with technology and digital tools",
        "A creative studio, media, or arts-related space",
        "Hospitals, schools, or community services",
        "Corporate offices, startups, or management roles",
        "Research labs, universities, or field projects"
      ]
    },
    {
      id: 3,
      text: "Which school subject do you enjoy the most?",
      options: [
        "Mathematics, Computer Science, or Physics",
        "Arts, Literature, or Music",
        "Biology, Psychology, or Social Studies",
        "Business Studies, Economics, or Political Science",
        "Science experiments, History, or Geography"
      ]
    },
    {
      id: 4,
      text: "What motivates you the most in a career?",
      options: [
        "Building innovative solutions and solving problems",
        "Expressing creativity and sharing ideas",
        "Making a difference in people's lives",
        "Achieving success, leadership, and financial growth",
        "Discovering new knowledge and contributing to society"
      ]
    },
    {
      id: 5,
      text: "How do you prefer working?",
      options: [
        "Independently with logical tasks",
        "Freely with imagination and flexible rules",
        "Interacting and supporting others",
        "Taking responsibility and leading projects",
        "Exploring questions and researching answers"
      ]
    }
  ];

  // Progress calculation (answered questions / total questions)
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / MOCK_QUESTIONS.length) * 100);


  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/results', { state: { answers } });
    }, 2000);
  };

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center mt-[100px]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700">Processing your results...</h2>
      </div>
    );
  }

  const question = MOCK_QUESTIONS[currentQuestion];

  return (
    <div className="bg-gray-50 py-12 flex-grow mt-[80px]">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm flex justify-center items-center gap-2 font-medium text-gray-600">
                <LuBrain className='h-5 w-5 text-blue-500' />
                Question {currentQuestion + 1} of {MOCK_QUESTIONS.length}
              </p>
              <p className="text-sm font-medium  bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">{progress}% Complete</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className=" bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question.text}</h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {question.options.map(option => (
              <label
                key={option}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition
                  ${answers[currentQuestion] === option
                    ? 'bg-green-100 border-green-500 ring-2 ring-green-200'
                    : 'bg-white border-gray-200 hover:bg-gray-50'}`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleAnswer(option)}
                  className="w-5 h-5 text-blue-600 form-radio mr-4 focus:ring-blue-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="text-gray-600 font-semibold cursor-pointer disabled:opacity-50"
            >
              &larr; Previous
            </button>

            {currentQuestion < MOCK_QUESTIONS.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className={` bg-gradient-to-r from-[#2A65F5] cursor-pointer to-[#19D7B5] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition disabled:opacity-50`}
              >
                Next &rarr;
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={!answers[currentQuestion]}
                className=" bg-gradient-to-r from-[#2A65F5] cursor-pointer flex justify-center items-center to-[#19D7B5] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition disabled:opacity-50"
              >
                <SiTicktick className="w-4 h-4 text-white mr-3" />
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
