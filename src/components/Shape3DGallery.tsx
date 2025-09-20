import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cube3D } from './Cube3D';

export const Shape3DGallery: React.FC = () => {
  const [activeShape, setActiveShape] = useState<'cube' | 'sphere' | 'pyramid' | 'torus'>('cube');

  const shapes = [
    { type: 'cube' as const, label: 'Cube', color: 'text-blue-400' },
    { type: 'sphere' as const, label: 'Sphere', color: 'text-purple-400' },
    { type: 'pyramid' as const, label: 'Pyramid', color: 'text-green-400' },
    { type: 'torus' as const, label: 'Torus', color: 'text-orange-400' }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-background/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Interactive 3D Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different 3D shapes with advanced mouse interactions and animations
          </p>
        </motion.div>

        {/* Shape Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {shapes.map((shape, index) => (
            <motion.button
              key={shape.type}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveShape(shape.type)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeShape === shape.type
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card hover:bg-accent text-card-foreground'
              }`}
            >
              <span className={activeShape === shape.type ? '' : shape.color}>
                {shape.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* 3D Shape Display */}
        <div className="flex justify-center">
          <motion.div
            key={activeShape}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <Cube3D size={250} variant={activeShape} className="hero-glow" />
            
            {/* Shape info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mt-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {shapes.find(s => s.type === activeShape)?.label} 3D Model
              </h3>
              <p className="text-muted-foreground">
                Hover to interact • Mouse controls rotation
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              title: 'Mouse Interaction',
              description: 'Advanced mouse tracking for realistic 3D rotation and movement',
              icon: '🖱️'
            },
            {
              title: 'Smooth Animations',
              description: 'Framer Motion powered transitions and micro-interactions',
              icon: '✨'
            },
            {
              title: 'Multiple Shapes',
              description: 'Cube, sphere, pyramid, and torus with unique behaviors',
              icon: '🎯'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};