'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Headphones } from 'lucide-react';

const features = [
  { icon: <ShieldCheck />, title: "Trusted Agency", desc: "Most reliable car marketplace in the region." },
  { icon: <Zap />, title: "Instant Valuation", desc: "Get your car's worth in seconds." },
  { icon: <Globe />, title: "Global Standards", desc: "International quality service and transparency." },
  { icon: <Headphones />, title: "24/7 Support", desc: "Expert assistance whenever you need it." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Split Image Design */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-125 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="bg-brand-yellow" />
            <div className="bg-zinc-900" />
          </div>
          <img 
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000" 
            className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            alt="Sports Car"
          />
        </motion.div>

        {/* Right Side: Features */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-black uppercase italic">Why <span className="text-brand-yellow">Choose Us?</span></h2>
            <p className="text-gray-400">Everything we do is designed to make your experience smooth and secure.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <div className="text-brand-yellow">{f.icon}</div>
                <h4 className="text-lg font-bold uppercase tracking-tighter">{f.title}</h4>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}