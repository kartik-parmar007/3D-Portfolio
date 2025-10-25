/**
 * TechSculptor Portfolio - Custom Configuration
 * 
 * This file contains project-specific configurations and constants
 * for the TechSculptor portfolio website.
 * 
 * @author Kartik Parmar <kartik.parmar.dev@gmail.com>
 * @version 1.0.0
 * @since 2024
 */

export const SITE_CONFIG = {
  // Site metadata
  name: 'TechSculptor',
  title: 'TechSculptor - Kartik Parmar | MERN Stack & Agentic AI Developer',
  description: 'Professional portfolio showcasing MERN Stack development and Agentic AI automation expertise.',
  
  // Personal information
  author: {
    name: 'Kartik Parmar',
    email: 'kartik.parmar.dev@gmail.com',
    location: 'Gujarat, India',
    brand: 'TechSculptor'
  },
  
  // Social links
  links: {
    github: 'https://github.com/kartik-parmar007',
    linkedin: 'https://www.linkedin.com/in/kartik-parmar-/',
    email: 'mailto:kartik.parmar.dev@gmail.com'
  },
  
  // Project repositories
  projects: {
    flash2024: 'https://github.com/kartik-parmar007/Flash-2024.git',
    skumarco: 'https://skumarco.in',
    resumeAnalyzer: 'https://github.com/kartik-parmar007/Resume-Analyzer.git'
  },
  
  // Backend API configuration
  api: {
    baseUrl: 'https://threed-portfolio-2-u9hw.onrender.com',
    endpoints: {
      contact: '/api/contact'
    }
  },
  
  // Theme configuration
  theme: {
    defaultMode: 'dark',
    primaryColor: 'hsl(263, 70%, 50%)',
    accentColor: 'hsl(263, 70%, 60%)'
  },
  
  // Animation settings
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 0.8
    },
    ease: 'easeOut'
  }
} as const;

// Type definitions
export type SiteConfig = typeof SITE_CONFIG;
export type ThemeMode = 'light' | 'dark';
export type AnimationDuration = keyof typeof SITE_CONFIG.animations.duration;