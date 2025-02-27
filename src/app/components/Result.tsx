import React from 'react';
import Link from 'next/link';  // Added import for Link component

interface ResultProps {
    message: string;
}

const Result: React.FC<ResultProps> = ({ message }) => {
    const [keyword, ...paragraphs] = message.split('\n\n');
    const regex = /State:\s*([^\n]+)/;
    const match = keyword.match(regex);
    const extractedState = match ? match[1] : '';
    
    return (
        <div className="my-8 p-8 bg-gray-800/90 text-gray-200 rounded-lg shadow-xl max-w-3xl mx-auto animate-fade-in backdrop-blur-sm overflow-auto max-h-[80vh] scrollbar-hide">
            <h2 className="text-3xl font-semibold text-[#AD98D7] text-center mb-8 mt-2 font-['NoonnuBasicGothicRegular']">
                Stress Analysis Results
            </h2>
            
            {/* Keyword Section */}
            <div className="flex justify-center mb-8">
                <div className="inline-block px-6 py-3 bg-[#AD98D7]/20 rounded-full border border-[#AD98D7] text-[#AD98D7]">
                    <span className="text-xl font-bold font-['NoonnuBasicGothicRegular']">
                        {extractedState}
                    </span>
                </div>
            </div>

            {/* Body Content */}
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

            {/* Disclaimer */}
            <div className="mt-12 text-center text-sm text-gray-400">
                <p>※ This analysis result is for reference only, and we recommend consulting a professional for accurate diagnosis.</p>
            </div>

            {/* Restart Button */}
            <div className="mt-8 text-center">
                <Link 
                    href="/"
                    className="inline-block px-6 py-3 bg-[#6C52A0] text-white rounded-full 
                             text-lg font-bold transform transition-all duration-200 
                             hover:scale-105 hover:bg-[#9F8AC7] shadow-lg
                             font-['NoonnuBasicGothicRegular']"
                >
                    Restart Test
                </Link>
            </div>
        </div>
    );
};

export default Result;
