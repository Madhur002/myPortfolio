/* eslint-disable */
// @ts-nocheck
"use client"
import { motion, useScroll } from 'framer-motion';
import { Outfit, Space_Grotesk, Syne } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiDocker, SiMongodb, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

// Initialize fonts
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });
const syne = Syne({ subsets: ['latin'] });

const technologies = [
  { name: 'React', icon: FaReact, font: spaceGrotesk.className },
  { name: 'Next.js', icon: TbBrandNextjs, font: outfit.className },
  { name: 'TypeScript', icon: BiLogoTypescript, font: syne.className },
  { name: 'Node.js', icon: FaNodeJs, font: spaceGrotesk.className },
  { name: 'Python', icon: FaPython, font: outfit.className },
  { name: 'PostgreSQL', icon: SiPostgresql, font: syne.className },
  { name: 'MongoDB', icon: SiMongodb, font: spaceGrotesk.className },
  { name: 'Docker', icon: SiDocker, font: outfit.className },
];

export default function Technologies() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll direction
  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  // Double the items for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${spaceGrotesk.className}`}>Technologies</h2>
          <p className={`text-gray-600 dark:text-gray-400 ${outfit.className}`}>
            Modern tools I use to build digital products
          </p>
        </motion.div>

        <div className="relative w-full" ref={containerRef}>
          <motion.div
            className="flex items-center gap-x-12 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{
              x: scrollDirection === 'down' ? '-50%' : '0%',
              transitionEnd: {
                animationPlayState: isHovered ? "paused" : "running"
              }
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="group flex items-center space-x-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <tech.icon className="w-6 h-6" />
                <span className={`text-sm tracking-wide ${tech.font}`}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 