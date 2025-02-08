'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaAws, FaCode, FaCss3, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from 'react-icons/si';
const LoadingScreen = ({ progress }: { progress: number }) => {
  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-[9999999] flex items-center justify-center overflow-hidden animate-gradient"
      style={{
        backgroundImage: 'linear-gradient(-45deg,rgb(255, 225, 244), #FFF5E1, #E1F5FF, #FFE1F9)',
        backgroundSize: '400% 400%',
        backgroundPosition: '0% 50%',
        transformOrigin: 'right center',
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 1, x: 0, rotateY: 0 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ 
        opacity: 0,
        rotateY: 90,
        x: '100%',
        transition: { 
          duration: 1.2,
          ease: [0.645, 0.045, 0.355, 1.000],
          opacity: {
            duration: 0.3,
            delay: 0.9
          }
        }
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-0"
        initial={{ opacity: 0 }}
        exit={{
          opacity: 0.2,
          transition: {
            duration: 1.2
          }
        }}
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.2), transparent)'
        }}
      />

      <div className="relative w-full max-w-screen-xl px-4 flex flex-col items-center">

        {/* Progress Circle */}
        <motion.div 
          className="relative flex items-center justify-center mb-8 w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress counter */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="text-4xl md:text-6xl text-black font-bold text-nowrap rounded-full h-30 w-30 md:h-32 md:w-32 flex items-center justify-center">
              {progress >= 0 && progress < 10 && <FaHtml5 className='text-7xl' />} 
              {progress >= 10 && progress < 20 && <FaCss3 className='text-7xl' />} 
              {progress >= 20 && progress < 30 && <FaJsSquare className='text-7xl' />} 
              {progress >= 30 && progress < 40 && <FaReact className='text-7xl' />} 
              {progress >= 40 && progress < 50 && <RiNextjsFill className='text-7xl' />} 
              {progress >= 50 && progress < 60 && <FaNodeJs className='text-7xl' />} 
              {progress >= 60 && progress < 70 && <SiMongodb className='text-7xl' />} 
              {progress >= 70 && progress < 80 && <FaGithub className='text-7xl' />} 
              {progress >= 80 && progress < 90 && <FaAws className='text-7xl' />} 
              {progress >= 90 && progress <= 100 && <FaCode className='text-7xl' />} 
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WrappedLoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
          setTimeout(() => setLoading(false), 1000);
        }, 500);
      }
      setProgress(Math.min(Math.round(currentProgress), 100));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && <LoadingScreen progress={progress} />}
    </AnimatePresence>
  );
};

export default WrappedLoadingScreen; 