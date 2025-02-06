"use client"
import { motion } from 'framer-motion';
import { Outfit, Space_Grotesk, Syne } from 'next/font/google';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiAmazon, SiDocker, SiMongodb, SiPostgresql } from 'react-icons/si';
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
  { name: 'Aws', icon: SiAmazon, font: syne.className },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center space-x-2 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <tech.icon className="w-6 h-6" />
                  <span className={`text-sm tracking-wide ${tech.font}`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 