"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [textColor, setTextColor] = useState('text-black');

  // Function to check background color and adjust text color
  useEffect(() => {
    const handleScroll = () => {
      const pixels = window.pageYOffset;
      const currentSection = Math.floor(pixels / window.innerHeight);
      
      // You can adjust these breakpoints based on your sections
      if (currentSection === 0) { // Hero section
        setTextColor('text-white');
      } else if (currentSection === 1) { // Second section
        setTextColor('text-black');
      } else {
        setTextColor('text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full backdrop-blur-sm z-[9999] transition-colors duration-300 ${textColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="block w-5 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative">
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded group relative"
      onClick={onClick}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
}