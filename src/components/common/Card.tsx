import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  noPadding = false
}) => {
  const baseClasses = `
    bg-surface-dark-elevated dark:bg-surface-dark-elevated
    border border-tactical-gray/30
    rounded-lg
    transition-all duration-300
    ${noPadding ? '' : 'p-6'}
    ${hover ? 'hover:border-military-green/50 hover:shadow-lg hover:shadow-military-green/10 hover:-translate-y-1' : ''}
    ${className}
  `;

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
