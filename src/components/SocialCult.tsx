import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

const UGC_CARDS = [
  { id: 1, type: 'video', author: '@rebeldripper', content: 'Unsplash Placeholder', size: 'h-80', url: 'https://images.unsplash.com/photo-1541535881962-e668f38d4a3e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, type: 'post', author: '@midnight_snax', content: 'Paradox & Pizza. Night saved.', size: 'h-64', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400' },
  { id: 3, type: 'video', author: '@dr_paradox_fan', content: 'Secret spice leak?', size: 'h-96', url: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=400' },
  { id: 4, type: 'post', author: '@sk8_rebel', content: 'Session fuel.', size: 'h-72', url: 'https://images.unsplash.com/photo-1520116467521-81b47002544b?auto=format&fit=crop&q=80&w=400' },
];

export default function SocialCult() {
  return (
    <section className="py-24 px-6 bg-burgundy/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">The Cult of Paradox<span className="text-rebel">.</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">They said it was too weird. We said they weren't ready. Join the underground movement.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {UGC_CARDS.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl overflow-hidden glass mb-6 ${card.size}`}
            >
              <img 
                src={card.url} 
                alt={card.author} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-display uppercase tracking-widest">{card.author}</span>
                  <div className="flex gap-2 text-white/40">
                    <Instagram size={14} />
                    <Youtube size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-onyx bg-burgundy overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-onyx bg-rebel flex items-center justify-center font-bold text-xs">
                    +1M
                </div>
            </div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase">Join the Misunderstood</p>
        </div>
      </div>
    </section>
  );
}
