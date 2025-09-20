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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Kartik
                </span>{' '}
                👋
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mt-4">
                MERN Stack Developer | Full-stack Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              I build scalable web apps with MongoDB, Express, React, and Node. 
              I emphasize clean UI, smooth animations, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="gradient-primary hero-glow animate-pulse-glow"
                onClick={scrollToAbout}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20"
                  asChild
                >
                  <a
                    href="https://github.com/kartik-parmar007"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/kartik-parmar-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Contact"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                <Cube3D size={200} className="hero-glow" />
              </motion.div>
              
              {/* Floating particles */}
              {Array.from({ length: 5 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/40 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${10 + i * 8}%`,
                  }}
                  animate={{ 
                    y: [0, -30, 0],
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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