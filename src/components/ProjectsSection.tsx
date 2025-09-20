import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Nature Protect System (NPS)',
    description: 'A comprehensive MERN application for environmental reporting featuring geolocation services, file uploads, and real-time data management.',
    longDescription: 'The Nature Protect System is a full-stack web application built to help environmental organizations and activists report and track environmental issues. Features include user authentication, geolocation-based reporting, image and document uploads, admin dashboard, and real-time notifications.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'MapBox'],
    github: 'https://github.com/kartik-parmar007/nps',
    live: 'https://nps-demo.com',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Chatroom App',
    description: 'Real-time chat application with media upload capabilities, PDF export functionality, and modern UI design.',
    longDescription: 'A modern real-time chat application built with Socket.io and React. Features include instant messaging, file sharing, image uploads, chat history, PDF export of conversations, user authentication, and responsive design.',
    tech: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Multer'],
    github: 'https://github.com/kartik-parmar007/chatroom',
    live: 'https://chatroom-demo.com',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 3,
    title: 'Product Renting System',
    description: 'Hour-based product rental platform with payment integration, inventory management, and user dashboard.',
    longDescription: 'A comprehensive rental management system allowing users to list products for rent, manage bookings, and handle payments. Features include hourly billing, product categories, user reviews, booking calendar, payment processing, and detailed analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Calendar'],
    github: 'https://github.com/kartik-parmar007/rental-system',
    live: 'https://rental-demo.com',
    image: '/api/placeholder/600/400',
    featured: false
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern UI design, and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
                    <Monitor className="h-12 w-12 text-accent/60" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.live, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  {selectedProject.featured && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent mt-2">
                      Featured Project
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-6 flex items-center justify-center">
                <Monitor className="h-16 w-16 text-accent/60" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(selectedProject.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  className="flex-1 gradient-primary"
                  onClick={() => window.open(selectedProject.live, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};