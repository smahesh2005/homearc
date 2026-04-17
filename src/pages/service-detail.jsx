  import React from 'react';
  import { useParams, Link } from 'react-router-dom';
  import services from '../data/services';

  const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === parseInt(id)) || services[0];

    return (
      <div className="container fade-in" style={{ padding: '120px 0' }}>
        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
              <h1 style={{ fontSize: '3.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}>{service.name}</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '500px' }}>{service.description}</p>
            </div>
            <div style={{ width: '220px', height: '220px', borderRadius: '30px', overflow: 'hidden', flex: '0 0 auto', boxShadow: '0 20px 40px rgba(10, 29, 55, 0.08)' }}>
              <img
                src={service.image}
                alt={`${service.name} service`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          <section style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>What we will do</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <li style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '15px' }}>
                <strong>Full Site Inspection</strong>: Our experts will assess the situation and provide an upfront quote.
              </li>
              <li style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '15px' }}>
                <strong>Certified Professional Work</strong>: Only the highest quality tools and materials are used.
              </li>
              <li style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '15px' }}>
                <strong>Clean-up After Service</strong>: We leave your home spotless once the work is done.
              </li>
              <li style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '15px' }}>
                <strong>Service Warranty</strong>: We provide a 30-day guarantee on all our work.
              </li>
            </ul>
          </section>

          <div style={{ textAlign: 'center' }}>
            <a
              href={`https://wa.me/919087654321?text=Hi! I would like to book the *${service.name}* service. Please provide more details.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1.2rem 4rem',
                background: '#25D366',
                color: 'white',
                borderRadius: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(37,211,102,0.3)'
              }}
            >
              📱 Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default ServiceDetail;
