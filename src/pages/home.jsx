import React from 'react';
import services from '../data/services';
import experts from '../data/experts';
import ServiceCard from '../components/servicecard';
import { Link } from 'react-router-dom';
import './home.css';

function ServicesStackPanel({ row, index, total }) {
  const panelRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const stickyTop = 130 + index * 35;

      if (rect.top <= stickyTop) {
        const depth = Math.max(0, (stickyTop - rect.top) / 400);
        setProgress(Math.min(depth, 1));
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  const isLast = index === total - 1;
  const stickyTop = 130 + index * 35;
  const dynamicScale = 1 - progress * 0.05;
  const dynamicBrightness = 1 - progress * 0.35;

  return (
    <div
      ref={panelRef}
      className="services-stack-panel"
      style={{
        '--panel-top': `${stickyTop}px`,
        '--panel-mb': isLast ? '5rem' : '45vh',
        '--panel-scale': dynamicScale,
        '--panel-brightness': dynamicBrightness,
      }}
      data-progress={progress}
    >
      <div className="services-stack-row">
        {row.map((service) => (
          <ServiceCard key={service.id} service={service} vertical />
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [reviewOffset, setReviewOffset] = React.useState(0);
  const [reviews, setReviews] = React.useState([
    { name: "Anish Kumar", text: "Amazing service! The plumber arrived in 30 minutes.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Priya Sharma", text: "Very professional cleaning. Highly recommend HomeArc.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Rahul Singh", text: "Great experience with the electrician. Fair pricing.", stars: "⭐⭐⭐⭐" },
    { name: "Sneha Patel", text: "The painting work was flawless. Thank you!", stars: "⭐⭐⭐⭐⭐" },
    { name: "Amit Verma", text: "Fast and reliable AC repair service.", stars: "⭐⭐⭐⭐" },
    { name: "Neha Gupta", text: "Best platform for home maintenance.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Vikram Das", text: "Efficient and friendly experts.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Sonia Rao", text: "Transparency in pricing is what I liked most.", stars: "⭐⭐⭐⭐" },
  ]);
  const reviewsTouch = React.useRef({ x: 0, y: 0 });

  const stackRows = React.useMemo(() => {
    const rows = [];
    for (let i = 0; i < services.length; i += 3) rows.push(services.slice(i, i + 3));
    return rows;
  }, []);

  const REVIEWS_VISIBLE = 4;
  const REVIEWS_STEP = 2;
  const maxReviewOffset = Math.max(0, reviews.length - REVIEWS_VISIBLE);

  const reviewsPrev = () => setReviewOffset((o) => Math.max(0, o - REVIEWS_STEP));
  const reviewsNext = () => setReviewOffset((o) => Math.min(maxReviewOffset, o + REVIEWS_STEP));

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name')?.toString().trim();
    const rating = Number(formData.get('rating'));
    const message = formData.get('message')?.toString().trim();
    if (!name || !rating || !message) return;
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    setReviews((prev) => [{ name, text: message, stars }, ...prev]);
    setReviewOffset(0);
    setShowReviewForm(false);
    e.target.reset();
  }

  const onReviewsTouchStart = (e) => {
    const t = e.touches[0];
    reviewsTouch.current = { x: t.clientX, y: t.clientY };
  };

  const onReviewsTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - reviewsTouch.current.x;
    const dy = t.clientY - reviewsTouch.current.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) reviewsPrev();
    else reviewsNext();
  };

  return (
    <div className="home-page" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content fade-in">
            <h1 style={{ fontSize: '5rem', fontWeight: '900', lineHeight: '1.1', color: 'var(--secondary)', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
              Your Trusted <br />
              <span style={{ color: 'var(--primary)' }}>Home Services</span> <br />
              Partner
            </h1>
            <p style={{ color: 'var(--secondary)', fontSize: '1.25rem', maxWidth: '550px', marginBottom: '3.5rem', lineHeight: '1.6' }}>
              Welcome to HomeArc. Certified professionals at your door in under 2
              hours. Fast, reliable, and backed by a 100% satisfaction guarantee.
            </p>
            <div className="hero-cta" style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
              <Link to="/services" className="btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '40px', fontSize: '1.1rem', fontWeight: 'bold' }}>Our Services</Link>
              <a
                href="https://wa.me/919087654321?text=Hi! I would like to book a service from HomeArc. Please help me get started."
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '1rem 2.5rem', borderRadius: '40px', fontSize: '1.1rem', fontWeight: 'bold', background: '#25D366', color: 'white', border: 'none', textDecoration: 'none', cursor: 'pointer', display: 'inline-block' }}
              >
                📱 Book Now
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>50K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>2K+</h3>
                <p>Certified Experts</p>
              </div>
              <div className="stat-item">
                <h3>4.9/5</h3>
                <p>⭐ Average Rating</p>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-in">
            <div className="orbital-container">
              <div className="orbital-center" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'transparent', boxShadow: 'none' }}>
                <svg width="70" height="70" viewBox="0 0 24 24" fill="#1c1a3b" stroke="none" className="orbital-center-icon">
                  <path d="M12 2L2 10.6h3V22h5v-6h4v6h5V10.6h3L12 2z" />
                </svg>
              </div>
              <div className="orbit-rings" aria-hidden="true">
                <span className="orbit-ring ring-1"></span>
                <span className="orbit-ring ring-2"></span>
              </div>
              <div className="orbit">
                {[
                  { id: 3, name: 'AC', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffd13b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L12 22M6 6L18 18M18 6L6 18M2 12L22 12" /></svg>, color: '#ffd13b' },
                  { id: 1, name: 'Plumbing', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#2b70e4"><path d="M14 10l-4-4-6 6c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0l6-6-4-4zm8-6c-1.5-1.5-4-1.5-5.5 0L14 6l4 4 2.5-2.5c1.5-1.5 1.5-4 0-5.5z" stroke="none" /></svg>, color: '#2b70e4' },
                  { id: 5, name: 'Painting', icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#d141e0"><path d="M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 13h4v8H5v-8z" stroke="none" /></svg>, color: '#d141e0' },
                  { id: 2, name: 'Electrical', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#00d27f"><path d="M11 21L11 13 7 13 13 3 13 11 17 11 11 21z" stroke="none" /></svg>, color: '#00d27f' },
                  { id: 4, name: 'Carpentry', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffd13b"><path d="M21 9c0-1.1-.9-2-2-2h-3L14 5c-1.1-1.1-3-1.1-4.1 0l-1.4 1.4c-1.1 1.1-1.1 3 0 4.1L10 12v3c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V9zM2 20v2h2l9-9-2-2-9 9z" stroke="none" /></svg>, color: '#ffd13b' },
                  { id: 6, name: 'Cleaning', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#2b70e4"><path d="M19.5 5.5v-2h-3v2h-1v-4h-3v4h-1v-5h-3v5h-1v-6h-3v6h-1v8l4 6v8h4v-8l4-6v-8h-1z" stroke="none" /></svg>, color: '#2b70e4' },
                  { id: 7, name: 'Renovation', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#d141e0"><path d="M12 2L2 12h3v8h14v-8h3L12 2zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM9 16h6v4H9v-4z" stroke="none" /></svg>, color: '#d141e0' },
                  { id: 8, name: 'Pest', icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#00d27f"><path d="M12 2c-2.21 0-4 1.79-4 4 0 1.5.85 2.79 2.11 3.47l-1.53 3.53C7.24 13.06 6 14.39 6 16v4h2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4h2v-4c0-1.61-1.24-2.94-2.58-3.04l-1.53-3.53C15.15 8.79 16 7.5 16 6c0-2.21-1.79-4-4-4zm-1 2h2v4h-2V4zm-5 6L4 8v2l2 2v-2zm12 0l2-2v-2l-2 2v2zm-6 4h2v2h-2v-2z" stroke="none" /></svg>, color: '#00d27f' }
                ].map((service, index) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={`orbital-item item-${index + 1} clockwise`}
                    aria-label={service.name}
                  >
                    <div className="orbital-item-inner">
                      <div className="orbital-item-content">
                        {service.icon}
                        <span style={{ color: service.color }}>{service.name}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="about-us-home section-padding">
        <div className="container">
          <div className="about-us-center">
            <h2 className="section-title">Why Choose <span style={{ color: 'var(--primary)' }}>Home</span><span style={{ color: 'var(--secondary)' }}>Arc</span></h2>
            <p className="about-description">
              We at <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Home</span><span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Arc</span> give best services to our customers and help them with their House renovations, painting, gardening, cleaning etc.
              We have team of certified professionals who are both experienced and skilled to help us to get best reviews from our customers.
            </p>

            <ul className="about-features" aria-label="HomeArc benefits">
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">24/7 Priority Support for all members</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">High quality service with affordable cost.</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">High experienced professional</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">Instant Booking with Real-time Tracking</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">Transparent Pricing with No Hidden Costs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-stack section-padding">
        <div className="container">
          <h2 className="section-title">Explore Our Services</h2>

          <div className="services-stack-scroll">
            {stackRows.map((row, index) => (
              <ServicesStackPanel
                key={`services-row-${index}`}
                row={row}
                index={index}
                total={stackRows.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experts Marquee Section */}
      <section className="experts-section">
        <div className="container">
          <h2 className="section-title">Our Certified Experts</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...experts, ...experts].map((expert, index) => (
              <Link key={`${expert.id}-${index}`} to={`/experts/${expert.id}`} className="expert-card-mini">
                <div className="expert-avatar">
                  <img className="expert-avatar-img" src={expert.image} alt={expert.name} />
                </div>
                <h4 className="expert-name">{expert.name}</h4>
                <p className="expert-role">{expert.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-carousel-head">
            <div className="reviews-carousel-head-group">
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="review-stat-circle">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
            {!showReviewForm && (
              <button className="btn-secondary add-review-btn" onClick={() => setShowReviewForm(true)}>
                Add a Review
              </button>
            )}
          </div>

          <div className="reviews-carousel">
            <button
              type="button"
              className="reviews-carousel-arrow reviews-carousel-arrow--prev"
              onClick={reviewsPrev}
              disabled={reviewOffset <= 0}
              aria-label="Show previous reviews"
            >
              ‹
            </button>

            <div
              className="reviews-carousel-viewport"
              onTouchStart={onReviewsTouchStart}
              onTouchEnd={onReviewsTouchEnd}
            >
              <div
                className="reviews-carousel-track"
                style={{
                  width: `${(reviews.length / REVIEWS_VISIBLE) * 100}%`,
                  transform: `translateX(-${reviewOffset * (100 / REVIEWS_VISIBLE)}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="reviews-carousel-slide">
                    <div className="review-card-fixed">
                      <div className="review-stars">{review.stars}</div>
                      <p className="review-text">"{review.text}"</p>
                      <p className="review-author">- {review.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="reviews-carousel-arrow reviews-carousel-arrow--next"
              onClick={reviewsNext}
              disabled={reviewOffset >= maxReviewOffset}
              aria-label="Show next reviews"
            >
              ›
            </button>
          </div>

          {/* Add Review Form */}
          {showReviewForm && (
            <div className="review-modal-backdrop" onClick={() => setShowReviewForm(false)}>
              <div className="add-review-section modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setShowReviewForm(false)}
                  aria-label="Close review form"
                >
                  ×
                </button>
                <h3 className="add-review-title">Share Your Experience</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="form-row">
                    <input name="name" type="text" placeholder="Your Name" required className="form-input" />
                    <select name="rating" className="form-input" required>
                      <option value="">Rating</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                    </select>
                  </div>
                  <textarea name="message" placeholder="Your Review" required className="form-input add-review-textarea"></textarea>
                  <button type="submit" className="btn-primary add-review-submit">Submit Review</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;