import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import FadingText from '@/components/home/FadingText';
import ImageShowcase from '@/components/home/ImageShowcase';
import Technologies from '@/components/home/Technologies';

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <FadingText />
      {/* <ImageShowcase /> */}
      <Technologies />
      {/* <About/> */}
      {/* <Services/> */}
    </Layout>
  );
}
