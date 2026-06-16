import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Linkedin, Sparkles, Users, X } from "lucide-react";
import { team } from "../data/siteData.js";

const memberMeta = {
  "Xie Jianfeng": {
    direction: "Strategy planning, resource integration, and brand direction",
    modules: ["Company strategy", "Funding communication", "Key partnerships"],
    collaboration: "Coordinates product, technology, market, and business priorities to keep the full project aligned.",
  },
  "Li Weibiao": {
    direction: "Operations systems, workflow coordination, and team management",
    modules: ["Operating process", "Delivery alignment", "Internal management"],
    collaboration: "Connects front-end business goals with back-end execution so plans land smoothly.",
  },
  "Gan Shengqiang": {
    direction: "Technical roadmap, R&D planning, and architecture execution",
    modules: ["Tech selection", "Hardware integration", "R&D management"],
    collaboration: "Keeps the engineering team focused on the right milestones and delivery quality.",
  },
  "Xu Zeqing": {
    direction: "Product definition, experience design, and iteration planning",
    modules: ["Requirement framing", "User experience", "Product iteration"],
    collaboration: "Works across design and engineering to turn user needs into presentable product concepts.",
  },
  "Li Shixing": {
    direction: "Brand communication, channel growth, and market strategy",
    modules: ["Brand promotion", "Campaigns", "Channel growth"],
    collaboration: "Builds the market-facing story and makes the project feel closer to a real startup brand.",
  },
  "Liu Ruiran": {
    direction: "Business development, sales management, and client cooperation",
    modules: ["Client contact", "Partner follow-up", "Sales management"],
    collaboration: "Leads external communication and pushes partnership progress forward.",
  },
  "Wei Zhengchang": {
    direction: "Finance management, budget control, and operating support",
    modules: ["Budget control", "Financial analysis", "Operations support"],
    collaboration: "Provides planning discipline and data support for resource allocation and execution.",
  },
  "Wei Futao": {
    direction: "Administration, HR coordination, and organizational support",
    modules: ["HR support", "Administration", "Team coordination"],
    collaboration: "Keeps the team organized and supports the daily rhythm behind delivery work.",
  },
};

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="bg-[#f7fbff] py-24 md:py-28">
      <div className="section-shell text-center">
        <p className="eyebrow">TEAM</p>
        <h2 className="section-title">Our Team</h2>
        <p className="section-copy mx-auto mt-5 max-w-2xl">A cross-functional team in engineering, product, operations, marketing, and service supports the full wearable concept.</p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={`${member.name}-${member.role}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -7 }}
              onClick={() => setSelectedMember(member)}
              className="premium-card group cursor-pointer rounded-[28px] border border-white bg-white p-6 text-center shadow-[0_18px_55px_rgba(19,70,133,0.08)] transition duration-350 hover:shadow-[0_26px_75px_rgba(19,70,133,0.12)]"
            >
              <div className="block w-full text-center">
                <div className="mx-auto size-24 overflow-hidden rounded-[26px] bg-blue-50">
                  <img src={member.avatar} alt={member.name} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.06]" />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">{member.name}</h3>
                <p className="mt-1 text-sm font-bold text-blue-600">{member.role}</p>
                <p className="mt-3 min-h-[62px] text-sm leading-7 text-slate-500">{member.intro}</p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-600">
                  View Profile <ArrowRight size={16} />
                </span>
              </div>
              <button
                type="button"
                onClick={(event) => event.stopPropagation()}
                className="mx-auto mt-4 flex size-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function TeamMemberModal({ member, onClose }) {
  const meta = memberMeta[member.name] || {
    direction: member.role,
    modules: ["Project coordination", "Product support", "Team execution"],
    collaboration: member.intro,
  };

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
        <div className="grid gap-0 md:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[360px] bg-[linear-gradient(180deg,#eaf3ff_0%,#dcecff_100%)] p-6 md:p-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/88 text-slate-700 backdrop-blur hover:bg-white"
              aria-label="Close team profile"
            >
              <X size={19} />
            </button>
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full bg-white/88 px-4 py-2 text-xs font-black text-blue-700 backdrop-blur">
                  TEAM PROFILE
                </span>
                <div className="mx-auto mt-8 max-w-[300px] overflow-hidden rounded-[34px] border border-white/70 bg-white shadow-[0_18px_50px_rgba(42,92,180,0.12)]">
                  <img src={member.avatar} alt={member.name} className="h-full w-full object-cover object-top" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {meta.modules.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 px-3 py-3 text-xs font-black text-slate-700 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-7 md:p-9">
            <p className="text-sm font-black text-blue-600">Member Profile</p>
            <div className="mt-3 flex items-start justify-between gap-5">
              <div>
                <h3 className="text-3xl font-black text-slate-950">{member.name}</h3>
                <p className="mt-2 text-base font-bold text-slate-600">{member.role}</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-8 text-slate-600">{member.intro}</p>

            <div className="mt-7 grid gap-4">
              <DetailCard icon={BriefcaseBusiness} title="Focus Area" text={meta.direction} />
              <DetailCard icon={Sparkles} title="Key Modules" text={meta.modules.join(" / ")} />
              <DetailCard icon={Users} title="Team Collaboration" text={meta.collaboration} />
            </div>

            <div className="mt-7 rounded-[24px] bg-slate-50 p-5">
              <h4 className="text-base font-black text-slate-950">Presentation Note</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This role works well when introduced alongside the product, operations, marketing, or technology section so the project feels like a realistic company structure.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-slate-50 px-5 py-5 text-left">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <Icon size={18} />
        </div>
        <h4 className="text-base font-black text-slate-950">{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
