import React from 'react';
import '@/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className="h-screen w-screen">
            <head>
                <title>Stress Detection Psychological Test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Detect stress levels through psychological testing." />
            </head>
            <body className="h-screen w-screen text-gray-200 overflow-hidden">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
