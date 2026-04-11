'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000" 
            alt="About Luxury Car" 
            className="rounded-3xl shadow-2xl"
          />
          {/* Decorative Floating Card */}
          <div className="absolute -bottom-10 -right-10 bg-brand-yellow p-8 rounded-2xl text-black hidden md:block">
            <p className="text-4xl font-black">10+</p>
            <p className="font-bold uppercase text-xs">Years Experience</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-black uppercase italic leading-none">
            Why Choose <span className="text-brand-yellow">Bilal Agency?</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We are the most trusted car marketplace in the Bahamas. Our mission is to simplify the car buying and selling process through technology and transparency.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-white/5 rounded-xl border-l-4 border-brand-yellow">
              <h4 className="font-bold mb-1">Fast Service</h4>
              <p className="text-xs text-gray-500">Sell within 24 hours.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border-l-4 border-brand-yellow">
              <h4 className="font-bold mb-1">Secure Payments</h4>
              <p className="text-xs text-gray-500">Direct bank transfers.</p>
            </div>
          </div>
          <button className="px-10 py-4 bg-white text-black font-black uppercase rounded-full hover:bg-brand-yellow transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}