import React from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
// import { ThemeTest } from './ThemeTest';
// import { ThemePersistenceTest } from './ThemePersistenceTest';

export const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        {/* 
        <div className="container mx-auto px-4 py-8">
          <ThemeTest />
          <div className="mt-4">
            <ThemePersistenceTest />
          </div>
        </div>
        */}
      </main>
      
      <Footer />
    </div>
  );
};