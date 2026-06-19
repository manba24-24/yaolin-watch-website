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
            {company.companyIntro}
          </p>
          <p className="mt-5 max-w-3xl text-sm font-bold uppercase tracking-[0.22em] text-blue-600/90">
            Founded in {company.foundedYear} - {company.companyStage}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {company.companyHighlights.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-blue-100 bg-blue-50/70 px-5 py-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-lg font-black text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {company.companyProfile.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-100 bg-slate-50 px-5 py-4">
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(20,71,135,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">Development Signals</p>
                <h3 className="mt-3 text-xl font-black text-slate-950">Milestones that support a stronger company profile</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {company.milestones.map((item) => (
                <div key={item.title} className="rounded-[22px] bg-slate-50 px-5 py-4">
                  <h4 className="text-sm font-black text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[24px] bg-blue-50/80 p-5 text-center">
                <p className="text-3xl font-black text-blue-600">{item.value}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            These operating figures are presented as supporting evidence for product delivery, partner reach, and R&D direction rather than as standalone claims.
          </p>
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
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <div className="rounded-[28px] border border-white/20 bg-slate-950/45 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-200">Company Snapshot</p>
              <h3 className="mt-3 text-2xl font-black">Wearable R&D with a clearer market story</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                From product planning and hardware integration to channel cooperation and service support, Yaolin presents a more complete company image for visitors, partners, and presentation audiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
