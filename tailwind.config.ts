import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            action: '#FFFF00',
            dark: '#101010',
            brighter: '#232323',
            primary: '#B4B4B4',
            white: '#FFFFFF',
            blue: '#1E90FF',
            green: '#00FF00',
            red: '#FF0000',
        },
        fontFamily: {
            sans: ['Jockey One', 'Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [
        function ({ addVariant }: any) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
            addVariant('child-child', '& > * > *');
            addVariant('child-child-hover', '&:hover > * > *');
        },
    ],
};
export default config;
