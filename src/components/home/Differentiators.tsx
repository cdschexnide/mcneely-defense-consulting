import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Icon } from '../common/Icon';
import { differentiators } from '../../data/competencies';

export const Differentiators: React.FC = () => {
  return (
    <Section background="pattern">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Battle-tested expertise with a proven track record in defense technology
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {differentiators.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-surface-dark-elevated border border-military-green/30 rounded-lg p-6 h-full hover:border-military-olive hover:shadow-lg hover:shadow-military-green/20 transition-all duration-300">
              {/* Badge Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent-red flex items-center justify-center shadow-lg shadow-accent-red/50">
                <Icon name={item.icon} size={24} className="text-white" />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
