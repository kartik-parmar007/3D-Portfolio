import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Cube3DProps {
  size?: number;
  className?: string;
  variant?: 'cube' | 'sphere' | 'pyramid' | 'torus';
}

export const Cube3D: React.FC<Cube3DProps> = ({ 
  size = 100, 
  className = '', 
  variant = 'cube' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height
        });
      }
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const renderCube = () => (
    <div 
      className="cube-3d relative"
      style={{ 
        width: size, 
        height: size,
        transform: isHovered 
          ? `rotateX(${mousePosition.y * 30}deg) rotateY(${mousePosition.x * 30}deg)` 
          : 'rotateX(15deg) rotateY(15deg)',
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.5s ease'
      }}
    >
      {/* Cube faces with unique colors and content */}
      <div className="cube-face cube-front" style={{ width: size, height: size }}>
        <div className="flex items-center justify-center h-full text-sm font-bold text-primary-foreground">
          REACT
        </div>
      </div>
      <div className="cube-face cube-back" style={{ width: size, height: size }}>
        <div className="flex items-center justify-center h-full text-sm font-bold text-primary-foreground">
          NODE
        </div>
      </div>
      <div className="cube-face cube-right" style={{ width: size, height: size }}>
        <div className="flex items-center justify-center h-full text-sm font-bold text-primary-foreground">
          AI
        </div>
      </div>
      <div className="cube-face cube-left" style={{ width: size, height: size }}>
        <div className="flex items-center justify-center h-full text-sm font-bold text-primary-foreground">
          MERN
        </div>
      </div>
      <div className="cube-face cube-top" style={{ width: size, height: size }}>
        <div className="flex items-center justify-center h-full text-sm font-bold text-primary-foreground">
          WEB
        </div>
      </div>
      <div className="cube-face cube-bottom" style={{ width: size, height: size }}>
        <div className="flex items-center justify-center h-full text-sm font-bold text-primary-foreground">
          DEV
        </div>
      </div>
    </div>
  );

  const renderSphere = () => (
    <div 
      className="sphere-3d relative"
      style={{ 
        width: size, 
        height: size,
        transform: isHovered 
          ? `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)` 
          : 'rotateX(0deg) rotateY(0deg)',
        transition: isHovered ? 'none' : 'transform 0.5s ease'
      }}
    >
      <div 
        className="sphere gradient-primary rounded-full shadow-glow"
        style={{ width: size, height: size }}
      />
    </div>
  );

  const renderPyramid = () => (
    <div 
      className="pyramid-3d relative"
      style={{ 
        width: size, 
        height: size,
        transform: isHovered 
          ? `rotateX(${mousePosition.y * 25}deg) rotateY(${mousePosition.x * 25}deg)` 
          : 'rotateX(10deg) rotateY(10deg)',
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.5s ease'
      }}
    >
      <div className="pyramid-face pyramid-front" style={{ width: size, height: size }} />
      <div className="pyramid-face pyramid-back" style={{ width: size, height: size }} />
      <div className="pyramid-face pyramid-right" style={{ width: size, height: size }} />
      <div className="pyramid-face pyramid-left" style={{ width: size, height: size }} />
      <div className="pyramid-face pyramid-base" style={{ width: size, height: size }} />
    </div>
  );

  const renderTorus = () => (
    <div 
      className="torus-3d relative"
      style={{ 
        width: size, 
        height: size,
        transform: isHovered 
          ? `rotateX(${mousePosition.y * 30}deg) rotateY(${mousePosition.x * 30}deg)` 
          : 'rotateX(0deg) rotateY(0deg)',
        transition: isHovered ? 'none' : 'transform 0.5s ease'
      }}
    >
      <div className="torus-ring gradient-primary shadow-glow" style={{ width: size, height: size }} />
    </div>
  );

  const renderShape = () => {
    switch (variant) {
      case 'sphere': return renderSphere();
      case 'pyramid': return renderPyramid();
      case 'torus': return renderTorus();
      default: return renderCube();
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`shape-container-3d ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ 
          rotateY: isHovered ? 0 : 360,
          y: [0, -10, 0]
        }}
        transition={{ 
          rotateY: { duration: isHovered ? 0 : 20, ease: "linear", repeat: isHovered ? 0 : Infinity },
          y: { duration: 4, ease: "easeInOut", repeat: Infinity }
        }}
      >
        {renderShape()}
      </motion.div>
      
      {/* Floating particles around the shape */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
          style={{
            top: `${20 + (i * 8)}%`,
            left: `${15 + (i * 9)}%`,
          }}
          animate={{ 
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
            x: [0, Math.sin(i) * 20, 0],
            y: [0, Math.cos(i) * 15, 0]
          }}
          transition={{ 
            duration: 3 + i * 0.2, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </motion.div>
  );
};