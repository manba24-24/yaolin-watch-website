import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { company } from "../data/siteData.js";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 className="section-title">Book a Demo or Partnership Call</h2>
          <p className="section-copy mt-5">
            Use this form for campus demos, channel cooperation, product trials, and project presentation requests.
          </p>
          <div className="mt-9 space-y-4">
            <Info icon={Phone} title="Phone" text={company.phone} />
            <Info icon={Mail} title="Email" text={company.email} />
            <Info icon={MapPin} title="Address" text={company.address} />
          </div>
        </div>

        <form onSubmit={submit} className="glass-card rounded-[34px] p-6 md:p-9">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Name
              <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder="Enter your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Phone
              <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder="Enter your phone number" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
            Request Type
            <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" defaultValue="Campus Demo">
              <option>Campus Demo</option>
              <option>Channel Partnership</option>
              <option>Product Trial</option>
              <option>After-Sales Support</option>
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
            Request Details
            <textarea className="min-h-40 resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder="For example: campus demo, partner inquiry, product trial, or business consultation" />
          </label>
          <button type="submit" className="soft-button mt-6 w-full bg-blue-600 text-white shadow-2xl shadow-blue-500/25">
            Submit Request <Send size={18} />
          </button>
          {sent && (
            <p className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-center text-sm font-bold text-blue-700">
              Your request has been submitted. The Yaolin team will contact you within one business day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-4 rounded-[24px] border border-slate-100 bg-slate-50 p-4">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
        <Icon size={22} />
      </span>
      <span>
        <span className="block text-xs font-bold text-slate-500">{title}</span>
        <span className="block text-base font-black text-slate-950">{text}</span>
      </span>
    </div>
  );
}
