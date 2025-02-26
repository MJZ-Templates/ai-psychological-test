// src/app/layout.tsx
import '@/styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <title>스트레스 감지 심리테스트</title>
            </head>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
