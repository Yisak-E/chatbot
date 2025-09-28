import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center px-6">
      {/* Logo / Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 text-center">
       Mini Chat Bot
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center text-lg md:text-xl mb-8 max-w-md">
        Need a chat? come and ask me anything that stacked in your head.
      </p>

      {/* Get Started Button */}
      <button
        onClick={() => navigate('/chatPage')}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
      >
        Vamos amigo
      </button>

      {/* Mobile View Hint */}
      <div className="mt-10 text-sm text-gray-500 text-center">
        Optimized for mobile — swipe, tap, and track on the go!
      </div>
    </div>
  );
}

export default Landing;