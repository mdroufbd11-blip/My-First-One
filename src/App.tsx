/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorShowcase from './components/FlavorShowcase';
import TheDrop from './components/TheDrop';
import SocialCult from './components/SocialCult';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen max-w-[100vw] overflow-x-hidden font-sans">
      <Navbar />
      
      <main>
        {/* Entrance Animation Wrap */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
        >
          <Hero />
          <FlavorShowcase />
          
          {/* Section Divider - Bold Text Row */}
          <div className="bg-rebel py-4 overflow-hidden whitespace-nowrap">
            <motion.div 
               animate={{ x: [0, -1000] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="flex gap-12 text-white font-display font-black text-2xl tracking-[0.5em] uppercase"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i}>Unapologetically Misunderstood • 23 Cryptic Spices • Taste the Rebellion •</span>
              ))}
            </motion.div>
          </div>

          <TheDrop />
          
          {/* Brand Story / Lore Moment */}
          <section className="py-32 px-6 flex items-center justify-center relative bg-gradient-to-b from-onyx to-black">
             <div className="max-w-4xl text-center">
                <motion.span 
                  whileInView={{ opacity: [0,1], y: [20,0] }}
                  className="text-rebel font-black tracking-widest text-xs uppercase mb-8 inline-block"
                >
                  Est. 1923 - The Mystery Continues
                </motion.span>
                <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">THE ONLY THING MORE REBELLIOUS THAN THE TASTE IS THE FACT YOU CAN'T STOP DRINKING IT<span className="text-rebel">.</span></h2>
                <p className="text-white/40 text-xl md:text-2xl font-light italic">"It's like a spiced cola from another dimension that actually respects your taste buds." — Random Paradox Fan</p>
             </div>
          </section>

          <SocialCult />
        </motion.div>
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-40"
      >
        <button className="w-full bg-rebel text-white py-5 rounded-2xl font-bold shadow-2xl shadow-rebel/40 flex items-center justify-center gap-2">
            HUNT A COLD 12-PACK
        </button>
      </motion.div>
    </div>
  );
}
