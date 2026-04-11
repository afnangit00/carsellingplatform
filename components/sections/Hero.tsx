'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070" 
          className="w-full h-full object-cover scale-110"
          alt="Premium Car"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-16 items-center pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Premium Service</span>
          <h1 className="text-6xl lg:text-8xl font-black leading-none my-6 uppercase italic">
            Sell Your Car <br /> <span className="text-brand-yellow">The Smarter Way</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
            The #1 marketplace for car sales in Bahamas. Quick inspections, fair pricing, and instant payments.
          </p>
        </motion.div>

        {/* Lead Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card-bg/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-tighter">List Your Car Today</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Make" className="w-full p-4 bg-black/50 rounded-xl border border-white/10 focus:border-brand-yellow outline-none transition" />
              <input type="text" placeholder="Model" className="w-full p-4 bg-black/50 rounded-xl border border-white/10 focus:border-brand-yellow outline-none transition" />
            </div>
            <input type="number" placeholder="Year" className="w-full p-4 bg-black/50 rounded-xl border border-white/10 focus:border-brand-yellow outline-none transition" />
            <input type="email" placeholder="Your Email" className="w-full p-4 bg-black/50 rounded-xl border border-white/10 focus:border-brand-yellow outline-none transition" />
            <button className="w-full py-5 bg-brand-yellow text-black font-black uppercase rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,193,7,0.3)]">
              Get an Instant Offer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}