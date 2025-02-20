"use client"
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { customImageLoader, shimmer, toBase64 } from '@/utils/imageOptimization';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Dot pattern properties
    const dots: { x: number; y: number; size: number }[] = [];
    const spacing = 30;
    const baseSize = 2;
    const maxSize = 6;
    const mouseRadius = 100;

    // Create dot grid
    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({ x, y, size: baseSize });
      }
    }

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        const distance = Math.sqrt(
          Math.pow(mouseX - dot.x, 2) + Math.pow(mouseY - dot.y, 2)
        );

        // Calculate dot size based on mouse proximity
        const size = distance < mouseRadius
          ? baseSize + (maxSize - baseSize) * (1 - distance / mouseRadius)
          : baseSize;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = '#a855f780';
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from mouse to center
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Calculate magnetic pull (stronger when closer)
    const magneticPull = 0.4;
    setMousePosition({
      x: deltaX * magneticPull,
      y: deltaY * magneticPull,
    });
  };

  const renderButton = () => (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{ position: 'relative' }}
    >
      <motion.div
        animate={{
          x: isHovered ? mousePosition.x : 0,
          y: isHovered ? mousePosition.y : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-800 to-violet-700 px-8 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-violet-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative text-lg flex items-center gap-2 text-white">
            Get in Touch
            <motion.span
              initial={{ x: -4, opacity: 0 }}
              animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 1, rotate: isHovered ? 90 : 45 }}
              transition={{ duration: 0.2 }}
            >
              <FiArrowUpRight className="text-xl" />
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 rounded-full bg-white/[0.08]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="hero" className="min-h-screen bg-[#01010d] flex items-center relative overflow-hidden">
      <div className="container relative overflow-hidden rounded-[40px] mx-auto p-10 bg-[#000000] border-2 transition-all duration-300 border-purple-500 z-50">
        {/* <Image src="/chakras/sahasrara.png" className='absolute top-[-50px] right-[-200px]' alt="sahasrara" width={500} height={500} /> */}

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h1 className=" text-purple-300 [-webkit-text-stroke:_2px_black] text-6xl md:text-7xl lg:text-8xl font-semibold">
                Full Stack
                <br />
                <span className="text-purple-300 [-webkit-text-stroke:_2px_black]">Developer</span>
              </h1>
              <p className="text-2xl text-purple-500 max-w-xl font-normal ml-2">
                A software developer specialized in building modern web applications and systems from 0 → 1
              </p>
              <div className="flex items-center gap-4 pt-4">
                {renderButton()}
              </div>
            </div>
          </motion.div>

          {/* Optional: Decorative Element with Profile Image */}
          <div
            className="md:w-1/2 md:mt-0 flex justify-center items-start gap-8"
          >
            <div className="relative overflow-hidden w-[500px] border-2 border-black bg-gradient-to-r from-violet-500 to-purple-500 rounded-full h-[300px]">
              <Image
                src="/profile.png"
                alt="profile"
                className="absolute scale-110 hover:scale-[1.15]  w-full z-50 h-full object-contain rounded-full transition-all duration-300"
                width={500}
                height={300}
                priority
                loader={customImageLoader}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
              />
              {/* <Image src="/chakras/sahasrara.png" className='absolute invert top-[-120px] right-[-287px]' alt="sahasrara" width={500} height={500} /> */}
            </div>
            <div className="relative w-10 h-10 rounded-full">
              <div className="absolute w-full h-full rounded-full border-2 border-black  bg-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
      />
    </section>
  );
} 