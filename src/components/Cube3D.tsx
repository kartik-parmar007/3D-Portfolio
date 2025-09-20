import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Cube3DProps {
  size?: number;
  className?: string;
}

export const Cube3D: React.FC<Cube3DProps> = ({ size = 100, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`cube-container ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div 
        className={`cube relative mx-auto ${isHovered ? 'rotate-fast' : 'rotate-slow'}`}
        style={{ 
          width: size, 
          height: size,
          transition: 'animation-duration 0.5s ease'
        }}
      >
        {/* Cube faces */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="cube-face rounded-lg"
            style={{
              width: size,
              height: size,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};