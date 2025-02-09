"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FadingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });

  // Split text into words and add proper spacing
  const text = "Hi I'm Madhur, your Full stack developer from India";
  const words = text.split(" ");
  
  // Calculate progress steps for each word
  const progressPerWord = 1 / words.length;

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        ref={containerRef}
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <p className="text-4xl md:text-6xl font-bold lg:text-7xl max-w-5xl leading-relaxed tracking-tight">
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
                  color: word === "India" ? "transparent" : color,
                  backgroundImage: word === "India" ? "linear-gradient(to right, #f97316,#22c55e)" : "none",
                  WebkitBackgroundClip: word === "India" ? "text" : "none",
                  transition: "all 300ms ease-in-out",
                  fontWeight: word === "India" ? "bold" : "bold",
                  
                }}
                
                className={`inline-block mr-[0.2em]`}
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default FadingText; 