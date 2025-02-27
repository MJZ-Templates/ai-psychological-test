// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Layout from './components/Layout';
import QuestionList from './components/QuestionList';
import Result from './components/Result';

const HomePage: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleComplete = async (allQuestionsAndAnswers: { question: string; answer: string }[]) => {
    const response = await fetch('/api/analyze-stress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allQuestionsAndAnswers }),
    });

    if (!response.ok) {
      console.error('API 응답이 실패했습니다.');
      return;
    }

    const data = await response.json();
    setResult(data.message);
  };

  return (
    <Layout>
      {result ? (
        <Result message={result} />
      ) : (
        <QuestionList onComplete={handleComplete} />
      )}
    </Layout>
  );
};

export default HomePage;
