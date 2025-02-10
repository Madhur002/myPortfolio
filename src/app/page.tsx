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
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <div className="sticky-sections">
          <section id="fadingText" className="min-h-screen">
            <FadingText />
          </section>
          <section id="imageShowcase" className="min-h-screen parallax-sections">
            <ImageShowcase />
          </section>
        </div>
        {/* <section id="about" className="min-h-screen mt-[50vh]">
          <About />
        </section>
        <section id="services" className="min-h-screen">
          <Services />
        </section>
        <section id="technologies" className="min-h-screen">
          <Technologies />
        </section> */}
      </Layout>
    </main>
  );
}
