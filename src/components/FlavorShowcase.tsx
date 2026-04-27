import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const FLAVORS = [
  {
    id: 'original',
    name: 'The Original',
    desc: 'Spicy, mysterious, and effortlessly cool. The drink that started the rebellion.',
    color: 'bg-burgundy',
    tag: 'OG CLASSIC'
  },
  {
    id: 'midnight',
    name: 'Midnight Cherry',
    desc: 'Dark cherry collision with an electric spice finish. For the night owls.',
    color: 'bg-purple-900',
    tag: 'BEST SELLER'
  },
  {
    id: 'zero',
    name: 'Paradox Zero',
    desc: 'Zero sugar, zero compromise. All the spices, none of the baggage.',
    color: 'bg-zinc-900',
    tag: 'ZERO GUILT'
  },
  {
    id: 'fire',
    name: 'Ghost Pepper',
    desc: 'A limited edition bite. Sweet heat that lingers. Not for the weak.',
    color: 'bg-rebel',
    tag: 'LIMITED DROP'
  }
];

export default function FlavorShowcase() {
  return (
    <section id="vault" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">The Vault<span className="text-rebel">.</span></h2>
            <p className="text-white/50 max-w-lg">Choose your side. From our cryptic classics to limited-batch drops, every flavor is a statement.</p>
          </div>
          <button className="text-rebel font-bold uppercase tracking-widest flex items-center gap-2 group">
            View All Packs <div className="w-8 h-8 rounded-full border border-rebel flex items-center justify-center group-hover:bg-rebel group-hover:text-white transition-all"><Plus size={16} /></div>
          </button>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar">
          {FLAVORS.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`min-w-[320px] md:min-w-[400px] aspect-[4/5] ${flavor.color} rounded-[3rem] p-8 flex flex-col justify-between snap-center relative overflow-hidden group`}
            >
              {/* Background dynamic texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-black tracking-widest mb-4">{flavor.tag}</span>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{flavor.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">{flavor.desc}</p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-tighter">Starts at</span>
                  <span className="text-2xl font-display font-bold">$18.99 <span className="text-xs text-white/50">/ 12pack</span></span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-rebel hover:text-white transition-colors"
                >
                  <Plus size={24} />
                </motion.button>
              </div>

              {/* Minimal "Can" graphic placeholder */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-80 bg-black/20 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
