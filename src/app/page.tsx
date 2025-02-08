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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3.5 }}
    >
      <Layout>
        <Hero/>
        <FadingText />
        <ImageShowcase />
        <Technologies />
        <About/>
        <Services/>
      </Layout>
    </motion.div>
  );
}
