// app/components/Result.tsx
import React from 'react';

interface ResultProps {
    message: string;
}

const Result: React.FC<ResultProps> = ({ message }) => (
    <div className="my-4">
        <h2 className="text-lg mb-2">스트레스 분석 결과</h2>
        <p>{message}</p>
    </div>
);

export default Result;
