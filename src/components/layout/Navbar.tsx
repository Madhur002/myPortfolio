"use client"
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, CpuChipIcon, EnvelopeIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 }; // Adjust this value if needed

    const observer = new IntersectionObserver((entries) => {
      console.log("entries",entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set navbar background color based on the section's ID
          switch (entry.target.id) {
            case "hero":
              setActiveSection("hero"); // Default color
              break;
            case "fadingText":
              setActiveSection("fadingText");
              break;
            case "imageShowcase":
              setActiveSection("imageShowcase");
              break;
            default:
              setActiveSection("hero");
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  // useEffect(() => {
  //   const sections = document.querySelectorAll('section[id]');
  //   const navHeight = navRef.current?.offsetHeight || 0;
    
  //   const checkSectionInView = () => {
  //     console.log("window.scrollY",window.scrollY);
  //     const scrollPosition = window.scrollY + navHeight + 20;

  //     sections.forEach((section: any) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;
        
  //       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
  //         setActiveSection(section.id);
  //       }
  //     });
  //   };

  //   checkSectionInView();

  //   let ticking = false;
  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         checkSectionInView();
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  const getNavbarStyle = () => {
    switch (activeSection) {
      case 'hero':
        return 'bg-white border-[#a855f7] hover:shadow-2xl hover:shadow-[#a855f7] border-2';
      case 'fadingText':
        return 'bg-red-500 border-red-700 hover:shadow-2xl hover:shadow-red-700 border-2';
      case 'imageShowcase':
        return 'bg-green-500 border-green-700 hover:shadow-2xl hover:shadow-green-700 border-2';
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
    <>
      <div ref={navRef} className="flex flex-col items-center fixed w-full top-5 z-[9999]">
        <nav className={`${getNavbarStyle()} transition-all duration-300 h-12 rounded-full px-6 flex items-center justify-between w-[400px]`}>
          <Link href="/" className={`text-xl font-bold flex items-center py-3 ${
            activeSection === 'hero' ? 'text-[#a855f7]' : 
            activeSection === 'fadingText' ? 'text-red-700' :
            activeSection === 'imageShowcase' ? 'text-green-700' : 'text-[#a855f7]'
          }`}>
            <FaHeart 
              className={`w-6 h-6 ${
                activeSection === 'hero' ? 'text-[#a855f7]' : 
                activeSection === 'fadingText' ? 'text-red-700' :
                activeSection === 'imageShowcase' ? 'text-green-700' : 'text-[#a855f7]'
              } hover:scale-110 transition-all duration-300 cursor-pointer`}
            />
            <span className="text-2xl"></span>
          </Link>

          <button
            className="w-8 h-8 ml-6 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`text-current w-full h-0.5 ${
                activeSection === 'hero' ? 'bg-[#a855f7]' : 
                activeSection === 'fadingText' ? 'bg-red-700' :
                activeSection === 'imageShowcase' ? 'bg-green-700' : 'bg-[#a855f7]'
              } transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`text-current w-full h-0.5 ${
                activeSection === 'hero' ? 'bg-[#a855f7]' : 
                activeSection === 'fadingText' ? 'bg-red-700' :
                activeSection === 'imageShowcase' ? 'bg-green-700' : 'bg-[#a855f7]'
              } transition-all ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
            </div>
          </button>
        </nav>

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
    </>
  );
}