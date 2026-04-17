import React from 'react';
import services from '../data/services';
import ServiceCard from '../components/servicecard';
import './services.css';

const Services = () => {
  return (
    <div className="services-page container fade-in" style={{ padding: '4rem 2rem' }}>
      <h1 className="section-title">Explore Our Services</h1>
      <p className="services-subtitle">
        We provide a wide range of home services of the highest quality.
      </p>
      <div className="services-grid-3">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} vertical={true} />
        ))}
      </div>
    </div>
  );
};

export default Services;