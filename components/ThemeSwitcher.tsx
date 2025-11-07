import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const themes: { name: 'dark' | 'light', icon: React.ReactNode }[] = [
        { name: 'dark', icon: <MoonIcon /> },
        { name: 'light', icon: <SunIcon /> },
    ];

    return (
        <div className="flex items-center space-x-1 p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
            {themes.map((t) => (
                <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={`p-1.5 rounded-full transition-colors duration-300 ${
                        theme === t.name
                            ? 'bg-[var(--accent-color)] text-[var(--accent-color-text)]'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-color-strong)]'
                    }`}
                    aria-label={`Switch to ${t.name} mode`}
                >
                    {t.icon}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;