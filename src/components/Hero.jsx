import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, ArrowRight, Bluetooth, Droplets, Mouse, ShieldCheck } from "lucide-react";
import { company, productFeatures } from "../data/siteData.js";

const floatIcons = [Activity, Droplets, ShieldCheck, Bluetooth];

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const watchY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <section ref={heroRef} id="home" className="relative min-h-[760px] overflow-hidden pt-28 md:min-h-[860px] md:pt-36">
      <motion.div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f3f8ff_0%,#ffffff_62%,#eef6ff_100%)]"
        style={{ y: backgroundY }}
      />
      <div className="premium-grid absolute inset-0 -z-10 opacity-90" />
      <motion.div
        className="ambient-lines absolute inset-x-0 top-0 -z-10 h-[62%] opacity-70"
        animate={{ opacity: [0.52, 0.82, 0.52] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div className="relative z-10" style={{ y: titleY }}>
          <p className="eyebrow">{company.englishName}</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(3rem,8vw,6.6rem)] font-black leading-[0.98] text-slate-950">
            <span className="block">Yaolin</span>
            <span className="animated-gradient-text block bg-gradient-to-r from-blue-600 via-sky-500 to-slate-900 bg-clip-text text-transparent">
              Smart Wearables for Tomorrow
            </span>
          </h1>
          <p className="mt-6 text-2xl font-black text-slate-900 md:text-3xl">A startup brand for premium wearable technology</p>
          <p className="section-copy mt-5 max-w-2xl">
            Yaolin Technology builds connected smartwatches for fitness, child safety, senior care, and business productivity, combining practical hardware, wellness insight, and mobile connectivity.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="soft-button bg-blue-600 text-white shadow-2xl shadow-blue-500/25" href="#products">
              Explore Products <ArrowRight size={18} />
            </a>
            <a className="soft-button border border-blue-200 bg-white/75 text-blue-700" href="#about">
              About Us
            </a>
            <a className="soft-button border border-slate-200 bg-slate-950 text-white shadow-xl shadow-slate-900/15" href="#contact">
              Book a Demo
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto min-h-[430px] w-full max-w-[660px]">
          <motion.div
            className="absolute left-1/2 top-[52%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[42px] border border-blue-200/70 bg-white/35 shadow-[0_0_90px_rgba(60,130,255,0.2)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-1/2 top-[72%] h-24 w-[76%] -translate-x-1/2 rounded-[100%] bg-blue-400/20 blur-xl"
            animate={{ scaleX: [1, 1.04, 1], opacity: [0.45, 0.66, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={company.heroWatch}
            alt="Yaolin premium smartwatch hero visual"
            className="relative z-10 mx-auto mt-4 w-[min(100%,560px)] rounded-[44px] object-contain drop-shadow-[0_34px_48px_rgba(9,31,65,0.28)]"
            style={{ y: watchY }}
            initial={false}
          />
          <div className="absolute inset-x-0 bottom-4 z-20 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {productFeatures.map((item, index) => {
              const Icon = floatIcons[index];
              return (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="glass-card premium-card rounded-2xl px-3 py-3 text-center text-xs font-black text-slate-800"
                >
                  <Icon className="mx-auto mb-1 text-blue-600" size={18} />
                  {item}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold text-blue-600 md:flex">
        Scroll Down <Mouse size={16} />
      </div>
    </section>
  );
}
