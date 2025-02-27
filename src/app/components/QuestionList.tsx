'use client';

import React, { useState } from 'react';
import { questions } from './questions';
import Question from './Question';

interface QuestionListProps {
    onComplete: (allQuestionsAndAnswers: { question: string, answer: string }[]) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [questionHistory, setQuestionHistory] = useState<{ question: string, answer: string }[]>([]);

    const handleAnswer = (answer: string) => {
        setQuestionHistory(prev => [
            ...prev,
            { question: questions[currentQuestionIndex].text, answer }
        ]);

        setAnswers(prev => [...prev, answer]);

        if (currentQuestionIndex + 1 < questions.length) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 800); // 0.8 seconds delay 
        } else {
            setTimeout(() => {
                onComplete([...questionHistory, { question: questions[currentQuestionIndex].text, answer }]);
            }, 800);
        }
    };

    return (
        <div className="flex items-center justify-center text-gray-200 border rounded-3xl border-gray-400">
            <div key={currentQuestionIndex} className="w-full max-w-2xl p-6 rounded-lg animate-fade-in">
                <Question question={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />
            </div>
        </div>
    );
};

export default QuestionList;
