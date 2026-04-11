'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cars = [
  { id: 1, name: "Range Rover Velar", price: "$72,000", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=500" },
  { id: 2, name: "Porsche 911 GT3", price: "$182,500", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500" },
  { id: 3, name: "Mercedes G-Wagon", price: "$145,000", img: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=500" },
  { id: 4, name: "Audi RS e-tron GT", price: "$98,000", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=500" },
];

export default function CarGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cars.map((car, i) => (
        <motion.div 
          key={car.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="group relative bg-card-bg rounded-3xl p-4 border border-white/5 hover:border-brand-yellow/30 transition-all"
        >
          <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
            <img src={car.img} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-brand-yellow" size={20} />
            </div>
          </div>
          <div className="px-2">
            <h4 className="text-xl font-bold mb-1 tracking-tight">{car.name}</h4>
            <p className="text-brand-yellow font-black text-2xl mb-4">{car.price}</p>
            <button className="w-full py-3 bg-white/5 rounded-xl font-bold group-hover:bg-brand-yellow group-hover:text-black transition-colors">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}