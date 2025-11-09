import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-military-green/10 via-transparent to-military-olive/10"></div>

      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-military-olive/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-military-green/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-military-green/10 border border-military-green/30 mb-8"
          >
            <Shield size={16} className="text-military-olive-light" />
            <span className="text-sm font-medium text-military-olive-light">Defense Technology Consulting</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Precision UAV Integration
            <br />
            <span className="gradient-text">Protected Navigation</span>
            <br />
            Proven in the Field
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl"
          >
            {companyInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl"
          >
            Expert consulting for defense technology programs requiring UAV system integration,
            GNSS resilience engineering, and field validation support.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button to="/contact" size="lg" className="group">
              Request Consultation
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/services" size="lg" variant="outline">
              View Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 mb-12 md:mb-0 flex flex-wrap gap-6 text-sm"
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-accent-red"></div>
              <span>CONUS/OCONUS Support</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-accent-red"></div>
              <span>Tier-1 Prime Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-accent-red"></div>
              <span>Rapid Deployment</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
