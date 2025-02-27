'use client';

import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-diagonal text-gray-200">
        <header className="w-full py-6 text-center">
            <h1 className="text-1xl font-bold text-white tracking-wide">스트레스 감지 심리테스트</h1>
        </header>
        <main className="w-full max-w-4xl p-6 rounded-lg shadow-lg">
            {children}
        </main>
    </div>
);

export default Layout;
