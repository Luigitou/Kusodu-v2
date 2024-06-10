'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type NavButtonProps = {
    icon: ReactNode;
    href: string;
};

export const NavButton = ({ icon, href }: NavButtonProps) => {
    return (
        <Link
            href={href}
            className={'relative w-full overflow-hidden text-nowrap'}
        >
            <span>{icon}</span>
        </Link>
    );
};
