// src/app/layout.tsx
import React from 'react';
import '@/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ko">
            <head>
                <title>스트레스 감지 심리테스트</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="심리테스트를 통해 스트레스 수준을 감지합니다." />
            </head>
            <body className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 min-h-screen">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
