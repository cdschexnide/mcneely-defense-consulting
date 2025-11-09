import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Card } from '../common/Card';
import { Icon } from '../common/Icon';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card hover noPadding>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-military-olive/10 border border-military-olive/30 flex items-center justify-center flex-shrink-0">
            <Icon name={service.icon} size={24} className="text-military-olive-light" />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4">{service.description}</p>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-military-olive-light hover:text-accent-red transition-colors text-sm font-medium"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-tactical-gray/30"
          >
            <div className="p-6 bg-tactical-dark/30">
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.detailedDescription}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Key Capabilities
                  </h4>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-military-olive-light mt-1 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
