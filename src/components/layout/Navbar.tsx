"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, CodeBracketIcon, CpuChipIcon, AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import {HeartIcon} from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = navRef.current?.offsetHeight || 0;
    
    // Function to check which section is at navbar position
    const checkSectionInView = () => {
      const scrollPosition = window.scrollY + navHeight + 20; // Adding some offset

      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    // Initial check
    checkSectionInView();

    // Add scroll event listener
    window.addEventListener('scroll', checkSectionInView);

    return () => {
      window.removeEventListener('scroll', checkSectionInView);
    };
  }, []);

  const getNavbarStyle = () => {
    switch (activeSection) {
      case 'fadingText':
        return 'bg-gradient-to-r from-orange-500 to-green-500 text-white hover:shadow-2xl hover:shadow-orange-500';
      case 'imageShowcase':
        return 'bg-gradient-to-r from-stone-900 to-yellow-900 border-transparent text-white hover:shadow-2xl hover:shadow-yellow-900';
      case 'technologies':
        return 'bg-yellow-500 border-white hover:shadow-2xl hover:shadow-[#a855f7] border-2';
      case 'about-section':
        return 'bg-green-500 border-white text-white hover:shadow-2xl hover:shadow-[#a855f7] border-2';
      case 'services':
        return 'bg-blue-500 border-white text-white hover:shadow-2xl hover:shadow-[#a855f7] border-2';
      default:
        return 'bg-white border-[#a855f7] hover:shadow-2xl hover:shadow-[#a855f7] border-2';
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="flex flex-col items-center fixed w-full top-5 z-[9999]">
      <nav className={`${getNavbarStyle()} transition-all duration-300 rounded-full px-6 flex items-center justify-between w-[400px]`}>
        <Link href="/" className={`text-xl font-bold flex items-center py-3 ${activeSection === 'hero' ? 'text-[#a855f7]' : ''}`}>
          <HeartIcon className="w-6 h-6 hover:scale-110 transition-all duration-300" />
          <span className="text-2xl"></span>
        </Link>

        {/* Menu Button */}
        <button
          className="w-8 h-8 ml-6 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-5 h-2 flex flex-col justify-between">
              <div className={`w-full h-0.5 ${activeSection === 'hero' ? 'bg-[#a855f7]' : 'bg-current'} transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 ${activeSection === 'hero' ? 'bg-[#a855f7]' : 'bg-current'} transition-all ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
            </div>
          </div>
        </button>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-4 absolute top-12 bg-white border-2 border-[#a855f7] shadow-2xl shadow-[#a855f7] rounded-3xl py-6 px-8 min-w-[400px]"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="#home" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <HomeIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="#about" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <UserIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="#experience" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <BriefcaseIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="#projects" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <CodeBracketIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="#technologies" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <CpuChipIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="#certifications" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                Certifications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <AcademicCapIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="#contact" 
              className="text-[#a855f7] group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <EnvelopeIcon className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}