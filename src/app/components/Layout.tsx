// src/app/components/Layout.tsx
'use client';

import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-cover animate-gradient-x">
        <div className="container mx-auto p-4 backdrop-filter backdrop-blur-md bg-white/10 rounded-lg min-h-[calc(100vh-8rem)]">
            <header className="py-4 mb-8">
                <h1 className="text-4xl font-bold text-center text-gray-100">스트레스 감지 심리테스트</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    </div>
);

export default Layout;
