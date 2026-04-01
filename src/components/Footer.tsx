'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 z-20 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-white/20"
    >
      <p>Blonde by Frank Ocean</p>
      <p>&copy; 2016-2025</p>
    </motion.div>
  );
};

export default Footer;
