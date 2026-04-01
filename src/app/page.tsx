'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import HeroContent from '../components/HeroContent';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  const [activeBg, setActiveBg] = useState<'vg1' | 'vg2'>('vg1');

  const vg1Src = '/assets/vg1.mp4';
  const vg2Src = '/assets/vg2.mp4';

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white font-sans bg-black">
      {/* Premium Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Video Backgrounds Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <AnimatePresence mode="wait">
          {activeBg === 'vg1' && (
            <motion.video
              key="vg1"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            >
              <source src={vg1Src} type="video/mp4" />
            </motion.video>
          )}

          {activeBg === 'vg2' && (
            <motion.video
              key="vg2"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            >
              <source src={vg2Src} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 flex flex-col h-screen p-6 md:p-12 lg:px-24 w-full">
        <Header activeBg={activeBg} onBgChange={setActiveBg} />

        {/* Bottom Content Area */}
        <div className="mt-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-end pb-24 pointer-events-none">
            {/* Set pointer-events-auto on interactive children so buttons still work */}
            <div className="pointer-events-auto w-full">
              <HeroContent />
            </div>
            <div className="pointer-events-auto w-full">
              <CallToAction />
            </div>
          </div>
          
          {/* Subtle horizontal divider line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
            className="w-full h-[1px] bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-16"
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}
