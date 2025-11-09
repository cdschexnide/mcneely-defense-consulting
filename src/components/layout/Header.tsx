import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { DarkModeToggle } from '../common/DarkModeToggle';
import { navLinks } from '../../data/company';
import logo from '../../assets/logo.jpg';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-dark/95 backdrop-blur-md shadow-lg border-b border-tactical-gray/30'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="McNeely Defense Consulting"
              className="h-12 w-12 rounded-lg object-cover ring-2 ring-tactical-gray/30 group-hover:ring-military-green/50 transition-all"
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-white">McNeely Defense Consulting</div>
              <div className="text-xs text-gray-400">UAV • GNSS • Field Ops</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-military-olive-light ${
                  location.pathname === link.path
                    ? 'text-military-olive-light'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Dark Mode */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Button to="/contact" size="sm">
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-tactical-gray/30 hover:bg-tactical-gray/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-tactical-gray/30 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-military-olive-light ${
                    location.pathname === link.path
                      ? 'text-military-olive-light'
                      : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button to="/contact" className="w-full mt-4">
                Request Consultation
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
