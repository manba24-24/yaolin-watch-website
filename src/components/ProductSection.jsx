import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, ArrowRight, CalendarDays, Droplets, HeartPulse, MapPin, MessageCircle, PhoneCall, ShieldCheck, X } from "lucide-react";
import { products } from "../data/siteData.js";

const featureIcons = {
  "Heart Rate Monitoring": HeartPulse,
  "100+ Sport Modes": Activity,
  "5ATM Water Resistance": Droplets,
  "Precise Positioning": MapPin,
  "Two-Way Calling": PhoneCall,
  "Safety Geofence": ShieldCheck,
  "Blood Pressure Trends": Activity,
  "One-Tap SOS": ShieldCheck,
  "Bluetooth Calling": PhoneCall,
  "Message Alerts": MessageCircle,
  "Schedule Management": CalendarDays,
};

export function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="section-shell text-center">
        <p className="eyebrow">PRODUCTS</p>
        <h2 className="section-title">Product Portfolio</h2>
        <p className="section-copy mx-auto mt-5 max-w-3xl">
          Our lineup covers fitness, child safety, senior wellness, and business use cases while keeping a consistent wearable design language.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="premium-card group overflow-hidden rounded-[30px] border border-slate-100 bg-white text-left shadow-[0_18px_55px_rgba(15,43,84,0.08)] transition duration-350 hover:shadow-[0_28px_80px_rgba(15,43,84,0.14)]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-black text-blue-700 backdrop-blur">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black text-slate-950">{product.name}</h3>
                  <span className="shrink-0 text-sm font-black text-blue-600">{product.price}</span>
                </div>
                <p className="mt-3 min-h-[64px] text-sm leading-7 text-slate-600">{product.description}</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {product.features.map((feature) => {
                    const Icon = featureIcons[feature] || Activity;
                    return (
                      <div key={feature} className="rounded-2xl bg-slate-50 px-2 py-3 text-center text-[11px] font-bold text-slate-600">
                        <Icon className="mx-auto mb-1 text-blue-600" size={18} />
                        {feature}
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <a
          href="#specs"
          className="soft-button mt-12 border border-blue-200 bg-white text-blue-700 shadow-lg shadow-blue-100/60"
        >
          View Specifications <ArrowRight size={18} />
        </a>
      </div>
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProductModal({ product, onClose }) {
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
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.24 }}
        className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[32px] bg-white shadow-[0_34px_120px_rgba(0,0,0,0.28)]"
      >
        <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px] bg-slate-100">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            <span className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-xs font-black text-blue-700 backdrop-blur">
              {product.category}
            </span>
          </div>
          <div className="p-7 md:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-black text-blue-600">{product.price}</p>
                <h3 className="mt-2 text-3xl font-black text-slate-950">{product.name}</h3>
              </div>
              <button type="button" onClick={onClose} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200" aria-label="Close product details">
                <X size={19} />
              </button>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">{product.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {product.features.map((feature) => {
                const Icon = featureIcons[feature] || Activity;
                return (
                  <div key={feature} className="rounded-2xl bg-blue-50 px-4 py-4 text-center text-sm font-black text-slate-700">
                    <Icon className="mx-auto mb-2 text-blue-600" size={20} />
                    {feature}
                  </div>
                );
              })}
            </div>
            <div className="mt-7 rounded-[24px] bg-slate-50 p-5">
              <h4 className="text-base font-black text-slate-950">Use Scenario</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This product line is suitable for campus demos, family wellness management, daily activity tracking, and business connectivity, with app support for sync, device control, and service records.
              </p>
            </div>
            <a href="#contact" onClick={onClose} className="soft-button mt-7 w-full bg-blue-600 text-white shadow-xl shadow-blue-500/25">
              Book a Demo <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
