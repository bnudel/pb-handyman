import { valueProps, site } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { LogoMark } from "./Logo";

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-ocean-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sunset-500/10 blur-[100px]" />

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              light
              eyebrow="Why PB Handyman"
              title={<>Local guy. <span className="text-sunset-500">Real standards.</span></>}
              body={`${site.name} is run out of ${site.city} by ${site.owner} — not a franchise, not a call center. You talk to the person doing the work, and the same person stands behind it afterward.`}
            />

            <div className="mt-10 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xs">
              <LogoMark className="h-16 w-16 shrink-0" uid="why" />
              <div>
                <p className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  {site.legalName}
                </p>
                <p className="mt-1 text-sm text-sand-200/65">
                  Serving {site.city} and greater {site.region}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {valueProps.map((v, i) => (
              <div
                key={v.title}
                className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-ocean-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-600/20 text-ocean-400 transition group-hover:bg-sunset-500 group-hover:text-white">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-sand-200/70">{v.body}</p>
                </div>
                <span className="ml-auto hidden shrink-0 font-display text-4xl font-bold text-white/10 sm:block">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
