"use client"
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const certificates = [
  {
    id: 1,
    src: '/wallpaper/wall8.jpg',
    alt: 'Certificate 1',
    title: 'AWS Certification'
  },
  {
    id: 2,
    src: '/wallpaper/wall6.jpg',
    alt: 'Certificate 2',
    title: 'React Development'
  },
  {
    id: 3,
    src: '/wallpaper/wall7.jpg',
    alt: 'Certificate 3',
    title: 'MongoDB Certification'
  },
  // Add more certificates as needed
];

export default function ImageShowcase() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

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
        className="certificate-container"
        style={{
          scale: certificateScale,
          y: certificateY,
          rotateX: certificateRotateX,
          rotateY: certificateRotateY,
          z: certificateZ,
          opacity: certificateOpacity,
          pointerEvents: 'auto',
        }}
      >
        <div className="certificate-box flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 w-[80vw] max-w-3xl">
          <button 
            onClick={prevSlide}
            className="p-2 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <FiChevronsLeft className='text-white text-2xl'/>
          </button>

          <div className="flex-1 relative h-[50vh] mx-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : -100
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain rounded-lg"
                    priority={index === currentIndex}
                  />
                </div>
                <h3 className="text-white text-center mt-2 text-lg font-semibold">
                  {cert.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="p-2 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <FiChevronsRight className='text-white text-2xl'/>
          </button>
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