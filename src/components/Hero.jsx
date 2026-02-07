import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-start items-center text-center relative overflow-hidden bg-black text-white pt-10">
            {/* Video Container - Primary Visual */}
            <div className="w-full max-w-5xl mx-auto mb-12 relative z-10 p-4">
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '1rem',
                    boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
                    border: '1px solid #374151'
                }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        <source src="/assets/demo-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Content Container - Below Video */}
            <div className="container relative z-10 animate-fade-in pb-20">
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
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
                    onClick={() => document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore the Solution
                </button>
            </div>

            {/* Background Ambient Glow */}
            <div className="absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(30, 58, 138, 0.15) 0%, rgba(0,0,0,1) 70%)',
                }}></div>
            </div>
        </section>
    );
};

export default Hero;
