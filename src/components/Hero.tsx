import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burgundy/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rebel/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold tracking-[0.2em] text-rebel mb-6 uppercase"
          >
            Taste the Rebellion
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-8 text-gradient">
            UNAPOLO<br/>GETICALLY<br/>MISUN<br/>DERSTOOD<span className="text-rebel">.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            The legendary blend of 23 cryptic spices. Bold enough to be loved, 
            weird enough to be obsessed over. Zero boring moments, guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-rebel px-8 py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 text-lg shadow-2xl shadow-rebel/40"
            >
              Stock Your Fridge <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass px-8 py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 text-lg"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={16} className="fill-white" />
              </div>
              The Lore
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          {/* Subtle Glow behind the product */}
          <div className="absolute inset-0 bg-rebel/30 blur-[100px] rounded-full scale-75" />
          
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-full max-w-[400px] drop-shadow-[0_35px_35px_rgba(217,4,41,0.3)]"
          >
            {/* Placeholder Visual for the 3D Can */}
            <div className="aspect-[2/3] bg-gradient-to-b from-burgundy to-black rounded-[4rem] border-4 border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-40 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <h2 className="text-6xl font-display font-black tracking-tighter mb-2">PARDX</h2>
                    <div className="w-full h-1 bg-rebel my-4" />
                    <p className="text-xs tracking-[0.4em] font-bold opacity-60">ORIGINAL REBELLION</p>
                </div>
                {/* Condensation simulation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:12px_12px]" />
            </div>
          </motion.div>

          {/* Floaters */}
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-24 h-24 glass rounded-3xl rotate-12 flex items-center justify-center p-4"
          >
             <span className="text-xs font-bold text-center leading-tight">23 SECRET SPICES</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-12 -left-10 w-32 h-32 glass rounded-full rotate-[-15deg] flex flex-col items-center justify-center p-4"
          >
             <span className="text-xs font-black text-rebel">ZERO</span>
             <span className="text-[10px] font-bold opacity-50">MAIN STREAM</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
