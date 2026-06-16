import { motion } from "framer-motion";
import { BadgeCheck, Clock3, RotateCcw, Shield } from "lucide-react";
import { services } from "../data/siteData.js";

const icons = [RotateCcw, Shield, Clock3, BadgeCheck];

export function ServiceSection() {
  return (
    <section id="service" className="relative overflow-hidden bg-[#eef6ff] py-24 md:py-28">
      <div className="absolute inset-0 opacity-70 wave-lines" />
      <div className="section-shell relative text-center">
        <p className="eyebrow">SERVICE</p>
        <h2 className="section-title">After-Sales Service</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="glass-card premium-card rounded-[28px] p-7 text-left transition duration-350"
              >
                <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-7 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
