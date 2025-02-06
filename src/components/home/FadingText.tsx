"use client"
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FadingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Split text into words and add proper spacing
  const text = "Madhur is the best developer ever created on the entire planet";
  const words = text.split(" ");
  
  // Calculate progress steps for each word
  const progressPerWord = 1 / words.length;

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <p className="text-4xl md:text-6xl lg:text-7xl max-w-5xl font-normal leading-relaxed tracking-tight">
        {words.map((word, index) => {
          // Calculate opacity transition points for each word
          const start = index * progressPerWord;
          const end = start + progressPerWord;

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.3, 1] // Reversed opacity (dark to bright)
          );

          const color = useTransform(
            scrollYProgress,
            [start, end],
            ["rgb(75, 85, 99)", "rgb(0, 0, 0)"] // Reversed color (dark to white)
          );

          return (
            <motion.span
              key={index}
              style={{
                opacity,
                color,
              }}
              className="inline-block mr-[0.2em]" // Added consistent word spacing
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
} 