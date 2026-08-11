import { steps } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="How it works"
          title={<>Three steps. <span className="text-ocean-600">No surprises.</span></>}
          body="A straightforward approach so you always know what's happening, what it costs, and when it'll be done."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-ocean-600/25 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((p) => (
              <li key={p.step} className="text-center lg:px-4">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-display text-2xl font-bold text-sunset-500 shadow-lg shadow-navy-900/20 ring-8 ring-sand-50">
                  {p.step}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-navy-900">
                  {p.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-navy-800/70">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
