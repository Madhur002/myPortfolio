"use client"
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImageShowcase() {
  // Add scroll progress tracking
  const { scrollYProgress } = useScroll({
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to scale values
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 2.3]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 2.0]); // Adjust these values as needed

  return (
    <section className="relative min-h-[150vh] w-full overflow-hidden">
      {/* Main Background Image - Convert to motion.div */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: backgroundScale }}
      >
        <Image
          src="/White Sports Car.jpg"
          alt="Car on mountain at sunset"
          fill
          className="object-cover brightness-90"
          priority
        />
      </motion.div>

      {/* Center Logo */}
      <motion.div 
        className="absolute top-[7%] text-center w-full transform -translate-x-1/2"
        style={{ scale: textScale }}
      >
        <span className="relative text-white/60 text-center w-full text-4xl md:text-6xl lg:text-[7rem] max-w-5xl font-bold leading-relaxed tracking-tight">
          Certifications
        </span>
        {/* <Image
          src="/logo.png" // Add your logo here
          alt="Logo"
          width={120}
          height={40}
          className="opacity-90"
        /> */}
      </motion.div>

      {/* Bottom Image Grid */}
      <div className="hidden absolute top-[20%] w-full p-8">
        <div className="grid grid-cols-2 gap-8 h-[100vh] max-h-[800px]">
          {/* Left Image */}
          <motion.div
            className="relative h-full bg-black hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/3D Renders Maxim Berg.jpg"
              alt="Close-up product shot"
              fill
              className="object-contain"
            />
            {/* Logo Overlay */}
            <div className="absolute bottom-1/2 left-4 bg-white/70 rounded-full px-4 p-2">
              <h3 className="text-black text-sm font-light">LEFT</h3>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-full bg-black hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/3D Renders by Almas Salakhov.jpg"
              alt="Vehicle with trailer"
              fill
              className="object-contain "
            />
            {/* Logo Overlay */}
            <div className="absolute bottom-1/2 right-2 bg-white/20 rounded-full px-4 p-2">
              <h3 className="text-white/60 text-sm font-light">RIGHT</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 