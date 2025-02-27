// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Layout from './components/Layout';
import QuestionList from './components/QuestionList';
import Result from './components/Result';
import LoadingView from './components/LoadingView';

const HomePage: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async (allQuestionsAndAnswers: { question: string; answer: string }[]) => {
    setIsLoading(true); // 로딩 시작
    
    try {
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
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다:', error);
      // 필요한 경우 에러 처리 로직 추가
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <LoadingView />
      ) : result ? (
        <Result message={result} />
      ) : (
        <QuestionList onComplete={handleComplete} />
      )}
    </Layout>
  );
};

export default HomePage;