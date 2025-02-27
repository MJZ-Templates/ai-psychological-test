import React from 'react';

interface ResultProps {
    message: string;
}

const Result: React.FC<ResultProps> = ({ message }) => {
    // 첫 번째 줄을 키워드로 분리
    const [keyword, ...paragraphs] = message.split('\n\n');
    const regex = /상태:\s*([^\n]+)/;
    const match = keyword.match(regex);
    const extractedState = match ? match[1] : '';
    
    return (
        <div className="my-8 p-8 bg-gray-800/90 text-gray-200 rounded-lg shadow-xl max-w-3xl mx-auto animate-fade-in backdrop-blur-sm overflow-auto max-h-[80vh] scrollbar-hide">

            <h2 className="text-3xl font-semibold text-[#AD98D7] text-center mb-8 mt-2 font-['NoonnuBasicGothicRegular']">
                스트레스 분석 결과
            </h2>
            
            {/* 키워드 섹션 */}
            <div className="flex justify-center mb-8">
                <div className="inline-block px-6 py-3 bg-[#AD98D7]/20 rounded-full border border-[#AD98D7] text-[#AD98D7]">
                    <span className="text-xl font-bold font-['NoonnuBasicGothicRegular']">
                        {extractedState}
                    </span>
                </div>
            </div>

            {/* 본문 내용 */}
            <div className="space-y-6 text-gray-300">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 tracking-wide font-['NoonnuBasicGothicRegular'] px-4">
                        {paragraph.trim().startsWith('•') ? (
                            <span className="block pl-4">{paragraph}</span>
                        ) : (
                            paragraph
                        )}
                    </p>
                ))}
            </div>

            {/* 참고 문구 */}
            <div className="mt-12 text-center text-sm text-gray-400">
                <p>※ 이 분석 결과는 참고용이며, 정확한 진단을 위해서는 전문가와 상담하시기를 권장드립니다.</p>
            </div>
        </div>
    );
};

export default Result;