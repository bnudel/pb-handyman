import { reviews } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function Reviews() {
  return (
    <section id="reviews" className="grain bg-sand-100/60 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="Client feedback"
          title={<>What neighbors <span className="text-ocean-600">actually say.</span></>}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-sand-200 bg-white p-8 shadow-[0_16px_40px_-30px_rgba(10,46,69,0.5)]"
            >
              <div className="flex gap-1 text-sunset-500" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" className="h-4 w-4" filled />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-navy-800/85">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-sand-200 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-display text-base font-bold text-sand-100">
                  {r.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy-900">{r.name}</span>
                  <span className="block text-xs text-navy-800/55">{r.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
