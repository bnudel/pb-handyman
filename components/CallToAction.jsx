import { site } from "@/content/site";
import Icon from "./Icon";

export default function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-20 h-96 w-96 rounded-full bg-ocean-600/25 blur-[110px]" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-sunset-500/20 blur-[110px]" />
        <svg viewBox="0 0 1440 200" className="absolute inset-x-0 bottom-0 w-full opacity-20" preserveAspectRatio="none">
          <path
            d="M0 120 C 220 80 400 150 660 146 C 920 142 1120 90 1440 116 L1440 200 L0 200 Z"
            fill="#2AA8B0"
          />
        </svg>
      </div>

      <div className="container-page relative text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ocean-400">
          <Icon name="clock" className="h-3.5 w-3.5" />
          {site.hours}
        </p>

        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white md:text-6xl">
          Got a list? <span className="text-sunset-500">Let&apos;s knock it out.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sand-200/75">
          Call or text a quick description of the job — photos help. You&apos;ll get an honest
          estimate and a real timeline, not a runaround.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-sunset-500 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-sunset-500/25 transition hover:bg-sunset-600 sm:w-auto"
          >
            <Icon name="phone" className="h-5 w-5" filled />
            Call {site.phone}
          </a>
          <a
            href={site.smsHref}
            className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/20 px-8 py-4.5 text-base font-bold text-white transition hover:border-white/50 hover:bg-white/5 sm:w-auto"
          >
            <Icon name="message" className="h-5 w-5" />
            Send a text
          </a>
        </div>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sand-200/65 underline-offset-4 transition hover:text-white hover:underline"
        >
          <Icon name="mail" className="h-4 w-4" />
          {site.email}
        </a>
      </div>
    </section>
  );
}
