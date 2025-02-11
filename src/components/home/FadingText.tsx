"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FadingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Split text into words and add proper spacing
  const text = "Hi I'm Madhur, your Full stack developer from India .";
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

            const color = useTransform(
              scrollYProgress,
              [start, end],
              ["rgb(0 0 0)", "rgb(216 180 254)"]
            );

            // Add fontSize transform
            const fontSize = useTransform(
              scrollYProgress,
              [start, end],
              ["1em", "1.5em"] // Adjust these values to control the size range
            );

            return (
              <motion.span
                key={index}
                style={{
                  color,
                  fontSize,
                }}
                className={`[-webkit-text-stroke:_2px_#000000] inline-block mr-[0.2em] ${
                  word === "India" && "hover:scale-110 transition-all duration-300"
                } ${word === "Hi" && "hover:scale-110 transition-all duration-300"} ${
                  word === "I'm" && "hover:scale-110 transition-all duration-300"
                } ${word === "Full" && "hover:scale-110 transition-all duration-300"} ${
                  word === "stack" && "hover:scale-110 transition-all duration-300"
                } ${word === "developer" && "hover:scale-110 transition-all duration-300"} ${
                  word === "Madhur," && "hover:scale-110 transition-all duration-300"
                } ${word === "your" && "hover:scale-110 transition-all duration-300"} ${
                  word === "from" && "hover:scale-110 transition-all duration-300"
                }`}
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