'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
              <Image 
                src={src} 
                alt={title} 
                width={500} 
                height={500} 
                className='rounded-full invert object-cover h-full w-full'
                priority={i < 2}
                loading={i < 2 ? "eager" : "lazy"}
                quality={75}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
              />
            </div>
          </div>
          <div className='absolute top-[40px] right-[40px] w-[40px] h-[40px] rounded-full bg-black'/>
        </div>
      </motion.div>
    </div>
  )
}

export default Card