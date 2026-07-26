import React, { useContext } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const Header = () => {
    const { darkMode } = useContext(AppContext);

    return (
        <section style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            minHeight: '520px',
            background: darkMode
                ? 'linear-gradient(135deg, #020817 0%, #0f172a 50%, #1e1b4b 100%)'
                : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 55%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        }}>
            {/* Decorative blobs */}
            <div style={{
                position: 'absolute', top: '-60px', right: '-60px',
                width: '320px', height: '320px',
                background: darkMode ? 'rgba(96,165,250,0.08)' : 'rgba(255,255,255,0.12)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '-80px', left: '-40px',
                width: '280px', height: '280px',
                background: darkMode ? 'rgba(167,139,250,0.06)' : 'rgba(6,182,212,0.2)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                pointerEvents: 'none',
            }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                width: '100%',
                padding: '60px 48px',
                alignItems: 'center',
            }} className="header-grid">
                {/* LEFT — Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="animate-fadeInUp">
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        borderRadius: '50px',
                        padding: '6px 16px',
                        width: 'fit-content',
                    }}>
                        <span style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8125rem', fontWeight: '600', letterSpacing: '0.04em' }}>
                            100+ Verified Doctors Online
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                        fontWeight: '800',
                        color: '#ffffff',
                        lineHeight: '1.15',
                        letterSpacing: '-0.03em',
                        margin: 0,
                    }}>
                        Book Appointments<br />
                        <span style={{
                            background: 'linear-gradient(90deg, #bfdbfe, #a5f3fc)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            with Trusted Doctors
                        </span>
                    </h1>

                    {/* Sub-text */}
                    <p style={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        maxWidth: '440px',
                        margin: 0,
                    }} className="animate-fadeInUp delay-100">
                        Experience the convenience of scheduling appointments and staying connected with your healthcare providers — anytime, anywhere.
                    </p>

                    {/* Group profiles */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="animate-fadeInUp delay-200">
                        <img src={assets.group_profiles} alt="Group profiles" style={{ width: '90px' }} />
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                            Joined by <strong style={{ color: '#fff' }}>50,000+</strong> patients
                        </span>
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} className="animate-fadeInUp delay-300">
                        <a
                            href="#speciality"
                            onClick={() => scrollTo(0, 0)}
                            id="book-appointment-cta"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: '#ffffff',
                                color: '#1d4ed8',
                                padding: '14px 28px',
                                borderRadius: '50px',
                                fontWeight: '700',
                                fontSize: '0.9375rem',
                                textDecoration: 'none',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                            }}
                        >
                            Book Appointment
                            <img src={assets.arrow_icon} alt="" style={{ width: '16px' }} />
                        </a>

                        <a
                            href="/about"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'rgba(255,255,255,0.1)',
                                color: '#ffffff',
                                padding: '14px 28px',
                                borderRadius: '50px',
                                fontWeight: '600',
                                fontSize: '0.9375rem',
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.25)',
                                backdropFilter: 'blur(8px)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* RIGHT — Doctor image */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="animate-fadeInUp delay-200 hidden md:flex">
                    <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                        {/* Image card */}
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '20px',
                            padding: '16px',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
                        }}>
                            <img
                                src={assets.header_img}
                                alt="Doctors at MediCare"
                                style={{ width: '100%', borderRadius: '12px', display: 'block' }}
                            />
                        </div>

                        {/* Floating card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '-20px',
                            background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '14px',
                            padding: '14px 18px',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                            minWidth: '200px',
                        }} className="animate-float">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{
                                    width: '36px', height: '36px',
                                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p style={{ fontWeight: '700', fontSize: '0.875rem', color: '#0f172a', margin: 0 }}>Top doctors on call</p>
                                    <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Book for faster consultation</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats pill */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '-16px',
                            background: 'rgba(16,185,129,0.95)',
                            borderRadius: '50px',
                            padding: '8px 16px',
                            boxShadow: '0 8px 20px rgba(16,185,129,0.3)',
                        }}>
                            <p style={{ color: '#fff', fontWeight: '700', fontSize: '0.8125rem', margin: 0 }}>⭐ 4.9 Rating</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .header-grid { grid-template-columns: 1fr !important; padding: 40px 24px !important; }
                }
            `}</style>
        </section>
    );
};

export default Header;