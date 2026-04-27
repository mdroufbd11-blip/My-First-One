import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white/5 mb-8">PARADOX</h2>
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-rebel">Join the Paradox Syndicate</h3>
              <p className="text-white/40 mb-8 leading-relaxed">
                Be the first to know about cryptic drops, secret flavor codes, and the inevitable spice uprising.
              </p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="The Underground Email" 
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 focus:outline-none focus:border-rebel transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-rebel hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-white/30">The Vault</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-rebel transition-colors">Core Flavors</a></li>
              <li><a href="#" className="hover:text-rebel transition-colors">Limited Editions</a></li>
              <li><a href="#" className="hover:text-rebel transition-colors">Variety Packs</a></li>
              <li><a href="#" className="hover:text-rebel transition-colors">Merch Stash</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-white/30">Support</h4>
            <ul className="space-y-4 font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Shipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Rebellion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5 opacity-40 text-xs font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <span>© 2026 Paradox Beverage Co.</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-rebel transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-rebel transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-rebel transition-colors"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
