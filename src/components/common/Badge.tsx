import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variantClasses = {
    default: 'bg-tactical-gray/30 text-gray-300 border-tactical-gray',
    success: 'bg-military-green/30 text-military-green-light border-military-green',
    warning: 'bg-military-olive/30 text-military-olive-light border-military-olive',
    info: 'bg-accent-steel/20 text-accent-steel-light border-accent-steel'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
