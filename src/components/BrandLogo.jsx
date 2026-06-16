import logoImage from "../assets/images/logo-yaolin.png";

export function BrandLogo({ dark = false }) {
  return (
    <span className="inline-flex items-center">
      <span
        className={`inline-flex overflow-hidden rounded-2xl ${
          dark
            ? "h-[58px] w-[220px] bg-white/6 ring-1 ring-white/10"
            : "h-[46px] w-[172px] bg-white ring-1 ring-slate-200/80 shadow-lg shadow-blue-500/8"
        }`}
      >
        <img
          src={logoImage}
          alt="Yaolin Technology logo"
          className="block h-full w-full object-cover object-center"
        />
      </span>
    </span>
  );
}
