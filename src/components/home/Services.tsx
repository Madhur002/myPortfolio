"use client"
import { motion } from 'framer-motion';
const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with great user experience.',
    icon: '🎨',
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications using React Native.',
    icon: '📱',
  },
];

export default function Services() {
  return (
    <section className="text-center flex justify-center items-center h-screen w-full">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-white/50 text-[14rem] font-bold tracking-tighter'
      >
        Projects
      </motion.p>
    </section>
  );
}