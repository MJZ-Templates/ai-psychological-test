// app/components/Question.tsx
import React from 'react';

interface QuestionProps {
    question: {
        text: string;
        options: string[];
    };
    handleAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => (
    <div className="my-4">
        <h2 className="text-lg mb-2">{question.text}</h2>
        <div>
            {question.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

export default Question;
