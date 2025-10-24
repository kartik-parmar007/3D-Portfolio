import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';

export const ContactSection: React.FC = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kartikparmar.dev@gmail.com',
      href: 'mailto:kartikparmar.dev@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujarat,India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kartik-parmar007'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kartik-parmar-/'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to collaborate or discuss opportunities? Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6">Let's Connect</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 leading-relaxed px-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover:bg-accent/5 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base mb-1">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Follow Me</h4>
            <div className="flex justify-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="glass-effect border-0 hover:bg-accent/20 h-10 w-10 sm:h-12 sm:w-12"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};