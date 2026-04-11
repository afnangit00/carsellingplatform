'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: "John Doe", role: "Car Seller", text: "Amazing experience! Sold my Range Rover in just 24 hours.", stars: 5 },
  { name: "Sarah Smith", role: "Premium Buyer", text: "The inspection process was very professional and transparent.", stars: 5 },
  { name: "Mike Ross", role: "Investor", text: "Fair pricing and instant bank transfer. Highly recommended!", stars: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center uppercase italic mb-16">Customer <span className="text-brand-yellow">Experiences</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-card-bg p-8 rounded-3xl border border-white/5 relative"
            >
              <div className="flex text-brand-yellow mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-6">"{r.text}"</p>
              <div>
                <h5 className="font-bold">{r.name}</h5>
                <p className="text-xs text-brand-yellow uppercase font-bold tracking-widest">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}