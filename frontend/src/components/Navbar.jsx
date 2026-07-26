import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { token, userData, logout, darkMode } = useContext(AppContext);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        height: '68px',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.4s ease',
    };

    const linkStyle = {
        color: 'var(--text-secondary)',
        fontSize: '0.8125rem',
        fontWeight: '600',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '4px 0',
        transition: 'color 0.2s',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <>
            <nav style={navStyle} id="main-navbar">
                {/* Logo */}
                <img
                    onClick={() => navigate('/')}
                    src={assets.logo}
                    alt="MediCare"
                    style={{ height: '38px', cursor: 'pointer' }}
                />

                {/* Desktop nav links */}
                <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}
                    className="hidden md:flex">
                    {[
                        { to: '/', label: 'HOME' },
                        { to: '/doctors', label: 'ALL DOCTORS' },
                        { to: '/about', label: 'ABOUT' },
                        { to: '/contact', label: 'CONTACT' },
                    ].map(({ to, label }) => (
                        <NavLink to={to} key={to} end={to === '/'}>
                            {({ isActive }) => (
                                <li style={{ ...linkStyle, color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)', position: 'relative' }}>
                                    {label}
                                    {isActive && (
                                        <span style={{
                                            position: 'absolute',
                                            bottom: '-4px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: 'var(--accent-blue)',
                                            borderRadius: '1px',
                                        }} />
                                    )}
                                </li>
                            )}
                        </NavLink>
                    ))}
                </ul>

                {/* Right actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <DarkModeToggle />

                    {token ? (
                        <div className="relative group" style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img
                                    src={userData?.image || assets.profile_pic}
                                    alt="Profile"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid var(--accent-blue)',
                                    }}
                                />
                                <img src={assets.dropdown_icon} alt="" style={{ width: '10px', opacity: 0.6 }} />
                            </div>

                            {/* Dropdown */}
                            <div className="absolute top-full right-0 pt-3 hidden group-hover:block animate-fadeIn" style={{ minWidth: '180px' }}>
                                <div style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    boxShadow: 'var(--shadow-hover)',
                                }}>
                                    {[
                                        { label: 'My Profile', action: () => navigate('/my-profile') },
                                        { label: 'My Appointments', action: () => navigate('/my-appointments') },
                                        { label: 'Logout', action: handleLogout, danger: true },
                                    ].map(({ label, action, danger }) => (
                                        <p
                                            key={label}
                                            onClick={action}
                                            style={{
                                                padding: '10px 14px',
                                                borderRadius: '8px',
                                                fontSize: '0.875rem',
                                                fontWeight: '500',
                                                color: danger ? '#ef4444' : 'var(--text-primary)',
                                                cursor: 'pointer',
                                                transition: 'background 0.15s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-surface)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                            {label}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            id="create-account-btn"
                            onClick={() => navigate('/login')}
                            className="btn-primary hidden md:block"
                        >
                            Create Account
                        </button>
                    )}

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setShowMenu(true)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                        aria-label="Open menu"
                    >
                        <img src={assets.menu_icon} alt="Menu" style={{ width: '24px' }} />
                    </button>
                </div>
            </nav>

            {/* Spacer so content doesn't hide under fixed nav */}
            <div style={{ height: '68px' }} />

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'var(--bg-secondary)',
                transform: showMenu ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border-color)' }}>
                    <img src={assets.logo} alt="MediCare" style={{ height: '32px' }} />
                    <button
                        onClick={() => setShowMenu(false)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Close menu"
                    >
                        <img src={assets.cross_icon} alt="Close" style={{ width: '24px' }} />
                    </button>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '20px 16px', listStyle: 'none', margin: 0 }}>
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/doctors', label: 'All Doctors' },
                        { to: '/about', label: 'About' },
                        { to: '/contact', label: 'Contact' },
                    ].map(({ to, label }) => (
                        <NavLink key={to} to={to} onClick={() => setShowMenu(false)} end={to === '/'}>
                            {({ isActive }) => (
                                <li style={{
                                    padding: '14px 16px',
                                    borderRadius: '10px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: isActive ? '#fff' : 'var(--text-primary)',
                                    background: isActive ? 'var(--accent-blue)' : 'transparent',
                                    transition: 'all 0.2s',
                                }}>
                                    {label}
                                </li>
                            )}
                        </NavLink>
                    ))}
                </ul>

                <div style={{ padding: '0 16px 20px', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <DarkModeToggle />
                    {token ? (
                        <button onClick={() => { handleLogout(); setShowMenu(false); }} className="btn-secondary" style={{ width: '100%' }}>
                            Logout
                        </button>
                    ) : (
                        <button onClick={() => { navigate('/login'); setShowMenu(false); }} className="btn-primary" style={{ width: '100%' }}>
                            Create Account
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;