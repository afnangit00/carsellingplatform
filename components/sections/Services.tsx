"use client";
import { motion } from "framer-motion";
import { Shield, Globe, Crown } from "lucide-react";

const services = [
  {
    title: "Luxury Detailing",
    desc: "Preserving the showroom finish with aerospace-grade ceramic coatings.",
    icon: Shield,
    className: "md:col-span-1"
  },
  {
    title: "Global Shipping",
    desc: "Door-to-door enclosed transport to any corner of the world, fully insured.",
    icon: Globe,
    className: "md:col-span-1"
  },
  {
    title: "VIP Concierge",
    desc: "Exclusive access to private viewings and bespoke customization consultations.",
    icon: Crown,
    className: "md:col-span-1"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic">
          Bespoke <span className="text-gold">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-10 rounded-4xl flex flex-col justify-between hover:border-gold/30 transition-colors duration-500 group ${service.className}`}
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                <service.icon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-silver/50 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}