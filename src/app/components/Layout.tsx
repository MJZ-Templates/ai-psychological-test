// src/app/components/Layout.tsx
'use client';

import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="container mx-auto p-4 bg-white/70 backdrop-filter backdrop-blur rounded-lg shadow-lg min-h-[calc(100vh-8rem)]">
        <header className="py-4 mb-8">
            <h1 className="text-4xl font-bold text-center text-gray-900">스트레스 감지 심리테스트</h1>
        </header>
        <main>
            {children}
        </main>
    </div>
);

export default Layout;
