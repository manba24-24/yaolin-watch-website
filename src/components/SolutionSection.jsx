import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "../data/siteData.js";

export function SolutionSection() {
  return (
    <section id="solutions" className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">SOLUTIONS</p>
          <h2 className="section-title">Solutions</h2>
          <p className="section-copy mt-5">We package hardware, app experience, and service flow into scenario-based wearable solutions for different audiences.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[34px] bg-slate-950 text-white shadow-[0_24px_70px_rgba(8,20,38,0.15)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-88 transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">{item.text}</p>
                  <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-blue-50">
                    View Details <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
