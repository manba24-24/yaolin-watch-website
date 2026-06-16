import { motion } from "framer-motion";
import { LockKeyhole, ShieldAlert, SlidersHorizontal } from "lucide-react";
import { securityItems } from "../data/siteData.js";

const icons = [LockKeyhole, SlidersHorizontal, ShieldAlert];

export function SecuritySection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="section-shell">
        <div className="rounded-[34px] border border-slate-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-7 text-white shadow-[0_24px_80px_rgba(8,20,38,0.18)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow text-sky-300">DATA & SAFETY</p>
              <h2 className="mt-2 text-3xl font-black leading-tight md:text-5xl">Data Safety and Health Notice</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Wearable devices involve health trends, positioning, and family sharing features. Our concept emphasizes transparent permissions, minimal data use, and clear user-facing guidance.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {securityItems.map((item, index) => {
                const Icon = icons[index];
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="premium-card rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur transition hover:bg-white/12"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500 text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
