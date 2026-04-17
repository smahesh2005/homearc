import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Home<span>Arc</span></h2>
            <p>
              Turning home maintenance into a seamless experience. 
              We serve homeowners with premium digital tools and 
              vetted experts to ensure excellence in every task.
            </p>
          </div>

          <div className="footer-group">
            <h4>Services</h4>
            <ul className="footer-list">
              <li><Link to="/services/1">Plumbing</Link></li>
              <li><Link to="/services/5">Carpenting</Link></li>
              <li><Link to="/services/8">Pest Control</Link></li>
              <li><Link to="/services/2">Electrician</Link></li>
              <li><Link to="/services/9">Gardening</Link></li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Legal</h4>
            <ul className="footer-list">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/cookie">Cookie Policy</Link></li>
              <li><Link to="/preferences">Cookie Preferences</Link></li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Contact Us</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <span className="contact-icon">📧</span>
                hello@homearc.com
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                +91 9087654321
              </li>
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                Chennai, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HomeArc. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn" aria-label="LinkedIn">
              <span className="social-icon">in</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook" aria-label="Facebook">
              <span className="social-icon">f</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram" aria-label="Instagram">
              <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube" aria-label="YouTube">
              <span className="social-icon">▶</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;