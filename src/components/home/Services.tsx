"use client"
import { projects } from '@/utils/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';

export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div className="bg-black/50 ">
    <main ref={container} className="main-card">
      <section className="text-center sticky-sections-projects-text flex justify-center items-center h-screen w-full">
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
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.09);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
    </div>
  );
}