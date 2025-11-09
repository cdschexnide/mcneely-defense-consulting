import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../common/Button';

interface ClientIntakeFormData {
  // Section 1: Contact Information
  fullName: string;
  email: string;
  company: string;
  phone: string;

  // Section 2: Project Overview
  platformType: string;
  primaryObjective: string;
  missionEnvironment: string;
  projectUrgency: string;

  // Section 3: Technical Details
  flightController: string;
  gnssReceiver: string;
  antennas: string;
  otherPayloads: string;

  // Section 4: Support Requested
  servicesNeeded: string[];
  otherService: string;
  engagementType: string;
  startDate: string;

  // Section 5: Additional Info
  referralSource: string;
  securityRestrictions: string;
}

export const ClientIntakeForm: React.FC = () => {
  const [formData, setFormData] = useState<ClientIntakeFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    platformType: '',
    primaryObjective: '',
    missionEnvironment: '',
    projectUrgency: '',
    flightController: '',
    gnssReceiver: '',
    antennas: '',
    otherPayloads: '',
    servicesNeeded: [],
    otherService: '',
    engagementType: '',
    startDate: '',
    referralSource: '',
    securityRestrictions: ''
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'System Integration & Configuration',
    'GNSS / Anti-Jamming Consulting',
    'Flight Test & Validation',
    'Operator Training',
    'Technical Advisory',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: { fullName?: string; email?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Client Intake Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 4 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        platformType: '',
        primaryObjective: '',
        missionEnvironment: '',
        projectUrgency: '',
        flightController: '',
        gnssReceiver: '',
        antennas: '',
        otherPayloads: '',
        servicesNeeded: [],
        otherService: '',
        engagementType: '',
        startDate: '',
        referralSource: '',
        securityRestrictions: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter(s => s !== service)
        : [...prev.servicesNeeded, service]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-military-green/20 border border-military-green rounded-lg p-8 text-center">
        <CheckCircle size={48} className="text-military-green-light mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          We've received your intake form and will review it carefully.
          You can expect a response within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Section 1: Contact Information */}
      <div>
        <div className="border-l-4 border-accent-red pl-4 mb-6">
          <h3 className="text-2xl font-bold text-white">Section 1 – Contact Information</h3>
          <p className="text-sm text-gray-400 mt-1">Required fields marked with *</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
              Full Name <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-tactical-dark border ${
                errors.fullName ? 'border-red-500' : 'border-tactical-gray/30'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors`}
              placeholder="Your full name"
            />
            {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
              Email Address <span className="text-accent-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-tactical-dark border ${
                errors.email ? 'border-red-500' : 'border-tactical-gray/30'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors`}
              placeholder="your.email@company.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Project Overview */}
      <div>
        <div className="border-l-4 border-military-olive pl-4 mb-6">
          <h3 className="text-2xl font-bold text-white">Section 2 – Project Overview</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-3">Platform Type</label>
            <div className="space-y-2">
              {['UAV (Multirotor / Fixed-Wing)', 'Ground Vehicle', 'Maritime / Surface', 'Other'].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="platformType"
                    value={option}
                    checked={formData.platformType === option}
                    onChange={handleChange}
                    className="w-4 h-4 text-accent-red bg-tactical-dark border-tactical-gray/30 focus:ring-military-olive focus:ring-2"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="primaryObjective" className="block text-sm font-semibold text-white mb-2">
              Primary Objective
            </label>
            <p className="text-xs text-gray-400 mb-2">Briefly describe what you'd like to accomplish (integration, test, training, etc.)</p>
            <textarea
              id="primaryObjective"
              name="primaryObjective"
              value={formData.primaryObjective}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors resize-none"
              placeholder="Describe your project objectives..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">Mission Environment</label>
            <div className="space-y-2">
              {['Open-field operations', 'Urban / built-up area', 'GPS-challenged or denied area', 'Classified / restricted use'].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="missionEnvironment"
                    value={option}
                    checked={formData.missionEnvironment === option}
                    onChange={handleChange}
                    className="w-4 h-4 text-accent-red bg-tactical-dark border-tactical-gray/30 focus:ring-military-olive focus:ring-2"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">Project Urgency</label>
            <div className="space-y-2">
              {[
                { value: 'Immediate (within 2 weeks)', label: 'Immediate (within 2 weeks)' },
                { value: 'Short-term (within 1–2 months)', label: 'Short-term (within 1–2 months)' },
                { value: 'Long-term (planning / budgetary)', label: 'Long-term (planning / budgetary)' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="projectUrgency"
                    value={option.value}
                    checked={formData.projectUrgency === option.value}
                    onChange={handleChange}
                    className="w-4 h-4 text-accent-red bg-tactical-dark border-tactical-gray/30 focus:ring-military-olive focus:ring-2"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Technical Details */}
      <div>
        <div className="border-l-4 border-military-green pl-4 mb-6">
          <h3 className="text-2xl font-bold text-white">Section 3 – Technical Details</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="flightController" className="block text-sm font-semibold text-white mb-2">
              Flight Controller / Autopilot Used
            </label>
            <input
              type="text"
              id="flightController"
              name="flightController"
              value={formData.flightController}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="e.g., Pixhawk 4, Cube Orange, etc."
            />
          </div>

          <div>
            <label htmlFor="gnssReceiver" className="block text-sm font-semibold text-white mb-2">
              GNSS Receiver Model(s)
            </label>
            <input
              type="text"
              id="gnssReceiver"
              name="gnssReceiver"
              value={formData.gnssReceiver}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="e.g., u-blox M8, Septentrio, etc."
            />
          </div>

          <div>
            <label htmlFor="antennas" className="block text-sm font-semibold text-white mb-2">
              Antennas Used
            </label>
            <p className="text-xs text-gray-400 mb-2">If known</p>
            <input
              type="text"
              id="antennas"
              name="antennas"
              value={formData.antennas}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="Antenna model or type"
            />
          </div>

          <div>
            <label htmlFor="otherPayloads" className="block text-sm font-semibold text-white mb-2">
              Other Payloads or Systems Integrated
            </label>
            <textarea
              id="otherPayloads"
              name="otherPayloads"
              value={formData.otherPayloads}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors resize-none"
              placeholder="List any cameras, sensors, or other systems..."
            />
          </div>
        </div>
      </div>

      {/* Section 4: Support Requested */}
      <div>
        <div className="border-l-4 border-accent-red pl-4 mb-6">
          <h3 className="text-2xl font-bold text-white">Section 4 – Support Requested</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Which services do you need? (Select all that apply)
            </label>
            <div className="space-y-2">
              {services.map((service) => (
                <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.servicesNeeded.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="w-4 h-4 text-accent-red bg-tactical-dark border-tactical-gray/30 rounded focus:ring-military-olive focus:ring-2"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
                </label>
              ))}
            </div>

            {formData.servicesNeeded.includes('Other') && (
              <div className="mt-3">
                <input
                  type="text"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
                  placeholder="Please specify other service..."
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">Preferred Engagement Type</label>
            <div className="space-y-2">
              {['On-site Support', 'Remote / Virtual', 'Both'].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="engagementType"
                    value={option}
                    checked={formData.engagementType === option}
                    onChange={handleChange}
                    className="w-4 h-4 text-accent-red bg-tactical-dark border-tactical-gray/30 focus:ring-military-olive focus:ring-2"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-semibold text-white mb-2">
              When would you like to begin?
            </label>
            <input
              type="text"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="e.g., Q2 2025, March 2025, ASAP"
            />
          </div>
        </div>
      </div>

      {/* Section 5: Additional Information */}
      <div>
        <div className="border-l-4 border-military-olive-light pl-4 mb-6">
          <h3 className="text-2xl font-bold text-white">Section 5 – Additional Information</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="referralSource" className="block text-sm font-semibold text-white mb-2">
              How did you hear about McNeely Defense Consulting?
            </label>
            <input
              type="text"
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
              placeholder="Referral, search, conference, etc."
            />
          </div>

          <div>
            <label htmlFor="securityRestrictions" className="block text-sm font-semibold text-white mb-2">
              Any special security / export restrictions?
            </label>
            <textarea
              id="securityRestrictions"
              name="securityRestrictions"
              value={formData.securityRestrictions}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors resize-none"
              placeholder="ITAR, classified, export control, etc."
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          className="w-full group"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
          <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-sm text-gray-400 text-center mt-4">
          We'll review your intake form and respond within 1 business day.
        </p>
      </div>
    </form>
  );
};
