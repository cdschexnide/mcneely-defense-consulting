import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  id?: string;
  background?: 'default' | 'elevated' | 'pattern';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerSize = 'lg',
  id,
  background = 'default'
}) => {
  const backgroundClasses = {
    default: 'bg-surface-dark',
    elevated: 'bg-surface-dark-elevated',
    pattern: 'bg-surface-dark grid-pattern'
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};
