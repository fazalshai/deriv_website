import React from 'react';

const Contact = () => {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'float 10s infinite ease-in-out'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'float 15s infinite ease-in-out reverse'
                }}></div>
            </div>

            <div className="container relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center" id="contact-section">
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #ffffff, #9ca3af)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Ready to Secure Your Transactions?
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#9ca3af',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Deploy the Sentinel-Node X logic today. Stop the burnout. Catch the signal.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        <div style={{
                            background: 'rgba(31, 41, 55, 0.5)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid #374151',
                            transition: 'transform 0.3s ease, border-color 0.3s ease'
                        }}
                            className="hover:border-blue-500 hover:-translate-y-1"
                        >
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Get in Touch</h3>
                            <a href="mailto:contact@sentinelnodex.ai" style={{
                                color: '#60a5fa',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                display: 'block',
                                marginBottom: '0.5rem'
                            }}>
                                contact@sentinelnodex.ai
                            </a>
                            <p style={{ color: '#9ca3af' }}>For integrations & inquiries</p>
                        </div>

                        <div style={{
                            background: 'rgba(31, 41, 55, 0.5)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid #374151',
                            transition: 'transform 0.3s ease, border-color 0.3s ease'
                        }}
                            className="hover:border-purple-500 hover:-translate-y-1"
                        >
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Locations</h3>
                            <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>Dubai, UAE</p>
                            <p style={{ color: '#9ca3af' }}>Global Remote Operations</p>
                        </div>
                    </div>

                    <button style={{
                        background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '16px 48px',
                        borderRadius: '9999px',
                        border: 'none',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px 0 rgba(124, 58, 237, 0.4)',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.6)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(124, 58, 237, 0.4)';
                        }}
                        onClick={() => window.location.href = 'mailto:contact@sentinelnodex.ai'}
                    >
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
