import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Microservices', icon: Code, category: 'Architecture' },
  { name: 'Cloudflare', icon: Globe, category: 'Edge Computing' },
  { name: 'Docker', icon: Database, category: 'DevOps' },
  { name: 'React', icon: Code, category: 'Frontend' },
  { name: 'Node.js', icon: Database, category: 'Backend' },
  { name: 'NestJS', icon: Database, category: 'Backend Framework' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'Next.js', icon: Smartphone, category: 'Framework' },
  { name: 'n8n', icon: Code, category: 'Agentic AI' },
  { name: 'LangChain', icon: Database, category: 'Agentic AI' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            I am a Software Engineer and Distributed Systems Architect with expertise in building enterprise-grade, scalable applications. I engineer resilient digital platforms using Cloudflare, Microservices, and the MERN stack while integrating intelligent workflows through Agentic AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-2 lg:order-1"
          >
            <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">My Journey</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                As a <strong className="text-primary">Systems Engineer</strong> and{' '}
                <strong className="text-primary">Cloud Architect</strong>, I bridge the gap between traditional full-stack development and high-performance, globally distributed architectures. My focus is on fault tolerance, automated CI/CD pipelines, and writing highly performant backend services.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                By leveraging Cloudflare workers, modular Microservices, and Node.js frameworks like NestJS, I build systems capable of serving large user bases reliably. Beyond core web architectures, I pioneer Agentic AI solutions to automate complex business workflows, ensuring MNC-ready product delivery and maintenance.
              </p>
            </div>
          </motion.div>

          {/* Right side - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-center lg:text-left">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-3 sm:p-4 rounded-xl hover:bg-accent/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};