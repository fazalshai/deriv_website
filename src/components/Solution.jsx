import React from 'react';

const StageCard = ({ number, title, subtitle, description, tech, color }) => (
    <div style={{
        backgroundColor: '#1f2937',
        padding: '2rem',
        borderRadius: '1rem',
        borderTop: `4px solid ${color}`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
    }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ color: color, fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Stage {number}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>{title}</h3>
        <h4 style={{ fontSize: '1.1rem', color: color, marginBottom: '1rem', fontStyle: 'italic' }}>{subtitle}</h4>
        <p style={{ color: '#d1d5db', marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', display: 'block', marginBottom: '0.5rem' }}>Powered by:</span>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'white', fontSize: '0.875rem', fontFamily: 'monospace' }}>
                {tech}
            </div>
        </div>
    </div>
);

const Solution = () => {
    return (
        <section className="py-20" style={{ backgroundColor: '#111827', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>The Solution: The Three-Stage "Surgical" Filter</h2>
                    <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto' }}>
                        We didn't just build a better rule; we built a <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>Fuzzy-Logic Orchestrator</span>.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <StageCard
                        number="1"
                        title='The "Hammer"'
                        subtitle=".NET 8 Performance"
                        description="While other teams' scripts crash under pressure, our system uses a C#/.NET 8 Bridge to ingest 7,378 Transactions Per Second (TPS). We process a week's worth of data in under 3 minutes."
                        tech="C# / .NET 8"
                        color="#3b82f6" // Blue
                    />
                    <StageCard
                        number="2"
                        title="Temporal Intelligence"
                        subtitle='The "Soft" Brain'
                        description="Instead of binary 'Yes/No' rules, we use Soft Computing. Z-Score Analysis mathematically learns what is normal. Geographic Velocity calculates impossible travel physics."
                        tech="Soft Computing / Z-Score"
                        color="#ec4899" // Pink
                    />
                    <StageCard
                        number="3"
                        title="The Regulatory Radar"
                        subtitle="Gemini 1.5 Pro"
                        description="The system takes the final 50 high-confidence cases and hands them to our LangGraph Agent. Uses Gemini 1.5 Pro Grounding to read latest UAE EOCN Feb 2026 AML regulations live."
                        tech="Gemini 1.5 Pro"
                        color="#10b981" // Green
                    />
                </div>
            </div>
        </section>
    );
};

export default Solution;
