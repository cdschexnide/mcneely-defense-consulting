import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "../common/Button";
import { ContactFormData } from "../../types";
import { services } from "../../data/services";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceInterest: "",
    projectDescription: "",
    budgetTimeline: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required";
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

    // Simulate form submission (replace with actual API call later)
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceInterest: "",
        projectDescription: "",
        budgetTimeline: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-military-green/20 border border-military-green rounded-lg p-8 text-center">
        <CheckCircle
          size={48}
          className="text-military-green-light mx-auto mb-4"
        />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">Your message has been received.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-white mb-2"
        >
          Name <span className="text-accent-blue">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-tactical-dark border ${
            errors.name ? "border-red-500" : "border-tactical-gray/30"
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-white mb-2"
        >
          Email <span className="text-accent-blue">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-tactical-dark border ${
            errors.email ? "border-red-500" : "border-tactical-gray/30"
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors`}
          placeholder="your.email@company.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-white mb-2"
        >
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

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-white mb-2"
        >
          Phone
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

      {/* Service Interest */}
      <div>
        <label
          htmlFor="serviceInterest"
          className="block text-sm font-semibold text-white mb-2"
        >
          Service Interest
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white focus:outline-none focus:border-military-olive transition-colors"
        >
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Project Description */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-sm font-semibold text-white mb-2"
        >
          Project Description <span className="text-accent-blue">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-tactical-dark border ${
            errors.projectDescription
              ? "border-red-500"
              : "border-tactical-gray/30"
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors resize-none`}
          placeholder="Describe your project requirements and objectives..."
        />
        {errors.projectDescription && (
          <p className="text-red-400 text-sm mt-1">
            {errors.projectDescription}
          </p>
        )}
      </div>

      {/* Budget / Timeline */}
      <div>
        <label
          htmlFor="budgetTimeline"
          className="block text-sm font-semibold text-white mb-2"
        >
          Budget / Timeline
        </label>
        <input
          type="text"
          id="budgetTimeline"
          name="budgetTimeline"
          value={formData.budgetTimeline}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-tactical-dark border border-tactical-gray/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-military-olive transition-colors"
          placeholder="e.g., Q2 2025, $50K-$100K"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full group"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send
          size={20}
          className="ml-2 group-hover:translate-x-1 transition-transform"
        />
      </Button>

      <p className="text-sm text-gray-400 text-center">
        We typically respond within 24 hours during business days.
      </p>
    </form>
  );
};
