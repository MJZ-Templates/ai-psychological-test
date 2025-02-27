// src/app/components/QuestionList.tsx
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
            }, 1000); // Add a 1-second delay before showing the next question
        } else {
            setTimeout(() => {
                onComplete([...answers, answer]);
            }, 1000); // Add a 1-second delay before completing the quiz
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-cover animate-gradient-x">
            <div key={currentQuestionIndex} className="w-full max-w-3xl fade-in-animation">
                <Question question={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />
            </div>
        </div>
    );
};

export default QuestionList;
