import { motion } from "framer-motion";
import { BatteryCharging, BluetoothConnected, Droplets, MonitorSmartphone, Radar, UsersRound } from "lucide-react";
import { productSpecs } from "../data/siteData.js";

const specRows = [
  ["screen", "Display", MonitorSmartphone],
  ["battery", "Battery", BatteryCharging],
  ["waterproof", "Protection", Droplets],
  ["sensors", "Sensors", Radar],
  ["connection", "Connectivity", BluetoothConnected],
  ["audience", "Target Users", UsersRound],
];

export function ProductSpecSection() {
  return (
    <section id="specs" className="bg-[#f6faff] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">SPECIFICATIONS</p>
            <h2 className="section-title">Specification Matrix</h2>
            <p className="section-copy mt-5">
              Four product lines cover sport, child safety, senior care, and business productivity with a clear side-by-side hardware comparison.
            </p>
          </div>
          <div className="rounded-[28px] border border-blue-100 bg-white/80 p-5 shadow-[0_20px_70px_rgba(18,67,129,0.09)]">
            <div className="grid gap-3 sm:grid-cols-3">
              {["Smart Wellness", "Low-Power Endurance", "Scenario-Based Design"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-950 px-4 py-4 text-center text-sm font-black text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {productSpecs.map((product, index) => (
            <motion.article
              key={product.model}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -7 }}
              className="premium-card rounded-[30px] border border-white bg-white p-6 shadow-[0_18px_60px_rgba(18,67,129,0.08)] transition hover:shadow-[0_28px_82px_rgba(18,67,129,0.13)]"
            >
              <p className="text-sm font-black text-blue-600">{product.type}</p>
              <h3 className="mt-2 text-3xl font-black text-slate-950">{product.model}</h3>
              <div className="mt-6 space-y-4">
                {specRows.map(([key, label, Icon]) => (
                  <div key={key} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold text-slate-400">{label}</span>
                      <span className="block text-sm font-bold leading-6 text-slate-700">{product[key]}</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
