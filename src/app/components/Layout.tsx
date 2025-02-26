// src/app/components/Layout.tsx
'use client';

import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="container mx-auto p-4">
        <header className="border-b-2 py-4">
            <h1 className="text-2xl">스트레스 감지 심리테스트</h1>
        </header>
        <main className="my-8">{children}</main>
    </div>
);

export default Layout;
