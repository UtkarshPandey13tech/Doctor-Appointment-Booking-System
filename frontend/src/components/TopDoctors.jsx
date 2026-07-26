import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const SkeletonCard = () => (
    <div style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-card)',
    }}>
        <div className="skeleton" style={{ height: '200px' }} />
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="skeleton" style={{ height: '12px', width: '60%' }} />
            <div className="skeleton" style={{ height: '18px', width: '80%' }} />
            <div className="skeleton" style={{ height: '14px', width: '50%' }} />
        </div>
    </div>
);

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const isLoading = doctors.length === 0;

    return (
        <section className="px-1 py-10 sm:py-16" style={{ textAlign: 'center' }}>
            {/* Heading */}
            <div className="animate-fadeInUp" style={{ marginBottom: '48px' }}>
                <p style={{
                    color: 'var(--accent-blue)',
                    fontWeight: '600',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                }}>
                    Our Specialists
                </p>
                <h2 className="section-heading" style={{ marginBottom: '14px' }}>Top Doctors to Book</h2>
                <p className="section-subtext" style={{ maxWidth: '480px', margin: '0 auto' }}>
                    Browse through our extensive list of verified and trusted healthcare professionals.
                </p>
            </div>

            {/* Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
                gap: '20px',
                marginBottom: '40px',
            }}>
                {isLoading
                    ? Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
                    : doctors.slice(0, 8).map((item, index) => (
                        <div
                            key={index}
                            id={`doctor-card-${item._id}`}
                            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
                            className="doctor-card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.07}s` }}
                        >
                            {/* Image area */}
                            <div style={{
                                background: 'linear-gradient(135deg, var(--bg-surface), var(--bg-card))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '200px',
                                padding: '16px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'radial-gradient(circle at 70% 30%, rgba(59,130,246,0.08), transparent 60%)',
                                }} />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ height: '170px', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                                />
                            </div>

                            {/* Info */}
                            <div style={{ padding: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
                                    <span style={{
                                        width: '8px', height: '8px',
                                        background: '#10b981',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 6px rgba(16,185,129,0.5)',
                                        display: 'inline-block',
                                        flexShrink: 0,
                                    }} />
                                    <span style={{ color: '#10b981', fontSize: '0.8125rem', fontWeight: '600' }}>Available</span>
                                </div>
                                <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 4px' }}>{item.name}</p>
                                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0 }}>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button
                id="see-more-doctors-btn"
                onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
                className="btn-secondary"
            >
                View All Doctors →
            </button>
        </section>
    );
};

export default TopDoctors;