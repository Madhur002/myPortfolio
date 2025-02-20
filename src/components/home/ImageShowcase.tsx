"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

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
    alt: 'Certificate 4',
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

  console.log("currentIndex", currentIndex)
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
        <div className="relative certificate-box overflow-hidden flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 w-[80vw] max-w-3xl h-[50vh]">
          <div className="flex-1 relative h-full w-full overflow-hidden rounded-xl">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="absolute inset-0 "
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : -100
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full ">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain rounded-xl overflow-hidden"
                    priority={index === currentIndex}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </motion.div>

      {/* Plant Foreground Layer */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-[url('/wallpaper/wall8Plant.png')] bg-cover bg-center z-[100]"
        style={{ opacity: plantOverlayOpacity }}
      />

      {/* Title */}
      <motion.div
        className="absolute bg-gradient-to-b from-black/80 to-transparent top-0 pt-10 text-center w-full transform -translate-x-1/2 z-40"
        style={{ scale: textScale }}
      >
        <span className="relative text-white text-center w-full text-4xl md:text-6xl lg:text-[14rem] max-w-5xl font-bold leading-relaxed tracking-tighter">
          Certifications
        </span>
      </motion.div>
      <div className='fixed  bottom-40 flex justify-center items-center gap-3 text-center h-10 w-full z-[9999999]'>
      <div className='bg-white/10 backdrop-blur-xl flex justify-center items-center gap-3 text-center p-2 rounded-full z-[9999999]'>

      <button 
            onClick={prevSlide}
            className="p-2 hover:scale-125 bg-white/10 rounded-full transition-all duration-300 z-50 cursor-pointer"
            style={{ cursor: 'pointer' }}
            >
            <IoIosArrowBack className='text-white text-2xl'/>
          </button>
          <h3 className="text-white text-center text-xl font-bold min-w-[400px]">{certificates[currentIndex]?.title}</h3>
      <button 
            onClick={nextSlide}
            className="p-2 hover:scale-125 bg-white/10 rounded-full transition-all duration-300 z-50 cursor-pointer"
            style={{ cursor: 'pointer' }}
            >
            <IoIosArrowBack className='rotate-180 text-white text-2xl'/>
          </button>
            </div>
      </div>
      <div className='fixed bottom-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center gap-3 text-center h-[20vh] w-full z-[999]'/>
    </section>
  );
} 