// src/app/test/page.tsx
'use client';

import React, { useState } from 'react';
import Layout from '@/app/components/Layout';
import QuestionList from '@/app/components/QuestionList';
import Result from '@/app/components/Result';
import LoadingView from '@/app/components/LoadingView';

const TestPage: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async (allQuestionsAndAnswers: { question: string; answer: string }[]) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/analyze-stress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ allQuestionsAndAnswers }),
      });

      if (!response.ok) {
        console.error('API response failed.');
        return;
      }

      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      console.error('An error occurred during the API request:', error);
    } finally {
      setIsLoading(false);
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

export default TestPage;
