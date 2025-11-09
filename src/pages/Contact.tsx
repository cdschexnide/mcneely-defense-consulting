import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ClientIntakeForm } from '../components/contact/ClientIntakeForm';
import { companyInfo } from '../data/company';

export const Contact: React.FC = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400">
              Complete our comprehensive intake form to help us understand your requirements.
              We'll respond within 1 business day.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <Section background="elevated">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Client Intake Form</h2>
              <p className="text-gray-400 mb-6">
                Please complete this comprehensive intake form to help us understand your platform,
                mission requirements, and support needs.
              </p>
              <ClientIntakeForm />
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start space-x-3 text-gray-300 hover:text-military-olive-light transition-colors group"
                >
                  <Mail size={20} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">{companyInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="flex items-start space-x-3 text-gray-300 hover:text-military-olive-light transition-colors group"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">{companyInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">{companyInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Clock size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Service Area */}
            <Card>
              <h3 className="text-lg font-bold text-white mb-4">Service Area</h3>
              <div className="space-y-3">
                <Badge variant="success" className="w-full justify-center py-2">
                  CONUS Support Available
                </Badge>
                <Badge variant="info" className="w-full justify-center py-2">
                  OCONUS Support Available
                </Badge>
                <p className="text-sm text-gray-400 pt-2">
                  On-site and remote consulting available across the continental United States
                  and select international locations.
                </p>
              </div>
            </Card>

            {/* What to Expect */}
            <Card>
              <h3 className="text-lg font-bold text-white mb-4">What to Expect</h3>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="w-6 h-6 rounded-full bg-military-olive/20 text-military-olive-light flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    1
                  </span>
                  <span>Initial consultation to understand your requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-6 h-6 rounded-full bg-military-olive/20 text-military-olive-light flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    2
                  </span>
                  <span>Custom proposal with timeline and pricing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-6 h-6 rounded-full bg-military-olive/20 text-military-olive-light flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    3
                  </span>
                  <span>Rapid deployment and execution</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Placeholder / Additional CTA */}
      <Section background="pattern">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Southeast Texas Based
          </h2>
          <p className="text-gray-400 mb-6">
            Strategically located in Southeast Texas with rapid deployment capabilities
            throughout North America and allied partner nations.
          </p>
          <div className="bg-tactical-dark/50 border border-tactical-gray/30 rounded-lg p-12 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-military-green-light mx-auto mb-4" />
              <p className="text-gray-400">Map visualization coming soon</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
