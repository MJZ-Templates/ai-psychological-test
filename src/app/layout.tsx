import React from 'react';
import '@/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ko" className="h-screen w-screen">
            <head>
                <title>스트레스 감지 심리테스트</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="심리테스트를 통해 스트레스 수준을 감지합니다." />
            </head>
            <body className="h-screen w-screen text-gray-200 overflow-hidden">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
