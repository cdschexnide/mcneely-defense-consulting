import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Shield, Mail } from "lucide-react";
import dakotaPhoto from "../assets/dakota.jpeg";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Card } from "../components/common/Card";
import { Button } from "../components/common/Button";
import { Badge } from "../components/common/Badge";
import { companyInfo, teamMember, pastPerformance } from "../data/company";
import { differentiators } from "../data/competencies";

export const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-dark pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About {companyInfo.name}
            </h1>
            <p className="text-xl text-gray-400">{companyInfo.tagline}</p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <Section background="elevated">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="text-center">
              <Shield
                size={48}
                className="text-military-green-light mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To deliver precision UAV integration, protected navigation
                systems, and field-proven solutions that empower defense
                technology programs to succeed in the most challenging
                operational environments. We combine hands-on technical
                expertise with deep understanding of defense program
                requirements to provide rapid, effective support for
                mission-critical systems.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Dakota McNeely Bio */}
      <Section background="pattern">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership
            </h2>
          </motion.div>

          <Card>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={dakotaPhoto}
                  alt="Dakota LARUE McNeely"
                  className="w-48 h-48 rounded-lg object-cover border-2 border-military-olive/50 shadow-lg"
                />
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {teamMember.name}
                  </h3>
                  <p className="text-military-olive-light font-semibold mb-4">
                    {teamMember.title}
                  </p>
                  <Badge variant="info" className="mr-2">
                    <Mail size={12} className="mr-1" />
                    {teamMember.email}
                  </Badge>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {teamMember.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Differentiators */}
      <Section background="elevated">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-military-olive/10 border border-military-olive/30 flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-military-olive-light" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Past Performance */}
      <Section background="pattern">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Globe
              size={48}
              className="text-military-green-light mx-auto mb-4"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Performance
            </h2>
          </motion.div>

          <Card>
            <ul className="space-y-4">
              {pastPerformance.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent-red mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Company Information */}
      <Section background="elevated">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Company Information
            </h2>
          </motion.div>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Legal Structure</p>
                <p className="text-white font-semibold">
                  {companyInfo.legalStructure}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Registered In</p>
                <p className="text-white font-semibold">
                  {companyInfo.registeredIn}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="text-white font-semibold">
                  {companyInfo.location}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Service Area</p>
                <p className="text-white font-semibold">
                  CONUS / OCONUS Support Available
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-400 mb-2">NAICS Codes</p>
                <div className="space-y-1">
                  {companyInfo.naicsCodes.map((code, index) => (
                    <Badge key={index} variant="info" className="mr-2 mb-2">
                      {code}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="pattern">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to discuss your UAV integration or GNSS protection needs?
          </p>
          <Button to="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
};
