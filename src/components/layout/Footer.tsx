import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Container } from '../common/Container';
import { companyInfo, footerLinks } from '../../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tactical-black border-t border-tactical-gray/30">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">{companyInfo.name}</h3>
              <p className="text-sm text-gray-400">{companyInfo.tagline}</p>
              <div className="space-y-2">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-military-olive-light transition-colors"
                >
                  <Mail size={16} />
                  <span>{companyInfo.email}</span>
                </a>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-military-olive-light transition-colors"
                >
                  <Phone size={16} />
                  <span>{companyInfo.phone}</span>
                </a>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin size={16} />
                  <span>{companyInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-military-olive-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-military-olive-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Get in Touch
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Ready to discuss your project? Contact us for a consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-accent-red hover:bg-accent-red-dark text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-tactical-gray/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-military-olive-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
