import React from 'react';

const Problem = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#111827', color: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#ef4444' }}>
          The Problem: The "Analyst Burnout" Loop
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ fontSize: '1.125rem', color: '#d1d5db', lineHeight: '1.8' }}>
            <p className="mb-4">
              Every day, Deriv compliance officers are hit with a <span style={{ color: '#f87171', fontWeight: 'bold' }}>"firehose"</span> of 2,000 weekly alerts.
            </p>
            <p className="mb-4">
              <span style={{ color: 'white', fontWeight: '600' }}>95% of these are garbage</span>—normal people making normal deposits. Because the old rules are "rigid," a $10,001 deposit flags a doctor, while a $0.01 profit launderer slips through.
            </p>
            <p>
              Analysts spend hours clicking between 5 systems, while the real criminals are already gone.
            </p>
          </div>

          <div style={{
            backgroundColor: '#1f2937',
            padding: '2rem',
            borderRadius: '0.75rem',
            border: '1px solid rgba(127, 29, 29, 0.5)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1, fontSize: '8rem', fontFamily: 'monospace', color: '#dc2626' }}>⚠</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#f87171' }}>Current State</h3>
            <ul style={{ listStyle: 'none', space: '1rem' }}>
              {["2,000 Alerts / Week", "95% False Positives", "Rigid Rules", "Slow Response Time"].map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', color: '#fca5a5', marginBottom: '1rem' }}>
                  <span style={{ marginRight: '0.75rem', fontSize: '1.25rem' }}>❌</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
