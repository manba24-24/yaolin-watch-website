import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { faqs } from "../data/siteData.js";

export function FaqSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-copy mt-5">
            These questions cover the key topics users and partners usually ask before purchasing, trying, or presenting the concept.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ x: 6 }}
              className="premium-card rounded-[26px] border border-slate-100 bg-slate-50 p-6 transition hover:bg-white hover:shadow-[0_18px_55px_rgba(16,51,101,0.08)]"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <HelpCircle size={21} />
                </span>
                <span>
                  <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
