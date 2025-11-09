import React from 'react';
import { Hero } from '../components/home/Hero';
import { CoreCompetencies } from '../components/home/CoreCompetencies';
import { Differentiators } from '../components/home/Differentiators';
import { ContactCTA } from '../components/home/ContactCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CoreCompetencies />
      <Differentiators />
      <ContactCTA />
    </>
  );
};
