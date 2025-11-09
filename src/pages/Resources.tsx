import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, FileCheck } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { resources } from '../data/company';

export const Resources: React.FC = () => {
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
              Resources & Downloads
            </h1>
            <p className="text-xl text-gray-400">
              Download our capability statements, rate charts, and technical documentation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Downloadable Resources */}
      <Section background="elevated">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-lg bg-military-olive/10 border border-military-olive/30 flex items-center justify-center mb-4">
                      {resource.id === 'rate-chart' ? (
                        <FileText size={32} className="text-military-olive-light" />
                      ) : (
                        <FileCheck size={32} className="text-military-olive-light" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{resource.description}</p>

                    {/* File Details */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4 pb-4 border-b border-tactical-gray/30">
                      <span className="font-medium">Format: {resource.fileType}</span>
                      <span>Size: {resource.fileSize}</span>
                    </div>

                    {/* Download Button */}
                    <a
                      href={resource.fileUrl}
                      download
                      className="inline-flex items-center justify-center px-4 py-3 bg-accent-red hover:bg-accent-red-dark text-white font-semibold rounded-lg transition-colors group"
                    >
                      <Download size={20} className="mr-2 group-hover:translate-y-1 transition-transform" />
                      Download {resource.fileType}
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Information */}
      <Section background="pattern">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need More Information?</h2>
              <p className="text-gray-400 mb-6">
                If you need additional technical documentation, past performance examples, or custom capability
                statements tailored to your specific requirements, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact">
                  Request Custom Documentation
                </Button>
                <Button to="/services" variant="outline">
                  View Our Services
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Resource Categories (Future expansion) */}
      <Section background="elevated">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-400 mb-8">
            We're working on additional resources to help you learn more about UAV integration,
            GNSS protection systems, and field operations best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Technical White Papers',
              'Case Studies',
              'Integration Guides'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-surface-dark-elevated border border-tactical-gray/30 rounded-lg p-6 opacity-50"
              >
                <p className="text-gray-400 font-medium">{item}</p>
                <p className="text-xs text-gray-500 mt-2">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};
