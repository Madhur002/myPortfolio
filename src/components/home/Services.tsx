"use client"
import { projects } from '@/utils/data';
import { motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import Card from './Card';

export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()
  
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  })
  return (
    <div className="bg-black/50 relative h-full w-full">
            <div className='fixed top-0 bg-gradient-to-b from-black to-transparent flex justify-center items-center gap-3 text-center h-[20vh] w-full z-[999]'/>
            <div className='fixed bottom-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center gap-3 text-center h-[20vh] w-full z-[999]'/>
    <main ref={container} className="main-card">
      <section className="text-center sticky-sections-projects-text flex justify-center items-center h-screen w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-[#3f4e67] text-[14rem] font-bold tracking-tighter'
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
    <div className='absolute top-0 h-full w-full overflow-hidden'>
    <div className='absolute top-0 opacity-65 right-0 bg-[url("/overlay/overlay3.png")] bg-contain bg-no-repeat bg-center invert flex justify-center items-center gap-3 text-center rotate-[30deg] h-[300px] w-[300px]'/>
    <div className='absolute top-[800px] left-[200px] bg-[url("/overlay/overlay10.png")] opacity-30 bg-contain bg-no-repeat bg-center invert flex justify-center items-center gap-3 text-center rotate-[70deg] h-[400px] w-[400px]'/>
    <div className='absolute top-[1500px] right-[-100px] bg-[url("/overlay/overlay1.png")] opacity-35 invert  bg-contain bg-no-repeat bg-center flex justify-center items-center gap-3 text-center rotate-[-30deg] h-[400px] w-[400px]'/>
    <div className='absolute top-[2200px] left-[-150px] bg-[url("/overlay/overlay6.png")] opacity-30 invert bg-contain bg-no-repeat bg-center flex justify-center items-center gap-3 text-center rotate-[30deg] h-[400px] w-[400px]'/>
    <div className='absolute top-[3000px] right-[-100px] bg-[url("/overlay/overlay7.png")] opacity-30 invert bg-contain bg-no-repeat bg-center flex justify-center items-center gap-3 text-center rotate-[30deg] h-[500px] w-[500px]'/>
    <div className='absolute top-[3800px] left-[-100px] bg-[url("/overlay/overlay8.png")] opacity-30 invert bg-contain bg-no-repeat bg-center flex justify-center items-center gap-3 text-center rotate-[30deg] h-[500px] w-[500px]'/>
    <div className='absolute top-[4700px] right-[-100px] bg-[url("/overlay/overlay9.png")] opacity-30 invert bg-contain bg-no-repeat bg-center flex justify-center items-center gap-3 text-center rotate-[30deg] h-[500px] w-[500px]'/>
    <div className='absolute top-[5300px] left-[-70px] bg-[url("/overlay/overlay4.png")] opacity-30 invert bg-contain bg-no-repeat bg-center flex justify-center items-center gap-3 text-center rotate-[90deg] h-[500px] w-[500px]'/>
    </div>
    </div>
  );
}