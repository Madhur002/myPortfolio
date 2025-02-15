'use client';

import Layout from '@/components/layout/Layout';
import Lenis from 'lenis';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Hero = dynamic(() => import('@/components/home/Hero'), {
  loading: () => <div>Loading...</div>,
});

const FadingText = dynamic(() => import('@/components/home/FadingText'), {
  loading: () => <div>Loading...</div>,
});

const ImageShowcase = dynamic(() => import('@/components/home/ImageShowcase'), {
  loading: () => <div>Loading...</div>,
});

const Services = dynamic(() => import('@/components/home/Services'), {
  loading: () => <div>Loading...</div>,
});


export default function Home() {
  
  useEffect( () => {
    const lenis = new Lenis()
  
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  })
  return (
    <main className="relative">
      <Layout>
        <section id="hero" className="h-screen">
          <Hero />
        </section>
        <div className="sticky-sections">
          <section id="fadingText" className="h-screen">
            <FadingText />
          </section>
          <section id="imageShowcase" className="h-screen">
            <ImageShowcase />
          </section>
        </div>
        {/* <section className="bg-[#01010d] min-h-screen backdrop-blur-xl bg-cover bg-center">
          <Services />
        </section> */}
        <section className="bg-[url('/wallpaper/wall19.jpg')] bg-contain bg-center min-h-screen sticky-sections-projects backdrop-blur-xl">
          <Services />
        </section>
        <section className="bg-[#01010d] min-h-screen">

        </section>
      </Layout>
    </main>
  );
}
