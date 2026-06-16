import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo.jsx";
import { company, navItems } from "../data/siteData.js";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href) => {
    const target = document.querySelector(href);
    if (!target) return;
    setOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(target, { offset: -76 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/70 bg-white/72 shadow-[0_14px_45px_rgba(15,47,99,0.08)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-5 md:h-[72px]">
        <button
          className="flex items-center gap-2.5 text-left"
          type="button"
          onClick={() => goTo("#home")}
          aria-label="Back to home"
        >
          <BrandLogo />
        </button>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goTo(item.href)}
              className="text-sm font-bold text-slate-700 transition hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          className="hidden items-center gap-2 text-sm font-black text-blue-600 md:flex"
          href={`tel:${company.phone}`}
        >
          <Phone size={19} />
          {company.phone}
        </a>

        <button
          className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`section-shell grid overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[430px] pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[28px] border border-white/80 bg-white/88 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goTo(item.href)}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {item.label}
              <span className="h-px w-6 bg-blue-200" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
