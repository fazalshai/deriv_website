import React from 'react';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ background: 'black', color: 'white' }}>
            <div className="absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2))',
                    animation: 'pulse-glow 5s infinite alternate'
                }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, animation: 'fadeIn 1s ease-out' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(to right, #60a5fa, #9333ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    The Story of Sentinel-Node X
                </h1>
                <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: '#d1d5db', marginBottom: '2rem', fontWeight: 300, letterSpacing: '0.05em' }}>
                    From Noise to Signal
                </p>
                <button style={{
                    background: '#2563eb',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '1.1rem',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'
                }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.23)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(37, 99, 235, 0.39)'; }}
                >
                    Explore the Solution
                </button>
            </div>
        </section>
    );
};

export default Hero;
