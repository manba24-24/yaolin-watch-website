import { motion } from "framer-motion";
import { Award, BadgeCheck, Building2, Handshake, ShieldCheck } from "lucide-react";
import { partnerTags, trustItems } from "../data/siteData.js";

const icons = [ShieldCheck, BadgeCheck, Building2, Handshake];

export function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
      <div className="absolute inset-0 blue-grid opacity-20" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-sky-300">TRUST</p>
            <h2 className="section-title">Trust and Partnership Ecosystem</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              University incubation, quality workflows, channel cooperation, and supply capability help this concept feel like a startup with a credible path to market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {partnerTags.map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trustItems.map((item, index) => {
              const Icon = icons[index] || Award;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="premium-card rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/12"
                >
                  <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-500 text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
