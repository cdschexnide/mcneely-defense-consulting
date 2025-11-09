import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';

export const Privacy: React.FC = () => {
  return (
    <>
      <section className="relative bg-surface-dark pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Shield size={48} className="text-military-green-light mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </Container>
      </section>

      <Section background="elevated">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                This privacy policy page is currently under construction. McNeely Defense Consulting LLC
                is committed to protecting your privacy and handling your personal information with care.
              </p>
              <p className="text-gray-400">
                For questions about how we handle your data, please contact us at{' '}
                <a href="mailto:dakota@mcneelydefense.com" className="text-military-olive-light hover:underline">
                  dakota@mcneelydefense.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};
