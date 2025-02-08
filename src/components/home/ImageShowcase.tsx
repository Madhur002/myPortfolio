"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageShowcase() {
  return (
    <section className="relative min-h-[200vh] w-full overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/White Sports Car.jpg"
          alt="Car on mountain at sunset"
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>

      {/* Center Logo */}
      <div className="absolute top-[21%] left-1/2 transform -translate-x-1/2">
        <span className="relative group text-white text-4xl md:text-6xl lg:text-7xl max-w-5xl font-normal leading-relaxed tracking-tight">
          Certifications
          <span className="absolute -bottom-1 left-0 w-0 h-2 rounded-r-full bg-white group-hover:w-full transition-all duration-300"></span>
        </span>
        {/* <Image
          src="/logo.png" // Add your logo here
          alt="Logo"
          width={120}
          height={40}
          className="opacity-90"
        /> */}
      </div>

      {/* Bottom Image Grid */}
      <div className="absolute bottom-40 w-full p-8">
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