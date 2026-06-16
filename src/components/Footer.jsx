import { Mail, MapPin, Phone, Radio } from "lucide-react";
import { BrandLogo } from "./BrandLogo.jsx";
import { company, navItems, products, solutions } from "../data/siteData.js";

export function Footer() {
  return (
    <footer className="bg-[#07111f] py-14 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
        <div>
          <BrandLogo dark />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            We design wearable concepts for fitness, child safety, senior care, and business use with a premium and presentation-ready product vision.
          </p>
          <div className="mt-6 flex gap-3">
            {[Radio, Mail, Phone].map((Icon, index) => (
              <button key={index} type="button" className="flex size-10 items-center justify-center rounded-full bg-white/8 text-slate-300 transition hover:bg-blue-600 hover:text-white" aria-label="Brand contact channel">
                <Icon size={17} />
              </button>
            ))}
          </div>
        </div>

        <FooterList title="Products" items={products.map((item) => item.name.replace("Yaolin ", ""))} />
        <FooterList title="Solutions" items={solutions.map((item) => item.title)} />

        <div>
          <h3 className="font-black">Contact Us</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <p className="flex items-center gap-2"><Phone size={15} /> {company.phone}</p>
            <p className="flex items-center gap-2"><Mail size={15} /> {company.email}</p>
            <p className="flex items-center gap-2"><MapPin size={15} /> {company.address}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
            {["Support Center", "Privacy Policy", "Product Updates"].map((item) => (
              <span key={item} className="rounded-full bg-white/8 px-3 py-1.5">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2024 Yaolin Technology Co., Ltd. All rights reserved.</p>
        <p>{navItems.map((item) => item.label).slice(0, 4).join(" / ")}</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-black">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-400">
        {items.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
