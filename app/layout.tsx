import type { Metadata } from 'next';
import './globals.css';

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
                className={'h-screen w-full bg-brighter p-4 font-sans'}
            >
                <main className={'h-full grow rounded-2xl bg-dark'}>
                    {children}
                </main>
            </body>
        </html>
    );
}
