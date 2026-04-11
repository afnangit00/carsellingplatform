"use client";
import { motion } from "framer-motion";
import { Input } from "../ui/input"; // Use Shadcn input
import { Textarea } from "../ui/textarea"; // Use Shadcn textarea
import { Button } from "../ui/button"; // Use Shadcn button
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 cinematic-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-10 md:p-16 rounded-[3rem]"
          >
            <h2 className="text-4xl font-black mb-4 italic uppercase">Get In Touch</h2>
            <p className="text-silver/50 mb-10">Schedule a private viewing or inquire about a vehicle.</p>
            
            <form action="https://formspree.io/f/your-id" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="name" placeholder="Full Name" className="bg-white/5 border-white/10 h-14 rounded-xl" />
                <Input name="email" type="email" placeholder="Email" className="bg-white/5 border-white/10 h-14 rounded-xl" />
              </div>
              <Textarea name="message" placeholder="Message" className="bg-white/5 border-white/10 min-h-37.5 rounded-xl" />
              <Button className="w-full h-14 bg-gold text-obsidian font-black uppercase italic rounded-xl hover:bg-gold/80">
                Send Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Map Integration */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-[3rem] overflow-hidden grayscale contrast-125 border border-white/5 min-h-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173114032!2d75.7600!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x321596f5473f3516!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712750000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}