
import Collection from "@/components/sections/Collection";
import { CAR_COLLECTION } from "@/lib/cars";
// import CollectionGrid from "@/components/Collection"; // Use the component we built


export default function CollectionPage() {
  return (
    <main className="pt-24 min-h-screen bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-black italic uppercase mb-4">The <span className="text-gold">Inventory</span></h1>
        <p className="text-silver/50 mb-12">Explore our curated selection of high-performance machinery.</p>
        
        {/* Reuse your existing Collection component logic here */}
        <Collection />
      </div>
    </main>
  );
}