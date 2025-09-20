import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code, category: 'Frontend' },
  { name: 'Node.js', icon: Database, category: 'Backend' },
  { name: 'Express', icon: Globe, category: 'Backend' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'TailwindCSS', icon: Code, category: 'Frontend' },
  { name: 'Firebase', icon: Database, category: 'Backend' },
  { name: 'Vite', icon: Code, category: 'Tools' },
  { name: 'Next.js', icon: Smartphone, category: 'Framework' },
  { name: 'n8n', icon: Code, category: 'Agentic AI' },
  { name: 'LangChain', icon: Database, category: 'Agentic AI' },
  { name: 'AI Agents', icon: Globe, category: 'Agentic AI' },
  { name: 'Python', icon: Code, category: 'Agentic AI' },
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
            I'm a passionate MERN Stack Developer and Agentic AI Developer with expertise in building modern, 
            scalable web applications and intelligent automation systems. I love creating seamless user experiences 
            with clean code, beautiful interfaces, and AI-powered solutions.
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
                As a <strong className="text-primary">MERN Stack Developer</strong> and{' '}
                <strong className="text-primary">Agentic AI Developer</strong>, I combine traditional 
                web development expertise with cutting-edge AI technologies. I specialize in building 
                intelligent automation systems, AI-powered web applications, and scalable full-stack solutions.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I'm constantly exploring new technologies in both web development and artificial intelligence, 
                creating systems that can understand, reason, and act autonomously. From chatbots and virtual 
                assistants to complex workflow automation, I bridge the gap between human needs and AI capabilities.
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