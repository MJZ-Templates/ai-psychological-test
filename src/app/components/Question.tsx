import React, { useState, useEffect } from 'react';

interface QuestionProps {
    question: {
        text: string;
        options: string[];
        answers: string[];
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
        setHint(question.answers[index]);
        setShowHint(true);
        handleAnswer(option);
    };

    return (
        <div className="rounded p-6 min-h-screen flex flex-col items-center justify-start text-center"> 
            <h2 className="text-3xl font-semibold text-white mb-6">{question.text}</h2>
            <div className="flex flex-col w-full max-w-md mt-20"> 
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option, index)}
                        className="button mb-3"
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showHint && (
                <div className="mt-4 p-3 bg-[#6C52A0] text-black text-1s rounded-lg shadow-md animate-fade-in rounded-3xl">
                    {hint}
                </div>
            )}
        </div>
    );
};

export default Question;
