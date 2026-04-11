'use client';
import {  Mail, Phone, MapPin } from 'lucide-react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-black text-brand-yellow mb-6 italic uppercase">Bilal Agency</h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            The premium destination for luxury vehicles in Bahamas. Trusted by thousands for fair deals and expert service.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-yellow"><FaFacebook size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-yellow"><BsInstagram size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-yellow"><BsTwitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase text-sm mb-6 tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-white">Inventory</a></li>
            <li><a href="#" className="hover:text-white">Sell Your Car</a></li>
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-sm mb-6 tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} /> +1 (242) 555-0123</li>
            <li className="flex items-center gap-3"><Mail size={16} /> sales@bilalagency.in</li>
            <li className="flex items-center gap-3"><MapPin size={16} /> Nassau, Bahamas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-sm mb-6 tracking-widest">Newsletter</h4>
          <p className="text-xs text-gray-500 mb-4">Subscribe for latest inventory updates.</p>
          <div className="flex bg-white/5 rounded-xl overflow-hidden border border-white/10 p-1">
            <input type="email" placeholder="Email" className="bg-transparent px-4 py-2 outline-none text-sm w-full" />
            <button className="bg-brand-yellow text-black font-bold px-4 py-2 rounded-lg text-xs uppercase">Join</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-10 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs">© 2026 Bilal Agency. Created for Afnan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}