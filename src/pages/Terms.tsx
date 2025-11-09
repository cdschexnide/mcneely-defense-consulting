import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';

export const Terms: React.FC = () => {
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
            <FileText size={48} className="text-military-green-light mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
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
                This terms of service page is currently under construction. All consulting engagements
                are governed by individual statement of work agreements and master services agreements.
              </p>
              <p className="text-gray-400">
                For questions about our terms and conditions, please contact us at{' '}
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
