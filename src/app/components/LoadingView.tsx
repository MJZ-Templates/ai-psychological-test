// components/LoadingView.tsx
import React from 'react';

const LoadingView = () => {
  return (
    <div className="my-8 p-8 bg-gray-800/90 text-gray-200 rounded-lg shadow-xl max-w-3xl mx-auto animate-fade-in backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="mb-8">
        <div className="w-12 h-12 border-4 border-[#AD98D7] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h2 className="text-2xl font-['Ownglyph_ParkDaHyun'] font-semibold text-[#AD98D7] mb-4">분석 중입니다</h2>
      <p className="text-gray-400 text-center font-['NoonnuBasicGothicRegular']">
        AI가 당신의 스트레스 상태를 분석하고 있습니다...<br/>
        잠시만 기다려주세요.
      </p>
    </div>
  );
};

export default LoadingView;