// src/app/components/Question.tsx
import React, { useState, useEffect } from 'react';

interface QuestionProps {
    question: {
        text: string;
        options: string[];
        hints: string[];
    };
    handleAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {
    const [hint, setHint] = useState('');
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showHint) {
            timer = setTimeout(() => {
                setShowHint(false);
            }, 1000); 
        }
        return () => clearTimeout(timer);
    }, [showHint]);

    const handleOptionClick = (option: string, index: number) => {
        setHint(question.hints[index]);
        setShowHint(true);
        handleAnswer(option);
    };

    return (
        <div className="relative my-4 backdrop-blur rounded p-4 shadow-lg min-h-screen">
            <h2 className="text-2xl mb-4 text-white">{question.text}</h2>
            <div className="flex flex-col max-w-xs mx-auto">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option, index)}
                        className="bg-gradient-to-r to-purple-600 text-white py-2 px-4 rounded-full m-1 transition-transform transform hover:scale-105"
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showHint && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-yellow-200 text-yellow-800 rounded-lg shadow-md transition-opacity duration-1000 ease-in-out opacity-100">
                    {hint}
                </div>
            )}
        </div>
    );
};

export default Question;
