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
        <section className="h-screen">
          <Hero />
        </section>
        <div className="sticky-sections">
          <section id='fadingText' className="h-screen">
            <FadingText />
          </section>
          <div id="imageShowcase" className="parallax-sections">
            <ImageShowcase />
          </div>
        </div>
            <About />
            <Services />
            <Technologies />
      </Layout>
    </main>
  );
}
