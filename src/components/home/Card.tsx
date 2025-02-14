'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Card = ({ i, title, description, src, url, color, progress, range, targetScale, tags }: any) => {

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
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)`, backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="card invert"
      >
        <div className='w-full h-full bg-yellow-500/10 backdrop-blur-xl p-10'>
          <div className='flex gap-10 h-full'>
            <div className='w-1/2 flex flex-col gap-6 justify-between'>
              <div className='flex flex-col gap-6 justify-start items-start'>
              <h2 className='text-black text-4xl font-bold'>{title}</h2>
              <p className='text-black/70 text-xl'>{description}</p>
              </div>
              <div className='flex gap-2 flex-wrap justify-start items-center'>
              {
                tags.map( (tag: any) => {
                  return <div key={tag} className='text-black/70 bg-white/50 min-w-[100px] text-center px-4 backdrop-blur-xl p-2 rounded-full text-lg'>{tag}</div>
                })
              }
              </div>
            </div>
            <div className='w-1/2 h-full relative'>
              <Image src={src} alt={title} fill className='rounded-full invert object-cover h-full w-full' />
            </div>
          </div>
          <div className='absolute top-[40px] right-[40px] w-[40px] h-[40px] rounded-full bg-black'/>
        </div>
      </motion.div>
    </div>
  )
}

export default Card