'use client';

import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="z-20 w-full mb-8 lg:mb-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <span className="px-3 py-1 text-[10px] tracking-[0.3em] border border-white/20 rounded-full text-white/50 uppercase">
          Track 10: Nights
        </span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl lg:text-9xl font-sans tracking-tighter mb-4 font-bold"
      >
        NIGHTS<span className="text-blonde-orange text-glow-blonde">.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-white/40 font-light tracking-widest uppercase leading-relaxed max-w-xl"
      >
        Every night fucks every day up<br />
        Every day patches the night up
      </motion.p>
    </div>
  );
};

export default HeroContent;
