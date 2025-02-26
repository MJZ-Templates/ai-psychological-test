// app/components/Result.tsx
import React from 'react';

interface ResultProps {
    message: string;
}

const Result: React.FC<ResultProps> = ({ message }) => (
    <div className="my-8 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">스트레스 분석 결과</h2>
        <p className="text-gray-800 leading-relaxed whitespace-pre-wrap break-words">{message}</p>
    </div>
);

export default Result;
