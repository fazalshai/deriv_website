import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: '#9ca3af', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid #1f2937' }}>
            <div className="container">
                <p style={{ marginBottom: '0.5rem' }}>&copy; 2026 Sentinel-Node X. All rights reserved.</p>
                <p style={{ fontSize: '0.875rem' }}>Built for the Future of Compliance.</p>
            </div>
        </footer>
    );
};

export default Footer;
