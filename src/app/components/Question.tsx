// src/app/components/Question.tsx
import React from 'react';

interface QuestionProps {
    question: {
        text: string;
        options: string[];
    };
    handleAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => (
    <div className="my-4 bg-white/70 backdrop-filter backdrop-blur rounded p-4 shadow-lg">
        <h2 className="text-2xl mb-4 text-gray-700">{question.text}</h2>
        <div>
            {question.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="bg-gradient-to-r from-blue-400 to-purple-600 text-white py-2 px-4 rounded-full m-1 transition-transform transform hover:scale-105"
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

export default Question;