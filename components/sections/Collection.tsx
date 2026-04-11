"use client";
import { motion } from "framer-motion";
import { CAR_COLLECTION, getWhatsAppLink } from "@/lib/cars";
import { Card } from "../ui/card"; // Use Shadcn card   
import { Button } from "../ui/button";


export default function Collection() {
  return (
    <section id="collection" className="py-24 px-6 cinematic-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Curated Masterpieces</h2>
          <p className="text-silver/60 max-w-lg mx-auto">A selection of rare, high-performance vehicles, engineered without compromise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CAR_COLLECTION.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Ultra look interaction
            >
              <Card className="glass overflow-hidden rounded-2xl p-6 border-none group cursor-pointer">
                <div className="aspect-16/10 overflow-hidden rounded-xl mb-6">
                  <img src={car.image} alt={car.model} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{car.model}</h3>
                    <p className="text-sm text-silver/50 mt-1">{car.specs}</p>
                  </div>
                  <div className="text-lg font-bold text-gold">{car.price}</div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-xl border-white/10 text-white hover:bg-white/5">
                    View Details
                  </Button>
                  <Button asChild className="flex-1 rounded-xl bg-gold text-obsidian hover:bg-gold/80 font-bold">
                    <a href={getWhatsAppLink(car.model)} target="_blank" rel="noopener noreferrer">
                      Buy Now
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}