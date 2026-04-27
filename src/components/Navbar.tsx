import { motion } from 'motion/react';
import { Menu, X, ShoppingCart, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="font-display text-2xl font-bold tracking-tighter text-white">
            PARADOX<span className="text-rebel">.</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#vault" className="hover:text-white transition-colors">The Vault</a>
          <a href="#drop" className="hover:text-white transition-colors">The Drop</a>
          <a href="#hunt" className="hover:text-rebel flex items-center gap-1 transition-colors">
            <MapPin size={14} /> Hunt It Down
          </a>
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-rebel px-5 py-2 rounded-xl text-sm font-bold uppercase tracking-tight hover:bg-red-700 transition-colors shadow-lg shadow-rebel/20"
          >
             Stock Your Fridge
          </motion.button>
          
          <button className="relative p-2 text-white/80 hover:text-white transition-colors">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-rebel text-[10px] flex items-center justify-center rounded-full border-2 border-onyx">2</span>
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-6 text-lg font-display uppercase tracking-widest"
        >
          <a href="#vault" onClick={() => setIsOpen(false)}>The Vault</a>
          <a href="#drop" onClick={() => setIsOpen(false)}>The Drop</a>
          <a href="#hunt" onClick={() => setIsOpen(false)}>Hunt It Down</a>
          <button className="w-full bg-rebel py-4 rounded-xl font-bold">Stock Your Fridge</button>
        </motion.div>
      )}
    </nav>
  );
}
