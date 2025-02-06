"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, CodeBracketIcon, CpuChipIcon, AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import {HeartIcon} from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center fixed w-full top-5 z-[9999]">
      <nav className="bg-black rounded-full px-6 flex items-center justify-between w-[400px]">
        <Link href="/" className="text-xl font-bold text-white flex items-center py-3">
          {/* Replace with your logo */}
          <HeartIcon className="w-6 h-6" />
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
              <div className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
              {/* <div className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div> */}
              <div className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
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
          className="mt-4 bg-black rounded-3xl py-6 px-8 min-w-[400px]"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="#home" 
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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
              className="text-white group flex items-center justify-between hover:text-purple-500 transition-colors text-lg relative"
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