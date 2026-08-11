import { faqs } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function Faq() {
  return (
    <section id="faq" className="grain bg-sand-100/60 py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Questions"
            title={<>Good to <span className="text-ocean-600">know.</span></>}
            body="If it's not here, call or text — you'll get a straight answer."
          />

          <div className="divide-y divide-sand-300/60 border-y border-sand-300/60">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="text-[1.05rem] font-bold text-navy-900">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition group-open:rotate-45 group-open:border-sunset-500 group-open:bg-sunset-500 group-open:text-white">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-14 text-[0.95rem] leading-relaxed text-navy-800/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
