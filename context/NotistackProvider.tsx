'use client';

import { SnackbarProvider } from 'notistack';

export function NotistackProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <SnackbarProvider>{children}</SnackbarProvider>;
}
