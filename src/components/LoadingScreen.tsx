'use client';

import { motion, AnimatePresence, progress } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaAws, FaCode, FaCss3, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from 'react-icons/si';

// Add new types for explosion animation
type Block = {
  id: number;
  x: number;
  y: number;
  delay: number;
  velocityX: number;
  velocityY: number;
  scale: number;
};

// Modified BlockGrid component
const BlockGrid = ({ isExiting, progress }: { isExiting: boolean, progress: number }) => {
  const rows = 15;
  const cols = 20;
  
  // Create blocks with position and velocity information
  const blocks: Block[] = Array.from({ length: rows * cols }, (_, i) => {
    const x = (i % cols) / cols;
    const y = Math.floor(i / cols) / rows;
    const centerX = 0.5;
    const centerY = 0.5;
    
    // Calculate angle and distance from center for explosion
    const angle = Math.atan2(y - centerY, x - centerX);
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    
    return {
      id: i,
      x,
      y,
      delay: distance * 0.15, // Delay based on distance from center
      velocityX: Math.cos(angle) * (1 + Math.random() * 0.5),
      velocityY: Math.sin(angle) * (1 + Math.random() * 0.5),
      scale: 0.5 + Math.random() * 0.5
    };
  });

  return (
    <div 
      className="absolute inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        perspective: '1000px'
      }}
    >
      {blocks.map(block => (
        <motion.div
          key={block.id}
          className={`bg-white ${progress >=  100 && "shadow-2xl shadow-purple-300"}`}
          initial={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, x: 0, y: 0 }}
          animate={isExiting ? {
            opacity: [1, 1, 0],
            scale: [1, block.scale, 0],
            x: [0, block.velocityX * 100, block.velocityX * 200],
            y: [0, block.velocityY * 100, block.velocityY * 200],
            rotateX: [0, Math.random() * 720 - 360],
            rotateY: [0, Math.random() * 720 - 360],
            transition: {
              duration: 1.5,
              delay: block.delay,
              times: [0, 0.7, 1],
              ease: [0.2, 0.8, 0.8, 0.2]
            }
          } : {}}
        />
      ))}
    </div>
  );
};

// Modify the LoadingScreen component
const LoadingScreen = ({ progress, isExiting }: { progress: number, isExiting: boolean }) => {
  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-[9999999] flex items-center justify-center overflow-hidden bg-transparent "
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 1,
        transition: { 
          duration: 2.5
        }
      }}
    >
      <BlockGrid isExiting={isExiting} progress={progress} />
      
      {/* Only show progress icons when not exiting */}
      {!isExiting && (
        <div className="relative w-full max-w-screen-xl px-4 flex flex-col items-center">
          <motion.div 
            className="relative flex items-center justify-center mb-8 w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10 flex items-center justify-center">
              <span className="text-4xl md:text-6xl text-[#a855f7] font-bold text-nowrap rounded-full h-30 w-30 md:h-32 md:w-32 flex items-center justify-center">
                {progress >= 0 && progress < 10 && <FaHtml5 className='text-7xl' />} 
                {progress >= 10 && progress < 20 && <FaCss3 className='text-7xl' />} 
                {progress >= 20 && progress < 30 && <FaJsSquare className='text-7xl' />} 
                {progress >= 30 && progress < 40 && <FaReact className='text-7xl' />} 
                {progress >= 40 && progress < 50 && <RiNextjsFill className='text-7xl' />} 
                {progress >= 50 && progress < 60 && <FaNodeJs className='text-7xl' />} 
                {progress >= 60 && progress < 70 && <SiMongodb className='text-7xl' />} 
                {progress >= 70 && progress < 80 && <FaGithub className='text-7xl' />} 
                {progress >= 80 && progress < 90 && <FaAws className='text-7xl' />} 
                {progress >= 90 && progress <= 98 && <FaCode className='text-7xl' />} 
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

// Modify the WrappedLoadingScreen component
const WrappedLoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 1000;
    const interval = 10;
    const steps = duration / interval;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          // Increased delay to match explosion animation duration
          setTimeout(() => setLoading(false), 2500);
        }, 100);
      }
      setProgress(Math.min(Math.round(currentProgress), 100));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && <LoadingScreen progress={progress} isExiting={isExiting} />}
    </AnimatePresence>
  );
};

export default WrappedLoadingScreen; 