import { motion } from "framer-motion";
import { company, stats } from "../data/siteData.js";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">ABOUT</p>
          <h2 className="section-title">About Yaolin</h2>
          <p className="section-copy mt-6">
            Yaolin Technology is a startup-oriented wearable brand focused on smartwatch research, design, and product storytelling. The concept covers fitness, child safety, senior care, and business scenarios, supported by sensor integration, low-power hardware, health insight, and mobile connectivity.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[24px] bg-blue-50/80 p-5 text-center">
                <p className="text-3xl font-black text-blue-600">{item.value}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.78 }}
          className="relative overflow-hidden rounded-[34px] shadow-[0_28px_80px_rgba(18,67,129,0.15)]"
        >
          <img src={company.aboutBuilding} alt="Yaolin Technology workspace and R&D scene" className="h-full min-h-[330px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
