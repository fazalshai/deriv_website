import React from 'react';

const SystemOutputs = () => {
    return (
        <section className="py-20 bg-black text-white border-b border-gray-800">
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Live System Intelligence
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Output 1 */}
                    <div className="group" style={{ background: '#111827', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #374151', transition: 'all 0.3s ease' }}>
                        <div style={{ marginBottom: '1rem', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                            <h3 style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '1.2rem' }}>1. Real-Time Ingestion</h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>High-velocity transaction parsing at 7k+ TPS.</p>
                        </div>
                        <div style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
                            <img
                                src="/src/assets/output-1.png"
                                alt="Real-Time Ingestion Logs"
                                style={{ width: '100%', transition: 'transform 0.5s ease' }}
                                className="group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Output 2 */}
                    <div className="group" style={{ background: '#111827', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #374151', transition: 'all 0.3s ease' }}>
                        <div style={{ marginBottom: '1rem', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                            <h3 style={{ color: '#a78bfa', fontWeight: 'bold', fontSize: '1.2rem' }}>2. Fuzzy Logic Scoring</h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Non-binary "Soft Computing" evaluating risk probability.</p>
                        </div>
                        <div style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
                            <img
                                src="/src/assets/output-2.png"
                                alt="Fuzzy Logic Scoring Matrix"
                                style={{ width: '100%', transition: 'transform 0.5s ease' }}
                                className="group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Output 3 */}
                    <div className="group" style={{ background: '#111827', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #374151', transition: 'all 0.3s ease' }}>
                        <div style={{ marginBottom: '1rem', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                            <h3 style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>3. Automated Investigation</h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>AI-generated SARs and case evidence packages.</p>
                        </div>
                        <div style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
                            <img
                                src="/src/assets/output-3.png"
                                alt="Automated Investigation Output"
                                style={{ width: '100%', transition: 'transform 0.5s ease' }}
                                className="group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemOutputs;
