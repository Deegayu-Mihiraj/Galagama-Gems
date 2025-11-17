import { useState } from 'react';
import { motion } from 'motion/react';

interface NavLinkProps {
  label: string;
}

export function NavLink({ label }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white transition-colors">
        {label}
      </span>
      
      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 origin-center"
      />
    </div>
  );
}
