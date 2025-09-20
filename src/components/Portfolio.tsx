import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export const Portfolio: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};