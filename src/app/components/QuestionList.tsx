'use client';

import React, { useState, useEffect } from 'react';
import { questions } from './questions';
import Question from './Question';

interface QuestionListProps {
    onComplete: (answers: string[]) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleAnswer = (answer: string) => {
        setAnswers(prev => [...prev, answer]);

        if (currentQuestionIndex + 1 < questions.length) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 800); // 0.8초 딜레이 
        } else {
            setTimeout(() => {
                onComplete([...answers, answer]);
            }, 800);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-gray-200">
            <div key={currentQuestionIndex} className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg animate-fade-in">
                <Question question={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />
            </div>
        </div>
    );
};

export default QuestionList;
