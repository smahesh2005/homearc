import React from 'react';

const About = () => {
  return (
    <div className="container fade-in" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title">About <span style={{color: 'var(--primary)'}}>Home</span><span style={{color: 'var(--secondary)'}}>Arc</span></h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)' }}>
          Changing the way the world receives home services, one expert at a time.
        </p>
      </header>

      <section style={{ marginBottom: '5rem' }}>
        <h2 className="section-title">Our Mission</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Empowering Homeowners</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We provide a seamless, transparent, and highly reliable platform for home services, putting control back into your hands.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Connecting Communities</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We are dedicated to connecting every household with vetted neighborhood professionals to foster strong, supportive communities.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Eliminating Stress</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Our mission is to ensure every project is handled with precision and care, removing the anxiety from property maintenance.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <h2 className="section-title">Our Vision</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Global Standard</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Our vision is to become the ultimate global standard for home care, bringing uncompromising quality to every city.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Technological Innovation</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We foresee a revolution in the service industry through technological innovation, AI matching, and predictive maintenance.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Universal Accessibility</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We envision a world where maintaining a home is incredibly effortless, highly efficient, and universally accessible to all.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <h2 className="section-title">Our Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Trust & Transparency</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We build enduring relationships by offering clear pricing, honest communication, and fully vetted professionals you can comfortably welcome into your home.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Excellence & Quality</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We maintain the highest standards of workmanship. From routine repairs to major renovations, we are committed to delivering outstanding results.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Innovation</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              We continuously improve our platform with smart technology, intuitive design, and precise matching to provide a swift and effortless user experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
