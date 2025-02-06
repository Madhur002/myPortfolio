"use client"
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FadingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });

  // Split text into words and add proper spacing
  const text = "Hi I'm Madhur, your Full stack developer from BHARAT .";
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
          console.log("word", word);
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
                color: word === "BHARAT" ? "transparent" : color,
                backgroundImage: word === "BHARAT" ? "linear-gradient(to bottom, #f97316,rgb(234, 234, 234), #22c55e)" : "none",
                WebkitBackgroundClip: word === "BHARAT" ? "text" : "none",
                transition: "all 300ms ease-in-out",
                fontWeight: word === "BHARAT" ? "bold" : "normal",
                
              }}
              
              className={`inline-block mr-[0.2em]`}
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
} 