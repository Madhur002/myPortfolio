"use client"
import { motion } from 'framer-motion';

import { useEffect, useRef } from 'react';
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        ctx.fillStyle = '#00000056';
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


  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container rounded-3xl mx-auto p-10 backdrop-blur-md z-50">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal">
                Full Stack
                <br />
                <span className="text-purple-500">Developer</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                A software developer specialized in building modern web applications and systems from 0 → 1
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>

          {/* Optional: Decorative Element */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-4 h-4">
              <div className="absolute w-full h-full rounded-full bg-purple-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
      />
    </section>
  );
} 