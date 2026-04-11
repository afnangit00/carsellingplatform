'use client';
import { motion } from 'framer-motion';
import { Car, Search, ClipboardCheck, Wallet } from 'lucide-react';

const steps = [
  { icon: <Search size={32} />, title: "Valuation", desc: "Get an instant online valuation for your vehicle." },
  { icon: <ClipboardCheck size={32} />, title: "Inspection", desc: "Book a free inspection at your preferred location." },
  { icon: <Car size={32} />, title: "Approval", desc: "Receive a final competitive offer from our experts." },
  { icon: <Wallet size={32} />, title: "Get Paid", desc: "Complete the sale and get paid instantly." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic mb-4">How It Works</h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-card-bg flex items-center justify-center rounded-2xl border border-white/10 mb-6 group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}