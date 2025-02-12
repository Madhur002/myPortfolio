"use client"
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImageShowcase() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: sectionRef
  });

  // Background and text animations
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 0.9]);
  
  // Certificate animations with four stages:
  // 1. Start from behind plant (0.1-0.3)
  // 2. Rise up through plant (0.3-0.5)
  // 3. Come forward (0.5-0.7)
  // 4. Settle down in front (0.7-0.9)
  const certificateScale = useTransform(
    scrollYProgress, 
    [0.1, 0.3, 0.5, 0.7, 0.9], 
    [0.6, 0.8, 1.2, 1.4, 1.4]
  );
  
  const certificateY = useTransform(
    scrollYProgress, 
    [0.1, 0.3, 0.5, 0.7, 0.9], 
    ["100vh", "50vh", "-20vh", "-20vh", "10vh"]
  );
  
  const certificateRotateX = useTransform(
    scrollYProgress, 
    [0.1, 0.3, 0.5, 0.7, 0.9], 
    [30, 15, -10, -5, 0]
  );
  
  const certificateRotateY = useTransform(
    scrollYProgress, 
    [0.1, 0.3, 0.5, 0.7, 0.9], 
    [-20, -10, 5, 0, 0]
  );
  
  const certificateZ = useTransform(
    scrollYProgress, 
    [0.1, 0.3, 0.5, 0.7, 0.9], 
    [-300, -150, 0, 200, 300]
  );
  
  const certificateOpacity = useTransform(
    scrollYProgress, 
    [0.1, 0.2, 0.3, 0.9], 
    [0, 0.5, 1, 1]
  );

  // Plant overlay opacity - New animation
  const plantOverlayOpacity = useTransform(
    scrollYProgress,
    [1, 1],
    [1, 1]
  );

  return (
    <section ref={sectionRef} className="bg-[url('/wallpaper/wall8.jpg')] bg-cover bg-center relative min-h-[200vh] w-full overflow-hidden perspective-2000">
      {/* Main Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: backgroundScale }}
      />

      {/* Plant Background Layer */}
      <div className="absolute inset-0 w-full h-full bg-[url('/wallpaper/wall8Plant.png')] bg-cover bg-center z-50" />
      
      {/* Certificate Container */}
      <motion.div 
        className="certificate-container"
        style={{ 
          scale: certificateScale,
          y: certificateY,
          rotateX: certificateRotateX,
          rotateY: certificateRotateY,
          z: certificateZ,
          opacity: certificateOpacity,
        }}
      >
        {/* Placeholder Certificate */}
        <div className="certificate-box">
          <div className="certificate-content">
            <h2 className="certificate-title">Sample Certificate</h2>
          </div>
        </div>
      </motion.div>

      {/* Plant Foreground Layer */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-[url('/wallpaper/wall8Plant.png')] bg-cover bg-center z-40"
        style={{ opacity: plantOverlayOpacity }}
      />
      
      {/* Title */}
      <motion.div 
        className="absolute top-[3%] text-center w-full transform -translate-x-1/2 z-50"
        style={{ scale: textScale }}
      >
        <span className="relative text-white text-center w-full text-4xl md:text-6xl lg:text-[14rem] max-w-5xl font-bold leading-relaxed tracking-tighter">
          Certifications
        </span>
      </motion.div>
    </section>
  );
} 