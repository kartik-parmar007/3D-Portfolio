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
  { name: 'OpenAI API', icon: Code, category: 'AI/ML' },
  { name: 'LangChain', icon: Database, category: 'AI/ML' },
  { name: 'AI Agents', icon: Globe, category: 'AI/ML' },
  { name: 'Python', icon: Code, category: 'AI/ML' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate MERN Stack Developer and Agentic AI Developer with expertise in building modern, 
            scalable web applications and intelligent automation systems. I love creating seamless user experiences 
            with clean code, beautiful interfaces, and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a <strong className="text-primary">MERN Stack Developer</strong> and{' '}
                <strong className="text-primary">Agentic AI Developer</strong>, I combine traditional 
                web development expertise with cutting-edge AI technologies. I specialize in building 
                intelligent automation systems, AI-powered web applications, and scalable full-stack solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
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
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-xl hover:bg-accent/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      <skill.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
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