// src/app/components/StartPage.tsx
import React from 'react';
import Link from 'next/link';

const StartPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 animate-fade-in">
        {/* 타이틀 섹션 */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-['Ownglyph_ParkDaHyun'] text-[#AD98D7]">
            스트레스 분석 테스트
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-['NoonnuBasicGothicRegular']">
            AI가 당신의 스트레스 수준을 분석해드립니다
          </p>
        </div>

        {/* 설명 섹션 */}
        <div className="max-w-md mx-auto space-y-4 text-gray-400 font-['NoonnuBasicGothicRegular']">
          <p>• 약 3분 정도 소요됩니다</p>
          <p>• 솔직한 답변일수록 정확한 분석이 가능합니다</p>
          <p>• 전문가의 관점에서 맞춤형 조언을 받아보세요</p>
        </div>

        {/* 시작 버튼 */}
        <Link 
          href="/test"
          className="inline-block px-8 py-4 bg-[#AD98D7] text-white rounded-full 
                     text-lg font-bold transform transition-all duration-200 
                     hover:scale-105 hover:bg-[#9F8AC7] shadow-lg
                     font-['NoonnuBasicGothicRegular']"
        >
          테스트 시작하기
        </Link>

        {/* 추가 정보 */}
        <div className="text-sm text-gray-500 mt-8">
          <p>※ 이 테스트는 참고용이며, 정확한 진단을 위해서는</p>
          <p>전문가와 상담하시기를 권장드립니다.</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;