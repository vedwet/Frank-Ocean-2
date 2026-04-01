'use client';

import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className="z-20 w-full lg:max-w-md lg:justify-self-end flex flex-col justify-end lg:items-end text-left lg:text-right">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-8"
      >
        <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all font-bold tracking-widest uppercase text-xs">
          Listen to Blonde
        </button>
      </motion.div>

      <div className="space-y-4 text-white/40 text-xs font-medium tracking-widest uppercase leading-relaxed w-full">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          All my night, been ready for you all my night<br />
          Been waiting for you all my night
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          I'll settle for a ghost, I'll settle for a leaf<br />
          Tell me it's no point in being grateful
        </motion.p>
      </div>
    </div>
  );
};

export default CallToAction;
