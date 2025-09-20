import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/kartik-parmar007',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kartik-parmar-/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:kartik.parmar.dev@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative py-12 border-t border-border/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Kartik.dev
            </h3>
            <p className="text-muted-foreground mt-2">
              Building digital experiences with passion and precision
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="glass-effect border-0 hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border/20 pt-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Kartik Parmar. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              and React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};