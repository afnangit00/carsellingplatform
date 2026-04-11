"use client";
import { useParams } from "next/navigation";
import { CAR_COLLECTION, getWhatsAppLink } from "@/lib/cars";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CarDetailPage() {
  const params = useParams();
  const car = CAR_COLLECTION.find((c) => c.id === Number(params.id));

  if (!car) return <div className="text-white pt-40 text-center">Car not found.</div>;

  return (
    <main className="min-h-screen pt-32 bg-obsidian text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* Left: Cinematic Image Gallery */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <div className="rounded-4xl overflow-hidden border border-white/10 glass">
            <img src={car.image} alt={car.model} className="w-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
             {/* Dynamic placeholders for more angles */}
             <div className="h-24 glass rounded-xl" />
             <div className="h-24 glass rounded-xl" />
             <div className="h-24 glass rounded-xl" />
          </div>
        </motion.div>

        {/* Right: Detailed Information */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Exotic Series</p>
          <h1 className="text-5xl font-black mb-6 uppercase italic">{car.model}</h1>
          <p className="text-3xl text-gold font-bold mb-8">{car.price}</p>
          
          <div className="space-y-6 mb-10">
            <div className="border-b border-white/5 pb-4 flex justify-between">
              <span className="text-silver/50">Engine</span>
              <span className="font-bold">{car.specs}</span>
            </div>
            <div className="border-b border-white/5 pb-4 flex justify-between">
              <span className="text-silver/50">Transmission</span>
              <span className="font-bold">Dual-Clutch 8-Speed</span>
            </div>
            <div className="border-b border-white/5 pb-4 flex justify-between">
              <span className="text-silver/50">0-100 km/h</span>
              <span className="font-bold text-gold">2.9 Seconds</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild size="lg" className="flex-1 bg-gold text-obsidian font-black uppercase italic">
              <a href={getWhatsAppLink(car.model)}>Buy via WhatsApp</a>
            </Button>
            <Button variant="outline" size="lg" className="flex-1">Download Brochure</Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}