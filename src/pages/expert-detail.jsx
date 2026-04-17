import React from 'react';
import { useParams } from 'react-router-dom';
import experts from '../data/experts';

const ExpertDetail = () => {
  const { id } = useParams();
  const expertId = Number(id);
  const expert = experts.find((e) => e.id === expertId) ?? experts[0];

  return (
    <div className="container fade-in" style={{ padding: '120px 0' }}>
      <div
        className="glass-card"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem',
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            background: 'var(--bg-color)',
            borderRadius: '30px',
            padding: '0.5rem',
            overflow: 'hidden',
            aspectRatio: '1',
          }}
        >
          <img
            src={expert.image}
            alt={expert.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '24px',
              display: 'block',
            }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>{expert.name}</h1>
          <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem', fontSize: '1.2rem' }}>{expert.role}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>RATING</p>
              <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>⭐ {expert.rating} / 5</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>REVIEWS</p>
              <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>{expert.reviews} verified</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>HOURLY RATE</p>
              <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>₹{expert.wage} / hr</p>
            </div>
          </div>

          <h4 style={{ marginBottom: '0.5rem' }}>ABOUT</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{expert.bio}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
            {expert.specialties.map((spec, i) => (
              <span
                key={i}
                style={{
                  padding: '0.3rem 0.8rem',
                  background: 'var(--bg-color)',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--secondary)',
                }}
              >
                {spec}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/919087654321?text=Hi! I am interested in booking ${expert.name} (${expert.role}). Please provide more details. Rate: ₹${expert.wage}/hour. Rating: ${expert.rating}/5 (${expert.reviews} reviews)`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                background: '#25D366',
                color: 'white',
                borderRadius: '10px',
                fontWeight: 'bold',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(37,211,102,0.3)'
              }}
            >
              📱 Request Expert on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/experts" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
          ← Back to Experts
        </Link>
      </div>
    </div>
  );
};

export default ExpertDetail;
