import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { news } from "../data/siteData.js";

export function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section id="news" className="bg-white py-24 md:py-32">
      <div className="section-shell text-center">
        <p className="eyebrow">NEWS</p>
        <h2 className="section-title">Latest News</h2>
        <p className="section-copy mx-auto mt-5 max-w-2xl">Highlights from product launches, market cooperation, technical progress, and startup development milestones.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="premium-card group overflow-hidden rounded-[28px] border border-slate-100 bg-white text-left shadow-[0_18px_50px_rgba(16,51,101,0.08)] transition duration-350 hover:shadow-[0_28px_80px_rgba(16,51,101,0.13)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-xs font-bold text-slate-500">
                  <span>{item.date}</span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">{item.category}</span>
                </div>
                <h3 className="mt-4 min-h-[56px] text-lg font-black leading-7 text-slate-950">{item.title}</h3>
                <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-600">{item.text}</p>
                <button type="button" onClick={() => setSelectedNews(item)} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedNews && (
          <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function NewsModal({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/58 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.article
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.24 }}
        className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[32px] bg-white shadow-[0_34px_120px_rgba(0,0,0,0.28)]"
      >
        <div className="relative aspect-[16/7] overflow-hidden bg-slate-100">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          <button type="button" onClick={onClose} className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/88 text-slate-700 backdrop-blur hover:bg-white" aria-label="Close news details">
            <X size={19} />
          </button>
        </div>
        <div className="p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
            <span>{item.date}</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">{item.category}</span>
          </div>
          <h3 className="mt-4 text-3xl font-black leading-tight text-slate-950">{item.title}</h3>
          <p className="mt-5 text-base leading-8 text-slate-600">{item.detail || item.text}</p>
          <div className="mt-7 rounded-[24px] bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            These updates are written for partners, channel clients, and presentation audiences. More trial and cooperation requests can be submitted through the contact section.
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
