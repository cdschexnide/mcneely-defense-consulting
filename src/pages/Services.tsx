import React from 'react';
import { motion } from 'framer-motion';
import { Plane, FileText, CreditCard } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ServiceCard } from '../components/services/ServiceCard';
import { services, pricingDetails } from '../data/services';

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

      {/* Travel & Expenses */}
      <Section background="pattern">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-military-olive/10 border border-military-olive/30 mb-4">
              <Plane size={32} className="text-military-olive-light" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Travel & Expenses
            </h2>
          </motion.div>

          <Card>
            <div className="space-y-4">
              {pricingDetails.travel.map((item, index) => (
                <div key={index} className="flex justify-between items-start pb-4 border-b border-tactical-gray/30 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    {item.note && <p className="text-sm text-gray-400 mt-1">{item.note}</p>}
                  </div>
                  <p className="text-military-olive-light font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Retainer & Contracting Options */}
      <Section background="elevated">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-military-green/10 border border-military-green/30 mb-4">
              <FileText size={32} className="text-military-green-light" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retainer & Contracting Options
            </h2>
            <p className="text-gray-400">
              Flexible engagement models to fit your program needs
            </p>
          </motion.div>

          <Card>
            <div className="space-y-4">
              {pricingDetails.retainer.map((item, index) => (
                <div key={index} className="flex justify-between items-start pb-4 border-b border-tactical-gray/30 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    {item.note && <p className="text-sm text-gray-400 mt-1">{item.note}</p>}
                  </div>
                  <p className="text-military-olive-light font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Payment Terms */}
      <Section background="pattern">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-military-green/10 border border-military-green/30 mb-4">
              <CreditCard size={32} className="text-military-green-light" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Payment Terms
            </h2>
          </motion.div>

          <Card>
            <div className="space-y-4">
              {pricingDetails.payment.map((item, index) => (
                <div key={index} className="flex justify-between items-start pb-4 border-b border-tactical-gray/30 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    {item.note && <p className="text-sm text-gray-400 mt-1">{item.note}</p>}
                  </div>
                  <p className="text-military-olive-light font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="elevated">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Contact us to discuss your project requirements and receive a custom quote.
          </p>
          <Button to="/contact" size="lg">
            Request Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};
