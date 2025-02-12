"use client"
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

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
  // 3. Peak and start descending (0.5-0.7)
  // 4. Settle in viewing position (0.7-0.9)
  const certificateScale = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [0.6, 0.8, 1.2, 1.3, 1.4]
  );

  const certificateY = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    ["-10vh", "60vh", "5vh", "100vh", "160vh"]
  );
  console.log("certificateY", certificateY);
  const certificateRotateX = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [30, 15, -15, -5, 0]
  );

  const certificateRotateY = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [-20, -10, 5, 0, 0]
  );

  const certificateZ = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [-300, -150, 100, 200, 250]
  );

  const certificateOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.9],
    [0, 0.5, 1, 1]
  );

  // Plant overlay opacity - New animation
  const plantOverlayOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.51],
    [1, 1, 1, 0]
  );

  return (
    <section ref={sectionRef} className="bg-[url('/wallpaper/wall8.jpg')] bg-cover bg-center relative min-h-[200vh] w-full overflow-hidden perspective-2000">
      {/* Main Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: backgroundScale }}
      />

      {/* Plant Background Layer */}
      <div className="absolute inset-0 w-full h-full bg-[url('/wallpaper/wall8Plant.png')] bg-cover bg-center z-10" />

      {/* Certificate Container */}
      <motion.div
        className="certificate-container z-30"
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
        <div className="certificate-box flex gap-2 px-1 bg-white/20 justify-between items-center">
          <button className=""><FiChevronsLeft className='text-white'/></button>
          <div className="certificate-content ">
            <h2 className="certificate-title">Sample Certificate</h2>
          </div>
          <button className=""><FiChevronsRight className='text-lg text-white'/></button>

        </div>
      </motion.div>

      {/* Plant Foreground Layer */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-[url('/wallpaper/wall8Plant.png')] bg-cover bg-center z-[100]"
        style={{ opacity: plantOverlayOpacity }}
      />

      {/* Title */}
      <motion.div
        className="absolute top-[3%] text-center w-full transform -translate-x-1/2 z-40"
        style={{ scale: textScale }}
      >
        <span className="relative text-white text-center w-full text-4xl md:text-6xl lg:text-[14rem] max-w-5xl font-bold leading-relaxed tracking-tighter">
          Certifications
        </span>
      </motion.div>
    </section>
  );
} 