import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { SideBar } from '@/components';
import { StoreProvider } from '@/context';

export const metadata: Metadata = {
    title: 'Kusodu',
    description: 'The modern way to sudoku !',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning={true}>
            <body
                suppressHydrationWarning={true}
                className={
                    'flex h-screen w-full gap-4 bg-brighter p-4 font-sans'
                }
            >
                <StoreProvider>
                    <SideBar />
                    <main className={'h-full grow rounded-2xl bg-dark'}>
                        {children}
                    </main>
                </StoreProvider>
            </body>
        </html>
    );
}
