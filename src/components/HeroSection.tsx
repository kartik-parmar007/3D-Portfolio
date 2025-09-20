import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Cube3D } from './Cube3D';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero px-4 sm:px-6">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Kartik
                </span>{' '}
                👋
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mt-4">
                <span className="gradient-primary bg-clip-text text-transparent font-bold">TechSculptor</span> | MERN Stack Developer | Agentic AI Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left px-4 lg:px-0"
            >
              I build scalable web apps with MongoDB, Express, React, and Node.js, while crafting intelligent 
              automation systems with n8n and AI technologies. Welcome to TechSculptor - where code meets innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-4 lg:px-0"
            >
              <Button 
                size="lg" 
                className="gradient-primary hero-glow animate-pulse-glow w-full sm:w-auto"
                onClick={scrollToAbout}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20 h-10 w-10 sm:h-12 sm:w-12"
                  asChild
                >
                  <a
                    href="https://github.com/kartik-parmar007"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20 h-10 w-10 sm:h-12 sm:w-12"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/kartik-parmar-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20 h-10 w-10 sm:h-12 sm:w-12"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Contact"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="w-full h-full"
              >
                <Cube3D size={150} className="hero-glow" variant="cube" />
              </motion.div>
              
              {/* Floating particles - hidden on mobile for performance */}
              <div className="hidden md:block">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-accent/40 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      right: `${10 + i * 8}%`,
                    }}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 4 + i * 0.5, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};