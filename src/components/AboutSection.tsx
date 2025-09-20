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
            I'm a passionate MERN Stack Developer with expertise in building modern, 
            scalable web applications. I love creating seamless user experiences 
            with clean code and beautiful interfaces.
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
                With a strong foundation in full-stack development, I specialize in the MERN stack, 
                creating dynamic and responsive web applications that deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning new technologies and best practices to stay at the forefront 
                of web development, ensuring that every project I work on meets modern standards 
                for performance, accessibility, and user experience.
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