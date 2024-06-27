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
            className={'child-child-hover:text-action group text-nowrap'}
        >
            <span
                className={
                    ' block h-full w-full transition-transform duration-200 ease-in-out group-hover:translate-x-2'
                }
            >
                {icon}
            </span>
        </Link>
    );
};
