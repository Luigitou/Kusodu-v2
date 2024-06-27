'use client';

import { ReactNode } from 'react';
import { NavButton } from '@/components/Sidebar/NavButton';
import {
    AnalyticsIcon,
    MessageTranslateIcon,
    PlayIcon,
    SettingsIcon,
    SwordIcon,
    UserMultipleIcon,
} from '@/lib/icons';
import Link from 'next/link';

type ButtonsType = {
    title: string;
    href: string;
    icon: ReactNode;
};

const mainButtons: ButtonsType[] = [
    {
        title: 'Singleplayer',
        href: '/singleplayer',
        icon: <PlayIcon />,
    },
    {
        title: 'Coop',
        href: '/coop',
        icon: <UserMultipleIcon />,
    },
    {
        title: 'Multiplayer',
        href: '/multiplayer',
        icon: <SwordIcon />,
    },
];

const secondaryButtons: ButtonsType[] = [
    {
        title: 'Settings',
        href: '/settings',
        icon: <SettingsIcon />,
    },
    {
        title: 'Language',
        href: '/language',
        icon: <MessageTranslateIcon />,
    },
];

export const SideBar = () => {
    return (
        <aside className={'flex flex-col items-center justify-between'}>
            <Link href={'/'}>
                <h1
                    className={
                        'cursor-pointer px-4 text-6xl text-white hover:text-action'
                    }
                >
                    K.
                </h1>
            </Link>
            <nav className={'flex flex-col gap-8'}>
                {mainButtons.map((button, index) => (
                    <NavButton
                        key={index}
                        href={button.href}
                        icon={button.icon}
                    />
                ))}
                <span className={'h-[2px] w-full bg-white'}></span>
                <NavButton icon={<AnalyticsIcon />} href={'/stats'} />
            </nav>
            <div className={'flex flex-col gap-5'}>
                {secondaryButtons.map((button, index) => (
                    <NavButton
                        key={index}
                        href={button.href}
                        icon={button.icon}
                    />
                ))}
            </div>
        </aside>
    );
};
