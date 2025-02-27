import React from 'react';

interface ResultProps {
    message: string;
}

const Result: React.FC<ResultProps> = ({ message }) => (
    <div className="my-8 p-8 bg-gray-800/90 text-gray-200 rounded-lg shadow-xl max-w-3xl mx-auto animate-fade-in backdrop-blur-sm">
        <h2 className="text-3xl font-semibold text-[#AD98D7] text-center mb-12 mt-4 font-['Ownglyph_ParkDaHyun']">
            스트레스 분석 결과
        </h2>
        <div className="space-y-6 text-gray-300">
            {message.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 tracking-wide font-['NoonnuBasicGothicRegular'] px-4">
                    {paragraph.trim().startsWith('•') ? (
                        <span className="block pl-4">{paragraph}</span>
                    ) : (
                        paragraph
                    )}
                </p>
            ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
            <p>※ 이 분석 결과는 참고용이며, 정확한 진단을 위해서는 전문가와 상담하시기를 권장드립니다.</p>
        </div>
    </div>
);

export default Result;