import { site } from "@/content/site";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 pt-32 pb-40 md:pt-40 md:pb-52">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-ocean-600/25 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[26rem] w-[26rem] rounded-full bg-sunset-500/12 blur-[110px]" />

      {/* setting sun */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-52 w-52 rounded-full bg-gradient-to-b from-sunset-400 to-sunset-600 opacity-90 blur-[1px] lg:block" />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ocean-400 backdrop-blur-xs">
            <Icon name="pin" className="h-3.5 w-3.5" />
            Pacific Beach · San Diego
          </p>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Your neighborhood
            <br />
            handyman,
            <br />
            <span className="text-sunset-500">done right.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand-200/85 md:text-xl">
            {site.tagline}{" "}
            <span className="font-semibold text-white">{site.subTagline}</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.phoneHref}
              className="group flex items-center justify-center gap-3 rounded-full bg-sunset-500 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-sunset-500/25 transition hover:bg-sunset-600 hover:shadow-2xl hover:shadow-sunset-500/35"
            >
              <Icon name="phone" className="h-5 w-5" filled />
              Call {site.phone}
            </a>
            <a
              href={site.smsHref}
              className="flex items-center justify-center gap-3 rounded-full border-2 border-white/20 px-8 py-4.5 text-base font-bold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              <Icon name="message" className="h-5 w-5" />
              Text a photo instead
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-sand-200/70">
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-ocean-400" />
              Free estimates
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-ocean-400" />
              Pay when it&apos;s finished
            </span>
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-ocean-400" />
              {site.hours}
            </span>
          </div>
        </div>
      </div>

      {/* wave transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
        <svg viewBox="0 0 1440 180" className="block w-full" preserveAspectRatio="none">
          <path
            d="M0 96 C 180 46 360 130 600 122 C 840 114 1020 40 1260 56 C 1350 62 1400 78 1440 90 L1440 180 L0 180 Z"
            fill="#0E5C77"
            opacity=".55"
          />
          <path
            d="M0 122 C 200 84 380 152 640 148 C 900 144 1080 96 1440 118 L1440 180 L0 180 Z"
            fill="#14708E"
            opacity=".45"
          />
          <path
            d="M0 150 C 240 120 420 168 700 164 C 980 160 1160 132 1440 146 L1440 180 L0 180 Z"
            fill="#fdfaf6"
          />
        </svg>
      </div>
    </section>
  );
}
