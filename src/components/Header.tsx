'use client';

import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

interface HeaderProps {
  activeBg: 'vg1' | 'vg2';
  onBgChange: (bg: 'vg1' | 'vg2') => void;
}

const Header = ({ activeBg, onBgChange }: HeaderProps) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-full md:w-auto px-4"
    >
      <nav className="flex items-center space-x-4 md:space-x-8 px-6 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-[10px] md:text-sm font-medium tracking-widest uppercase">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white/40">3:30</span>
        </div>
        
        {/* Navigation Items with Video Background Triggers */}
        <button 
          onClick={() => onBgChange('vg1')}
          className={`transition-all duration-500 relative ${activeBg === 'vg1' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
        >
          Day
          {activeBg === 'vg1' && (
            <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white" />
          )}
        </button>
        
        <button 
          onClick={() => onBgChange('vg2')}
          className={`transition-all duration-500 relative ${activeBg === 'vg2' ? 'text-white text-glow-cyan' : 'text-white/30 hover:text-white/60'}`}
        >
          Nights
          {activeBg === 'vg2' && (
            <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white" />
          )}
        </button>

        <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
        
        <a href="#" className="text-white/30 hover:text-white/60 transition-colors hidden md:block">Blonde</a>
        <a href="#" className="text-white/30 hover:text-white/60 transition-colors hidden md:block">Boys Don't Cry</a>
      </nav>
    </motion.header>
  );
};

export default Header;
