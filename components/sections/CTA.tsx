'use client';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-r from-brand-yellow to-yellow-600 p-12 rounded-[3rem] text-black flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none mb-4">Ready to sell your car for the best price?</h2>
            <p className="font-medium opacity-90">Join thousands of happy sellers in the Bahamas today.</p>
          </div>
          <button className="bg-black text-white px-10 py-5 rounded-full font-black uppercase text-sm hover:scale-110 transition-transform">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}