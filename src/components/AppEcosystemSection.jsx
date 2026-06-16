import { motion } from "framer-motion";
import { Activity, BellRing, HeartPulse, RefreshCcw } from "lucide-react";
import { appFeatures } from "../data/siteData.js";

const icons = [HeartPulse, BellRing, Activity, RefreshCcw];

export function AppEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
      <div className="absolute inset-0 blue-grid opacity-20" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow text-sky-300">YAOLIN APP</p>
          <h2 className="section-title">Yaolin App Ecosystem</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The app connects watch hardware with health insights, family care functions, workout planning, and after-sales service in one complete wearable experience.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Data Sync", "Family Accounts", "Firmware Updates"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-center text-sm font-black text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {appFeatures.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.52, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="premium-card rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur transition hover:bg-white/12"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-13 items-center justify-center rounded-2xl bg-blue-500 text-white">
                    <Icon size={24} />
                  </span>
                  <span className="text-right">
                    <span className="block text-3xl font-black text-sky-300">{item.metric}</span>
                    <span className="block text-xs font-bold text-slate-400">{item.label}</span>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
