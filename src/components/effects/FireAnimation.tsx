"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { PiFireDuotone } from 'react-icons/pi';

export default function FireAnimation({ isActive }: { isActive: boolean }) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    if (!isActive && !isEnding) {
      // Start the ending animation
      setIsEnding(true);
      
      // Reset ending state after animation completes
      setTimeout(() => {
        setIsEnding(false);
        setParticles([]);
      }, 3000);
      
      return;
    }

    if (!isActive) {
      return;
    }

    const createParticle = () => {
      const newParticles: { id: number; x: number; y: number }[] = [];
      // Reduce number of particles when ending
      const particleCount = isEnding ? 5 : 20;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
      }
      setParticles(prev => [...prev, ...newParticles].slice(-100));
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, [isActive, isEnding]);

  if (!isActive && !isEnding) return null;

  return (
    <>
      {/* Particle system */}
      <div className="fixed inset-0 pointer-events-none z-[9998]">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-4 h-4"
            initial={{ 
              opacity: 1, 
              x: particle.x, 
              y: window.innerHeight + 200,
              scale: Math.random() * 3.5 + 2.5
            }}
            animate={{ 
              opacity: 0,
              x: particle.x + (Math.random() * 200 - 100),
              y: particle.y - 400,
              scale: 0
            }}
            transition={{ 
              duration: isEnding ? 2 : 3,
              ease: "easeOut"
            }}
          >
            <FaHeart className="text-purple-500" />
          </motion.div>
        ))}
      </div>

      {/* Text enhancement when fire mode is active */}
      <style jsx global>{`
        @keyframes fire-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.7; }
        }
        
        @keyframes flame-move {
          0% { background-position: 0% 100%; }
          100% { background-position: -200% 100%; }
        }
        
        @keyframes heat-distort {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.02) rotate(0.5deg); }
        }
        
        .animate-fire-pulse {
          animation: fire-pulse 3s infinite;
        }
        
        .animate-flame-move {
          animation: flame-move 10s linear infinite;
        }
        
        .animate-heat-distort {
          animation: heat-distort 5s infinite;
        }

        ${(isActive || isEnding) ? `
          h1, h2, h3, p, span, a {
            // text-shadow: 0 0 8px rgba(255, 69, 0, ${isEnding ? '0' : '0.5'});
            transition: all 3s ease;
          }
          
        ` : ''}
      `}</style>
    </>
  );
}

export const useFireAnimation = () => {
  const [isFireActive, setIsFireActive] = useState(false);
  
  const toggleFire = () => {
    setIsFireActive(true);
    document.body.classList.add('fire-mode');
    
    setTimeout(() => {
      setIsFireActive(false);
      // Remove fire-mode class after the fade-out animation
      setTimeout(() => {
        document.body.classList.remove('fire-mode');
      }, 3000);
    }, 3000);
  };

  return { isFireActive, toggleFire };
}; 