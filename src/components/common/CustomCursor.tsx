"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      try {
        if (target && target?.classList && target?.classList?.contains('hovered-mouse')) {
          setIsHovered(true);
          setCursorText(target.getAttribute('data-cursor-text') || '');
        }
      } catch (error) {
        console.log('Mouse over error:', error);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      try {
        if (target && target?.classList && target?.classList?.contains('hovered-mouse')) {
          setIsHovered(false);
          setCursorText('');
        }
      } catch (error) {
        console.log('Mouse out error:', error);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed flex items-center justify-center bg-purple-500 rounded-full pointer-events-none"
      style={{ zIndex: 99999999 }}
      animate={{
        x: mousePosition.x - (isHovered ? 40 : 8),
        y: mousePosition.y - (isHovered ? 40 : 8),
        width: isHovered ? 80 : 16,
        height: isHovered ? 80 : 16,
      }}
      transition={{
        type: "spring",
        damping: 30,
        mass: 0.5,
        stiffness: 400
      }}
    >
      {isHovered && cursorText && (
        <span className="text-white text-sm whitespace-nowrap">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
} 