"use client"
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
// Import Navbar only if the file exists and is properly exported
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'), { ssr: true });
const Footer = dynamic(() => import('./Footer'), { ssr: true });
// import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
} 