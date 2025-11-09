import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <Section background="pattern">
      <div className="max-w-2xl mx-auto text-center py-20">
        <AlertCircle size={64} className="text-accent-red mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" size="lg">
            Go Home
          </Button>
          <Button to="/contact" size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
};
