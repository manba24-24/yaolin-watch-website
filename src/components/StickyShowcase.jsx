import { company, showcaseSteps } from "../data/siteData.js";

export function StickyShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 text-white">
      <div className="absolute inset-0 opacity-40 blue-grid" />
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="section-shell relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-sky-300">SHOWCASE</p>
          <h2 className="mt-4 text-[clamp(2.35rem,5.3vw,5.4rem)] font-black leading-[1.02]">
            One watch,
            <span className="block text-sky-200">connected to more daily scenarios.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-300">
            By combining hardware, data interpretation, and mobile connectivity, Yaolin turns the watch into a lightweight gateway between family, health, fitness, and work.
          </p>

          <div className="relative mt-10 min-h-[360px]">
            <div className="absolute inset-x-8 top-1/2 h-20 -translate-y-1/2 rounded-[100%] bg-sky-400/25 blur-xl" />
            <img
              src={company.heroWatch}
              alt="Smartwatch showcase visual"
              className="relative z-10 mx-auto w-full max-w-[390px] rounded-[42px] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.42)]"
            />
          </div>
        </div>

        <div className="space-y-5">
          {showcaseSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-sky-300/40"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/30 bg-sky-400/10 text-sm font-black text-sky-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.text}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-3xl font-black text-sky-200">{step.stat}</p>
                  <p className="text-xs font-bold text-slate-400">{step.label}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
