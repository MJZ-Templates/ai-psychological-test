// src/app/components/StartPage.tsx
import React from 'react';
import Link from 'next/link';

const StartPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-start animate-gradient-x">
      <div className="text-center space-y-8 animate-fade-in backdrop-blur-sm bg-gray-200/90 p-8 rounded-2xl">
        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-['NoonnuBasicGothicRegular'] text-[#AD98D7]">
            Stress Analysis Test
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-['NoonnuBasicGothicRegular']">
            AI analyzes your stress level for you
          </p>
        </div>

        {/* Description Section */}
        <div className="max-w-md mx-auto space-y-4 text-gray-400 font-['NoonnuBasicGothicRegular']">
          <p>• Takes about 1 minute</p>
          <p>• More honest answers lead to more accurate analysis</p>
          <p>• Get personalized advice from an expert's perspective</p>
        </div>

        {/* Start Button */}
        <Link 
          href="/test"
          className="inline-block px-8 py-4 bg-[#AD98D7] text-white rounded-full 
                     text-lg font-bold transform transition-all duration-200 
                     hover:scale-105 hover:bg-[#9F8AC7] shadow-lg
                     font-['NoonnuBasicGothicRegular']"
        >
          Start Test
        </Link>

        {/* Additional Information */}
        <div className="text-sm text-gray-500 mt-8">
          <p>※ This test is for reference only, and for accurate diagnosis,</p>
          <p>we recommend consulting a professional.</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
