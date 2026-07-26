import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
);

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);

    return (
        <button
            id="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
                background: darkMode ? 'rgba(96,165,250,0.15)' : 'rgba(59,130,246,0.1)',
                border: `1.5px solid ${darkMode ? 'rgba(96,165,250,0.3)' : 'rgba(59,130,246,0.2)'}`,
                color: darkMode ? '#60a5fa' : '#3b82f6',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flexShrink: 0,
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(15deg)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(59,130,246,0.4)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default DarkModeToggle;
