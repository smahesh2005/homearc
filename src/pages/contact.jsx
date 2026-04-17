import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-page container fade-in" style={{ padding: '120px 0' }}>
      <h1 className="section-title">Contact Us</h1>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        Have questions? We're here to help. Get in touch with our support team.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
        <div className="glass-card" style={{ padding: '3rem', maxWidth: '520px', width: '100%' }}>
          <h3 style={{ color: 'var(--secondary)', marginBottom: '2rem', fontSize: '1.5rem', textAlign: 'center' }}>Get in Touch</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.8rem' }}>📞</span>
              <div>
                <p style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Phone Number</p>
                <a href="tel:+919087654321" style={{ color: 'var(--primary)', textDecoration: 'none' }}>+91 90876 54321</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.8rem' }}>📧</span>
              <div>
                <p style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Email Address</p>
                <a href="mailto:hello@homearc.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>hello@homearc.com</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.8rem' }}>📍</span>
              <div>
                <p style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Office Address</p>
                <p style={{ color: 'var(--text-muted)' }}>123 Home Street, Chennai, Tamil Nadu - 600001</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.8rem' }}>🕒</span>
              <div>
                <p style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Business Hours</p>
                <p style={{ color: 'var(--text-muted)' }}>Monday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919087654321?text=Hi! I would like to get in touch with HomeArc. Please assist me."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '1.2rem',
              background: '#25D366',
              color: 'white',
              borderRadius: '12px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.45)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35)'; }}
          >
            📱 Chat with us on WhatsApp
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="glass-card" style={{ padding: '2rem', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>Find Us Here</h3>
        <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', minHeight: '320px' }}>
          <iframe
            title="HomeArc Chennai location"
            src="https://www.google.com/maps?q=Chennai,+Tamil+Nadu&z=12&output=embed"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '16px' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Office</p>
            <p style={{ color: 'var(--text-muted)' }}>123 Home Street, Chennai, Tamil Nadu - 600001</p>
          </div>
          <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '16px' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Nearby Places</p>
            <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.2rem' }}>
              <li>Marina Beach</li>
              <li>Express Avenue Mall</li>
              <li>Chennai Central Station</li>
            </ul>
          </div>
          <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '16px' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Landmarks</p>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Near Anna Salai and the city center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;