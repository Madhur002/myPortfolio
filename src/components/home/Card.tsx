'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, url, color, progress, range, targetScale}: any) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className="cardContainer z-20">
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className="card backdrop-blur-xl"
      >
        <h2>{title}</h2>
      </motion.div>
    </div>
  )
}

export default Card