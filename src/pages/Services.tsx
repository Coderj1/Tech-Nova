import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ServicesList from '../components/ServicesList';
import TechnologyStack from '../components/TechnologyStack';
import ProcessSection from '../components/ProcessSection';
import CallToAction from '../components/CallToAction';

const Services = () => {
  return (
    <div className="pt-16">
      <ServiceHero />
      <ServicesList />
      <TechnologyStack />
      <ProcessSection />
      <CallToAction />
    </div>
  );
};

export default Services;