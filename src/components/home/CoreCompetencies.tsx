import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Icon } from '../common/Icon';
import { coreCompetencies } from '../../data/competencies';

export const CoreCompetencies: React.FC = () => {
  return (
    <Section background="elevated">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Core Competencies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Specialized expertise in UAV integration, GNSS protection, and field operations
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {coreCompetencies.map((competency, index) => (
          <motion.div
            key={competency.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="h-full">
              <div className="flex flex-col items-start h-full">
                <div className="w-14 h-14 rounded-lg bg-military-olive/10 border border-military-olive/30 flex items-center justify-center mb-4">
                  <Icon name={competency.icon} size={28} className="text-military-olive-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {competency.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {competency.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
