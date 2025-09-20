import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Monitor, Globe, Database, Code, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Flash-2024',
    description: 'A comprehensive MERN application for environmental reporting featuring geolocation services, file uploads, and real-time data management.',
    longDescription: 'Flash-2024 is a full-stack web application built to help environmental organizations and activists report and track environmental issues. Features include user authentication, geolocation-based reporting, image and document uploads, admin dashboard, and real-time notifications.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'MapBox'],
    github: 'https://github.com/kartik-parmar007/Flash-2024.git',
    live: null,
    image: '/flash-2024.svg',
    gradient: 'from-green-500/20 to-emerald-500/20',
    primaryColor: 'text-green-500',
    icon: Globe,
    featured: true
  },
  {
    id: 2,
    title: 'S Kumar&CO.',
    description: 'Professional company website with modern UI design, responsive layout, and optimized performance for business operations.',
    longDescription: 'S Kumar&CO is a professional business website developed for a company to showcase their services and establish online presence. Features include responsive design, modern UI components, contact forms, service showcases, and optimized performance for better user experience.',
    tech: ['React', 'Next.js', 'TailwindCSS', 'Responsive Design', 'SEO'],
    github: null,
    live: 'https://skumarco.in',
    image: '/skumarco.svg',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    primaryColor: 'text-blue-500',
    icon: Monitor,
    featured: true
  },
  {
    id: 3,
    title: 'Resume Analyzer and Job Finding',
    description: 'Advanced MERN stack application with multiple API integrations for resume analysis and job matching functionality.',
    longDescription: 'A comprehensive job search and resume optimization platform built with MERN stack. Features include AI-powered resume analysis, job matching algorithms, multiple API integrations for job listings, skill assessment, and personalized job recommendations based on resume content.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Multiple APIs', 'AI Integration'],
    github: 'https://github.com/kartik-parmar007/Resume-Analyzer.git',
    live: null,
    image: '/resume-analyzer.svg',
    gradient: 'from-purple-500/20 to-pink-500/20',
    primaryColor: 'text-purple-500',
    icon: Database,
    featured: false
  }
];

// Helper function to get tech stack icons
const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: any } = {
    'React': Code,
    'Node.js': Server,
    'Express': Globe,
    'MongoDB': Database,
    'Next.js': Monitor,
    'TailwindCSS': Code,
    'Multiple APIs': Globe,
    'AI Integration': Database,
    'Cloudinary': Globe,
    'MapBox': Globe,
    'SEO': Monitor,
    'Responsive Design': Monitor
  };
  return iconMap[tech] || Code;
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern UI design, and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 card-hover cursor-pointer h-full group"
                    onClick={() => setSelectedProject(project)}>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative aspect-video rounded-lg mb-3 sm:mb-4 overflow-hidden group">
                    {/* Custom gradient background with project icon */}
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                      {/* Main project icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className={`h-12 w-12 sm:h-16 sm:w-16 ${project.primaryColor} opacity-60`} />
                      </div>
                      
                      {/* Tech stack icons floating */}
                      <div className="absolute inset-0">
                        {project.tech.slice(0, 4).map((tech, index) => {
                          const Icon = getTechIcon(tech);
                          const positions = [
                            'top-4 left-4',
                            'top-4 right-4', 
                            'bottom-4 left-4',
                            'bottom-4 right-4'
                          ];
                          return (
                            <motion.div
                              key={tech}
                              className={`absolute ${positions[index]}`}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 0.3, scale: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/40" />
                            </motion.div>
                          );
                        })}
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-medium text-foreground/80 bg-background/50 px-2 py-1 rounded">
                          Click to view details
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base sm:text-lg group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {project.github && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </Button>
                    )}
                    {project.live && (
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.live, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect p-4 sm:p-6 md:p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold pr-4">{selectedProject.title}</h3>
                  {selectedProject.featured && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent mt-1 sm:mt-2 text-xs">
                      Featured Project
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 h-8 w-8 sm:h-10 sm:w-10"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>

              <div className="relative aspect-video rounded-lg mb-4 md:mb-6 overflow-hidden">
                {/* Enhanced project preview for modal */}
                <div className={`w-full h-full bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center relative`}>
                  {/* Main project visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <selectedProject.icon className={`h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 ${selectedProject.primaryColor} opacity-60`} />
                  </div>
                  
                  {/* Tech stack showcase */}
                  <div className="absolute inset-0 p-4">
                    <div className="grid grid-cols-3 gap-2 h-full">
                      {selectedProject.tech.map((tech, index) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <motion.div
                            key={tech}
                            className="flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 0.4, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="text-center">
                              <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-foreground/50 mx-auto mb-1" />
                              <span className="text-xs text-foreground/40 hidden sm:block">{tech}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Project title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-3">
                    <span className="text-xs sm:text-sm font-medium text-foreground/70">
                      {selectedProject.tech.join(' • ')}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {selectedProject.github && (
                  <Button 
                    variant="outline" 
                    className="flex-1 text-sm"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
                {selectedProject.live && (
                  <Button 
                    className="flex-1 gradient-primary text-sm"
                    onClick={() => window.open(selectedProject.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};