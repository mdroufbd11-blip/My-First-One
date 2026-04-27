import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

export default function TheDrop() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="drop" className="py-24 px-6 relative overflow-hidden">
        {/* Animated glitch background effect */}
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_#rebel_1px,_transparent_1px)] bg-[size:40px] animate-pulse" />
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative z-10 border-rebel/30"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-rebel/20 border border-rebel/50 rounded-full text-rebel text-xs font-black tracking-widest mb-8 uppercase">
                <div className="w-2 h-2 bg-rebel rounded-full animate-ping" /> Limited Batch Drop
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter">PARADOX GHOST PEPPER<span className="text-rebel">.</span></h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                The most controversial flavor in our history returns for 48 hours. 
                Sweet, spicy, and purely chaotic. Once it's gone, it's dead.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
                {[
                    { label: 'HOURS', value: timeLeft.hours },
                    { label: 'MINUTES', value: timeLeft.minutes },
                    { label: 'SECONDS', value: timeLeft.seconds }
                ].map((unit) => (
                    <div key={unit.label} className="flex flex-col items-center">
                        <span className="text-5xl md:text-8xl font-display font-black leading-none">{unit.value.toString().padStart(2, '0')}</span>
                        <span className="text-[10px] font-black tracking-[0.3em] opacity-40 mt-4">{unit.label}</span>
                    </div>
                ))}
            </div>

            <div className="max-w-md mx-auto relative">
                <input 
                    type="email" 
                    placeholder="Enter email for early access" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-rebel transition-colors text-white placeholder:text-white/20"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-rebel hover:bg-red-700 text-white px-6 rounded-xl font-bold flex items-center gap-2 transition-colors">
                    <Bell size={18} /> ALERT ME
                </button>
            </div>
            <p className="text-[10px] text-white/30 mt-6 uppercase tracking-widest">Only 50,000 cases available globally. No restocks.</p>
        </motion.div>
    </section>
  );
}
