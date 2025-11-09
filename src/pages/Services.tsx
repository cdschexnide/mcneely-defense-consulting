import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { ServiceCard } from '../components/services/ServiceCard';
import { services } from '../data/services';

export const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-dark pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400">
              Comprehensive UAV integration, GNSS protection, and field operations consulting
              for defense technology programs.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section background="elevated">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="elevated">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Contact us to discuss your project requirements. Pricing and terms will be provided during consultation based on your specific needs.
          </p>
          <Button to="/contact" size="lg">
            Request Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};
