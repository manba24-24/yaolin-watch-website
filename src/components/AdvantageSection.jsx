import { motion } from "framer-motion";
import { BadgeCheck, BrainCircuit, Cpu, Layers3 } from "lucide-react";
import { advantages } from "../data/siteData.js";

const icons = [Cpu, BrainCircuit, BadgeCheck, Layers3];

export function AdvantageSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6faff] py-24 md:py-28">
      <div className="absolute inset-x-0 top-8 h-64 opacity-60 wave-lines" />
      <div className="section-shell relative text-center">
        <p className="eyebrow">ADVANTAGES</p>
        <h2 className="section-title">Core Advantages</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="premium-card group rounded-[30px] border border-white/80 bg-gradient-to-br from-white via-white to-blue-50 p-7 text-left shadow-[0_18px_60px_rgba(19,70,133,0.08)] transition duration-350 hover:shadow-[0_30px_80px_rgba(19,70,133,0.14)]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                  <Icon size={26} />
                </div>
                <h3 className="mt-8 text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
