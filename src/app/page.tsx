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
      console.error('An error occurred while making the API request:', error);
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

export default HomePage;
