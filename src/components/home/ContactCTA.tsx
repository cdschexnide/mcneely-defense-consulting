import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Section } from "../common/Section";
import { Button } from "../common/Button";

export const ContactCTA: React.FC = () => {
  return (
    <Section background="elevated">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-military-green/20 to-military-olive/20 border border-military-green/30 p-8 md:p-12 lg:p-16"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get expert consultation on UAV integration, GNSS protection, and
            field operations support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button to="/contact" size="lg" className="group">
              Request Consultation
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button to="/services" size="lg" variant="outline">
              View All Services
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Clock size={16} />
            <span>24-hour response time • CONUS/OCONUS available</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
