import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <section id="speciality" className="px-1 py-10 sm:py-16" style={{ textAlign: 'center' }}>
            <div className="animate-fadeInUp" style={{ marginBottom: '40px' }}>
                <p style={{
                    color: 'var(--accent-blue)',
                    fontWeight: '600',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                }}>
                    Find Your Specialist
                </p>
                <h2 className="section-heading" style={{ marginBottom: '14px' }}>Browse by Speciality</h2>
                <p className="section-subtext" style={{ maxWidth: '440px', margin: '0 auto' }}>
                    Browse trusted doctors across all specialities and schedule hassle-free appointments.
                </p>
            </div>

            <div className="scrollbar-hide -mx-1 flex gap-4 overflow-x-auto px-1 pb-3 sm:justify-center sm:overflow-visible sm:flex-wrap"
                style={{
                justifyContent: 'flex-start',
                scrollbarWidth: 'none',
            }}>
                {specialityData.map((item, index) => (
                    <Link
                        key={index}
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className="animate-fadeInUp"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px',
                            flexShrink: 0,
                            textDecoration: 'none',
                            animationDelay: `${index * 0.08}s`,
                        }}
                    >
                        <div style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '20px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: 'var(--shadow-card)',
                            cursor: 'pointer',
                            padding: '16px',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 16px 32px rgba(59,130,246,0.25)';
                                e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.05))';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                                e.currentTarget.style.background = 'var(--bg-card)';
                            }}
                        >
                            <img src={item.image} alt={item.speciality} style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
                        </div>
                        <span style={{
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: 'var(--text-secondary)',
                            textAlign: 'center',
                            maxWidth: '90px',
                        }}>
                            {item.speciality}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default SpecialityMenu;