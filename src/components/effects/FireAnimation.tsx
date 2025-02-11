"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FireAnimation() {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    const createParticle = () => {
      const newParticles: { id: number; x: number; y: number }[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
      }
      setParticles(prev => [...prev, ...newParticles].slice(-100)); // Keep max 100 particles
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-4 h-4 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full"
          initial={{ 
            opacity: 1, 
            x: particle.x, 
            y: window.innerHeight + 20 
          }}
          animate={{ 
            opacity: 0,
            x: particle.x + (Math.random() * 200 - 100),
            y: particle.y - 500,
          }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
        />
      ))}
      <div className="fixed inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
    </div>
  );
}

export const useFireAnimation = () => {
  const [isFireActive, setIsFireActive] = useState(false);
  
  const toggleFire = () => {
    setIsFireActive(prev => !prev);
  };

  return { isFireActive, toggleFire };
}; 