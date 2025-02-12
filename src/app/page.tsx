'use client';

import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Hero = dynamic(() => import('@/components/home/Hero'), {
  loading: () => <div>Loading...</div>,
});

const FadingText = dynamic(() => import('@/components/home/FadingText'), {
  loading: () => <div>Loading...</div>,
});

const ImageShowcase = dynamic(() => import('@/components/home/ImageShowcase'), {
  loading: () => <div>Loading...</div>,
});

const Technologies = dynamic(() => import('@/components/home/Technologies'), {
  loading: () => <div>Loading...</div>,
});

const About = dynamic(() => import('@/components/home/About'), {
  loading: () => <div>Loading...</div>,
});

const Services = dynamic(() => import('@/components/home/Services'), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
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
