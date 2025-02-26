// src/app/components/QuestionList.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Question from './Question';

interface Question {
    text: string;
    options: string[];
}

const questions: Question[] = [
    { text: '최근 일주일 동안 스트레스를 얼마나 느끼셨나요?', options: ['많이', '적당히', '거의 안 느꼈다'] },
    { text: '스트레스로 인해 수면에 문제가 있나요?', options: ['네', '아니요'] },
    { text: '최근에 어떤 일로 인해 스트레스를 가장 많이 받았나요?', options: ['직장/학교', '가정', '친구/사회적 관계', '기타'] },
    { text: '스트레스 해소를 위해 무엇을 하나요?', options: ['운동', '음주/흡연', '취미 활동', '그냥 참는다'] },
    { text: '스트레스가 심할 때, 신체적 증상을 느끼나요?', options: ['두통', '소화불량', '피로감', '없다'] },
    { text: '스트레스를 받은 후 기분 전환 방법은 무엇인가요?', options: ['산책', '명상', '수다 떨기', '잠자기'] },
    { text: '하루 중 스트레스를 많이 느끼는 시간대는 언제인가요?', options: ['아침', '오후', '저녁', '밤'] },
    { text: '스트레스 수준이 건강에 얼마나 영향을 미친다고 생각하나요?', options: ['매우 많이', '적당히', '거의 없다'] },
];

interface QuestionListProps {
    onComplete: (answers: string[]) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    // 질문이 변경될 때 클래스 변경을 통한 애니메이션 처리를 연습해보세요.
    const handleAnswer = (answer: string) => {
        setAnswers(prev => [...prev, answer]);
        
        if (currentQuestionIndex + 1 < questions.length) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 0);
        } else {
            onComplete([...answers, answer]);
        }
    };

    // 현재 질문의 텍스트를 바꾸면서 애니메이션을 보여줄 수 있는 방법입니다.
    return (
        <div key={currentQuestionIndex} className="fade-in-animation">
            <Question question={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />
        </div>
    );
};

export default QuestionList;
