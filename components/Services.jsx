import { services, site } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="services" className="grain py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<>One call, <span className="text-ocean-600">most of the list.</span></>}
            body="From a single loose hinge to a full punch list before your tenants move in — here's the work that comes up most."
          />
          <a
            href={site.phoneHref}
            className="group hidden shrink-0 items-center gap-2 rounded-full border-2 border-navy-900/15 px-6 py-3.5 text-sm font-bold text-navy-900 transition hover:border-sunset-500 hover:bg-sunset-500 hover:text-white lg:flex"
          >
            Not listed? Just ask
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-sand-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-ocean-600/30 hover:shadow-[0_20px_50px_-25px_rgba(10,46,69,0.4)]"
            >
              <span className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-ocean-600/5 transition group-hover:bg-sunset-500/10" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-sand-100 transition group-hover:bg-sunset-500">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-bold uppercase tracking-wide text-navy-900">
                {s.title}
              </h3>
              <p className="relative mt-3 text-[0.95rem] leading-relaxed text-navy-800/70">
                {s.blurb}
              </p>
              {s.price && (
                <p className="relative mt-4 inline-block rounded-full bg-sunset-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-sunset-600">
                  {s.price}
                </p>
              )}
            </article>
          ))}
        </div>

        <a
          href={site.phoneHref}
          className="mt-8 flex items-center justify-center gap-2 rounded-full border-2 border-navy-900/15 px-6 py-4 text-sm font-bold text-navy-900 lg:hidden"
        >
          Not listed? Just ask
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
